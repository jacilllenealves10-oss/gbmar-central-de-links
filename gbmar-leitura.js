/* Leitura extrativa: evidências são intervalos exatos do texto fornecido. */
(function(root){
  'use strict';
  const norm=x=>String(x||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  const STOP=new Set('a o as os um uma de da do das dos no na nos nas em para por pelo pela com e ou ao aos que qual quais como onde quando eu meu minha voce preciso saber ver esse essa esses essas isso este esta texto documento trecho realmente informa informado diz confirma confirmar existe tem ha segundo sobre sobre o quanto quantos quantas me diga explique resumir resuma'.split(' '));
  const lemma={prazos:'prazo',dias:'dia',horas:'hora',datas:'data',condicoes:'condicao',excecoes:'excecao',entregar:'entrega',entregue:'entrega',entregas:'entrega',autorizada:'autorizacao',autorizado:'autorizacao',autorizar:'autorizacao',veiculos:'veiculo',viaturas:'viatura'};
  const words=x=>[...new Set(norm(x).split(' ').map(w=>lemma[w]||w).filter(w=>w.length>1&&!STOP.has(w)))];
  const conditional=/\b(exceto|salvo|ressalv|somente|apenas|desde que|condicion|nao se aplica|nao havera|nao sera|prorrog|suspens|para estes|para essas|nesse caso|neste caso|esse prazo|tal prazo|contagem|apos|antes|ate|caso|se houver|se nao)\b/;
  const temporal=/\b(prazo|dias?|horas?|meses|semanas?|ate|apos|antes|vencimento|entrega|contagem)\b/;
  function sentenceSpans(text,start,end){
    const out=[];let from=start;
    for(let i=start;i<end;i++){
      if(!/[.!?\n]/.test(text[i]))continue;
      const next=text[i+1];if(next&&!/\s/.test(next))continue;
      if(text[i]==='.'&&/(?:\b(?:art|arts|sr|sra|dr|dra|inc|pag|n|num)|\d)\.$/i.test(text.slice(Math.max(from,i-8),i+1)))continue;
      out.push({start:from,end:i+1});from=i+1;
    }
    if(from<end)out.push({start:from,end});
    return out.map(s=>{while(s.start<s.end&&/\s/.test(text[s.start]))s.start++;while(s.end>s.start&&/\s/.test(text[s.end-1]))s.end--;return s;}).filter(s=>s.end>s.start);
  }
  function unitsFor(source){
    const ranges=[];let start=0;const separator=/\n[ \t]*\n+/g;let m;
    function add(a,b){while(a<b&&/\s/.test(source[a]))a++;while(b>a&&/\s/.test(source[b-1]))b--;if(b>a)ranges.push({start:a,end:b});}
    while((m=separator.exec(source))){add(start,m.index);start=m.index+m[0].length;}add(start,source.length);
    const units=[];
    ranges.forEach((r,paragraph)=>{
      if(r.end-r.start<=2200)units.push({...r,paragraph});
      else sentenceSpans(source,r.start,r.end).forEach(s=>units.push({...s,paragraph}));
    });
    return units.map((u,i)=>({...u,i,text:source.slice(u.start,u.end)}));
  }
  function analyze(text,question='',name='Texto fornecido'){
    const source=String(text||'').slice(0,30000),q=String(question||'').trim().slice(0,500),qt=words(q),qn=norm(q);
    if(source.trim().length<10)return {text:'Cole o trecho do documento para que eu possa localizar a informação. Não tenho acesso ao documento sem o texto.',count:0,evidence:[],status:'missing'};
    const units=unitsFor(source),temporalQuery=qt.some(w=>['prazo','dia','hora','data','entrega','limite','vencimento','contagem'].includes(w));
    const conditionQuery=qt.some(w=>['excecao','condicao','ressalva'].includes(w));
    const contentWords=qt.filter(w=>!/^\d+$/.test(w));
    const ranked=units.map(u=>{
      const uw=words(u.text),un=norm(u.text),matches=contentWords.filter(w=>uw.includes(w)).length;
      let score=matches*4;
      if(temporalQuery&&(temporal.test(un)||/\d{1,2}[/:h]\d{1,2}/.test(u.text)))score+=3;
      if(conditionQuery&&conditional.test(un))score+=4;
      if(!q)score=1+(temporal.test(un)?2:0)+(conditional.test(un)?2:0)+(u.i===0?1:0);
      return {...u,score};
    }).filter(u=>u.score>0).sort((a,b)=>b.score-a.score||a.i-b.i);
    if(!ranked.length)return {text:'Não localizei no texto fornecido um trecho que responda à pergunta. Isso não autoriza concluir algo sobre um documento completo que não foi fornecido.',count:0,evidence:[],status:'not_found'};
    // Um resumo com muitas palavras genéricas não pode confirmar um fato por coincidência.
    if(q&&!contentWords.length&&!temporalQuery&&!conditionQuery)return {text:'Diga qual informação quer verificar: por exemplo, o prazo de entrega ou a condição de início da contagem.',count:0,evidence:[],status:'clarify'};
    const selected=new Set();
    for(const u of ranked.slice(0,q?3:4)){
      selected.add(u.i);
      // Preserva a frase anterior em períodos longos e regras ligadas a parágrafos seguintes.
      if(u.i>0&&((u.end-u.start<400&&units[u.i-1].paragraph===u.paragraph)||conditional.test(norm(u.text).slice(0,70))))selected.add(u.i-1);
      for(let j=u.i+1;j<units.length&&j<=u.i+3;j++){
        const next=units[j];
        if(conditional.test(norm(next.text).slice(0,160))||(j===u.i+1&&next.paragraph===u.paragraph&&next.end-next.start<350))selected.add(j);else break;
      }
    }
    const spans=[];for(const i of [...selected].sort((a,b)=>a-b)){
      const u=units[i],last=spans.at(-1);
      if(last&&u.start<=last.end+2)last.end=u.end;else spans.push({start:u.start,end:u.end});
    }
    const evidence=spans.map((s,i)=>{
      const quote=source.slice(s.start,s.end),lineStart=source.slice(0,s.start).split('\n').length,lineEnd=source.slice(0,s.end).split('\n').length;
      const marks=[];const marker=/\b\d+(?:[.,/:h-]\d+)*(?:\s*(?:dias?|horas?|meses|semanas?))?|\b(?:exceto|salvo|somente|apenas|desde que|não se aplica|não haverá|não será|após|antes|contagem|prorrogado|condicionado)\b/gi;let m;
      while((m=marker.exec(quote)))marks.push({start:m.index,end:m.index+m[0].length});
      return {...s,id:'T'+(i+1),text:quote,lineStart,lineEnd,marks};
    });
    const askedValues=[...q.matchAll(/\b\d+(?:[.,/:h-]\d+)*(?:\s*(?:dias?|horas?|meses|semanas?))?/gi)].map(m=>m[0]);
    const absentValues=askedValues.filter(v=>!(' '+norm(source)+' ').includes(' '+norm(v)+' '));
    let lead=q?'Trechos relacionados à pergunta — confira o valor e suas condições na fonte.':'Resumo por trechos — mantidas as condições e exceções próximas.';
    if(absentValues.length)lead='Não localizei a expressão “'+absentValues.join('” ou “')+'” no texto fornecido. Estes são os trechos relacionados encontrados; eles não confirmam automaticamente esse valor.';
    const textOutput=lead+'\n\n'+evidence.map(e=>'['+e.id+'] '+name+' · linha'+(e.lineEnd!==e.lineStart?'s ':' ')+e.lineStart+(e.lineEnd!==e.lineStart?'–'+e.lineEnd:'')+'\n'+e.text).join('\n\n')+'\n\nExtraído somente do texto fornecido. A seleção não confirma autenticidade, vigência ou interpretação jurídica.';
    return {text:textOutput,count:evidence.length,evidence,status:absentValues.length?'value_not_found':'evidence',lead,name};
  }
  const api={analyze,unitsFor};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.GBMarReader=api;
})(typeof globalThis!=='undefined'?globalThis:this);
