/* Motor de consulta determinístico, executado integralmente no dispositivo. */
(function(root) {
  'use strict';
  const norm = x => String(x || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const plurals = {chover:'chuva',chovendo:'chuva',mares:'mare',materiais:'material',embarcacoes:'embarcacao',viaturas:'viatura',boletins:'boletim',portarias:'portaria',postos:'posto',escalas:'escala',permissoes:'permissao',operacoes:'operacao',msas:'msa',bges:'bge',chuvas:'chuva',motores:'motor',processos:'processo',documentos:'documento',servicos:'servico',creditos:'credito',ocorrencias:'ocorrencia',links:'link'};
  const stop = new Set('a o as os um uma de da do das dos no na nos nas em para por pelo pela com e ou ao aos que qual quais como onde quando porque eu meu minha meus minhas voce voces quero queria preciso gostaria saber ver consultar consulta acessar acesso abrir abra encontre encontrar link site sistema pagina gbmar cbmpe favor pode poderia tem tenho me mostre mostrar explique explica funciona serve usar uso hoje agora atual atualizado vai esta estao esse essa isso ele ela nele nela mais detalhe detalhes quanto quantos quantas'.split(' '));
  const tokens = x => [...new Set(norm(x).split(' ').map(t => plurals[t] || t).filter(t => t.length>1 && !stop.has(t)))];
  function distance(a,b) {
    if(Math.abs(a.length-b.length)>2)return 9;
    let prev=Array.from({length:b.length+1},(_,i)=>i);
    for(let i=1;i<=a.length;i++){const row=[i];for(let j=1;j<=b.length;j++)row[j]=Math.min(row[j-1]+1,prev[j]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));prev=row;}
    return prev[b.length];
  }
  function near(a,b){return a===b?1:a.length>=5&&b.length>=5&&distance(a,b)<=(Math.min(a.length,b.length)>=9?2:1)?.68:0;}
  function safeURL(url){try {const u=new URL(url);return u.protocol==='https:'?u.href:'';}catch{return '';}}
  function create(knowledge,catalog){
    const entries=knowledge.entries.map(e=>{
      const item=catalog.find(c=>norm(c.title).includes(norm(e.match)));
      return {...e,url:safeURL(item?.url),pending:!item?.url,keywords:tokens(e.aliases.join(' ')+' '+e.title),phrases:e.aliases.map(norm)};
    });
    const byId=id=>entries.find(e=>e.id===id);
    let context=[];
    const reset=()=>{context=[];};
    function rank(question){
      // A correção "não X, mas Y" deve dar prioridade ao novo assunto.
      const q=norm(question).replace(/^.*\b(?:mas|e sim|na verdade)\b\s*/, '').replace(/^nao (?:quero|e) .*? (?:quero|prefiro) (?:o |a )?/, '');
      const ts=tokens(q);
      return entries.map(e=>{
        const explicit=e.phrases.filter(p=>p.length>2&&(' '+q+' ').includes(' '+p+' '));
        let score=0,hits=0;
        for(const t of ts){
          let best=0;
          for(const w of e.keywords){const weight=near(t,w);if(weight){const frequency=entries.filter(x=>x.keywords.includes(w)).length;best=Math.max(best,weight*(2+Math.log(1+entries.length/(frequency+1))));}}
          if(best){score+=best;hits++;}
        }
        const fuzzyPhrase=e.phrases.some(p=>{const words=tokens(p);return words.length>=2&&words.every(w=>ts.some(t=>near(t,w)))&&ts.length<=words.length+3;});
        const phrase=explicit.reduce((m,p)=>Math.max(m,p.split(' ').length*5),0)+(fuzzyPhrase?8:0);
        const explicitDomain=e.phrases.some(p=>p.split(' ').length>=2&&(' '+q+' ').includes(' '+p+' '));
        const coverage=ts.length?hits/ts.length:0;
        let intentBoost=0;
        if(e.id==='apac'&&/\b(chover|chovendo|chuva|chuvas|meteorologia|apac|radar)\b/.test(q))intentBoost=25;
        if(e.id==='forca'&&/\b(quem esta|quem ta|quantos militares|quantas pessoas|posto.*ativ[oa]|posto.*funcionando|de servico hoje)\b/.test(q))intentBoost=30;
        if(e.id==='contingencia'&&/\b(modelos|contingencia)\b/.test(q)&&/\bsei\b/.test(q))intentBoost=20;
        return {entry:e,score:score+phrase+(explicitDomain?5:0)+intentBoost,coverage,explicit:explicit.length>0||intentBoost>0};
      }).filter(x=>x.score>=4 && (x.coverage>=.35 || x.explicit)).sort((a,b)=>b.score-a.score);
    }
    function sourcesFor(selected){
      const available=selected.filter(e=>e.url);
      if(selected.some(e=>['frota','manutencao'].includes(e.id)))available.push(byId('forca'),byId('smo'));
      if(selected.some(e=>e.id==='combustivel'))available.push(byId('prime'));
      return [...new Map(available.filter(e=>e?.url).map(e=>[e.id,e])).values()].slice(0,4);
    }
    function result(text,selected=[],suggestions=[],steps=[]){
      return {text,sources:sourcesFor(selected),suggestions,steps,topics:selected.map(e=>e.id)};
    }
    const menu=['Como acessar o Prime Frota?','Mapa de Força GBMar','Consultar marés','Quais serviços você conhece?'];
    function answer(question){
      const raw=String(question||'').trim().slice(0,1200),q=norm(raw);
      if(!q)return result('Digite uma pergunta sobre os serviços da Central.',[],menu);
      if(/^(oi|ola|bom dia|boa tarde|boa noite|ajuda|menu|iniciar|tudo bem)[ !?.]*$/.test(q)) return result('Olá! Sou o GBMar IA. Posso explicar os serviços, indicar o link certo e orientar o acesso. Qual é a sua dúvida?',[],menu);
      if(/^(obrigad[oa]|valeu|entendi|ok|certo|perfeito)( .*|$)/.test(q))return result('Por nada! Se precisar, escolha outro serviço ou faça uma nova pergunta.',[],menu);
      if(/\b(creditos|custo|custos|custa|pago|gratis|gratuito|api|chatgpt|gpt|modelo generativo|inteligencia artificial)\b/.test(q)&& !/\b(combustivel|abastecimento|prime|saldo|frota)\b/.test(q))return result('As respostas são processadas neste navegador, com uma base local e regras de interpretação. Não utilizo GPT, API paga, chave de acesso ou cobrança por mensagem. O uso deste assistente pelos visitantes não consome créditos do criador. Não sou um modelo generativo e não aprendo automaticamente com as conversas.',[],['O que você consegue fazer?','Fontes e bibliografia']);
      if(/\b(biografia|bibliografia|fontes|autoria|quem criou|quem desenvolveu|sobre voce|quem e voce|o que voce consegue|o que voce faz|capacidades)\b/.test(q))return result('Sou o GBMar IA, assistente de orientação da Central de Links. O projeto é desenvolvido pelo Asp BM BRAGANÇA, Técnico em Desenvolvimento de Sistemas (1.200 horas), conforme a apresentação pública da Central.\n\nMinha base reúne 27 serviços, perguntas frequentes, passos de consulta e referências. A aba Sobre e fontes mostra a origem e os limites de cada conteúdo. Na aba Ler texto, resumo trechos fornecidos por você com seleção de frases do próprio texto. Não acesso contas nem executo ações nos sistemas.',[],['Quais serviços você conhece?']);
      if(/\b(video|videos|clipe|clipes)\b/.test(q))return result('Posso montar um vídeo-guia em texto a partir de uma resposta, no próprio navegador, sem áudio nem filmagens externas. Pergunte sobre um serviço e use “Vídeo-guia” na resposta, se o navegador oferecer esse recurso. Também há guias visuais em etapas.',[],menu);
      if(/\b(todos os links|todos os servicos|quais servicos|listar servicos|lista de links|catalogo)\b/.test(q))return result('A base cobre operações e postos; marés, chuvas e balneabilidade; efetivo e escalas; frota, materiais e combustível; documentos e sistemas institucionais.\n\nEscolha um assunto. A aba Sobre e fontes lista todos os 27 serviços, incluindo os atalhos ainda em preparação.',[],['Operações e postos','Documentos e sistemas','Frota e combustível','Clima e praias']);
      const groups={'operacoes e postos':['operacoes','postos','forca','saq'],'documentos e sistemas':['sei','bge','sigpad','sogo'],'frota e combustivel':['frota','prime','smo','materiais'],'clima e praias':['mares','apac','cprh']};
      if(groups[q]){const selected=groups[q].map(byId);context=selected.map(e=>e.id);return result('Escolha o serviço que deseja conhecer:',selected,selected.map(e=>e.title));}
      if(/\b(resuma|resumir|leia|ler texto|interpretar texto|analisar texto)\b/.test(q)&&raw.length>180)return result('Para ler esse conteúdo localmente, use a aba Ler texto. Cole o trecho e selecione Resumir. O resumo conserva frases da fonte e não confirma a veracidade do documento.',[],['Abrir leitura de texto']);
      if(/\b(minha senha e|senha e|password|token|api key|chave secreta)\b/.test(q))return result('Não envie senhas ou chaves. Este assistente não precisa delas. Use apenas o portal oficial para autenticar-se.',[],menu);
      let ranked=rank(raw);
      const follow=/^(e |mas |como |por que |qual |onde )?(acesso|entro|entrar|abrir|abro|usar|funciona|nao consigo|nao abre|nao abriu|senha|recuperar|passo a passo|mais detalhes|explique melhor|resuma|resumir|fonte|esse|essa|ele|ela|nele|nela|o primeiro|o segundo)/.test(q)||/^(e )?(como (entro|acesso|abro|faco)|precisa de senha|qual a fonte|e para entrar|e a senha)$/.test(q);
      let selected=[];
      if(follow&&context.length&&(!ranked.length||!ranked[0].explicit))selected=context.map(byId).filter(Boolean);
      else if(ranked.length){
        // "mapa de força" sem qualificador pede uma escolha, não adivinha a fonte.
        if(/\bmapa de forca\b/.test(q)&&!/(gbmar|institucional|cbmpe)/.test(q)){
          selected=['forca','institucional'].map(byId);context=selected.map(e=>e.id);
          return result('Você quer a planilha local do GBMar ou o sistema institucional do CBMPE? São fontes diferentes.',selected,selected.map(e=>e.title));
        }
        const comparison=/\b(diferenca|comparar|comparacao|versus| vs )\b/.test(q)||/\b(e tambem|alem de)\b/.test(q);
        const top=ranked[0];
        selected=ranked.filter((r,i)=>i<3&&r.score>=top.score*(comparison?.40:.83)).map(r=>r.entry);
        if(!comparison&&selected.length>1&&top.score<15){context=selected.map(e=>e.id);return result('Encontrei mais de um serviço possível. Qual deles você quer consultar?',selected,selected.map(e=>e.title));}
      }
      if(!selected.length&&/\b(senha|credenciais)\b/.test(q))return result('Não conheço suas credenciais. Diga qual serviço deseja acessar para receber a orientação de recuperação. Nunca envie senhas neste chat.',[],menu);
      if(!selected.length){context=[];return result('Não tenho uma resposta fundamentada para essa pergunta na base da Central. Diga o serviço ou tema, como Prime Frota, BGE, marés ou escala. Para um documento específico, use Ler texto.',[],menu);}
      if(/\b(primeiro|segundo|terceiro)\b/.test(q)&&selected.length>1){const pos=/segundo/.test(q)?1:/terceiro/.test(q)?2:0;selected=[selected[pos]||selected[0]];}
      context=selected.map(e=>e.id);
      if(/\b(fonte|referencia|bibliografia)\b/.test(q))return result(selected.map(e=>e.title+'\n'+e.evidence+'\n'+e.limit).join('\n\n'),selected,selected.map(e=>'Como acessar '+e.title+'?'));
      const wantsSteps=/\b(como|passo a passo|guia|acessar|acesso|entrar|entro|abrir|abro|consultar)\b/.test(q);
      const wantsPassword=/\b(senha|bloqueado|primeiro acesso|primeira senha|recuperar)\b/.test(q);
      const trouble=/\b(nao abre|nao abriu|nao consigo|erro|sem permissao|negado|problema de acesso|bloqueado)\b/.test(q);
      const current=/\b(hoje|agora|amanha|atual|atualmente|ultimo|ultima|saldo|quantos|quantas|quanto|quem esta|quem ta|funcionando|baixada|baixado|esta ativa|esta ativo|esta propria|esta impropria|horario da mare|vai chover)\b/.test(q);
      const comparison=/\b(diferenca|comparar|comparacao|versus)\b/.test(q);
      let blocks=[];
      for(const e of selected){
        let text=e.summary;
        let best={score:0,a:null};
        for(const f of e.faqs){for(const example of f.q){const ft=tokens(example),qt=tokens(q);const hits=qt.filter(t=>ft.some(w=>near(t,w))).length;const score=hits/(Math.max(3,qt.length));if(hits>=2&&score>best.score)best={score,a:f.a};}}
        if(wantsPassword){
          text=e.id==='prime'?e.faqs[0].a:'Não conheço suas credenciais. Abra '+e.title+' e use a recuperação de acesso, se oferecida, ou o suporte institucional responsável. Nunca informe senhas neste chat.';
        }else if(trouble){
          text=e.id==='sigpad'?e.faqs[0].a:'Confira se abriu o endereço correto e se está usando a conta autorizada. Se houver pedido de permissão, solicite acesso ao responsável. Se a página não carregar, tente novamente no navegador e consulte o suporte do serviço. Não tenho como verificar indisponibilidade em tempo real.';
        }else if(best.score>=.55&&!comparison){text=best.a;}
        else if(wantsSteps)text+='\n\n'+e.steps.map((s,i)=>(i+1)+'. '+s).join('\n');
        if(current&&!wantsPassword&&!trouble)text+='\n\nNão tenho leitura em tempo real dessa fonte. '+e.limit;
        else if(!wantsPassword&&!trouble&&(!best.a||best.score<.55))text+='\n\n'+e.limit;
        if(e.pending)text+='\n\nAtalho específico: em breve. As alternativas disponíveis aparecem abaixo.';
        if(/\b(precisa|permissao|login|acesso)\b/.test(q)&&!wantsPassword)text+='\n\nAcesso: '+e.access;
        blocks.push(e.title+'\n'+text);
      }
      const e=selected[0];
      return result(blocks.join('\n\n────────\n\n'),selected,selected.length===1?['Como acessar '+e.title+'?','Tenho dificuldade de acesso a '+e.title,'Qual a fonte?']:selected.map(x=>x.title),selected.length===1?e.steps:[]);
    }
    function summarize(text,question=''){
      const source=String(text||'').trim().slice(0,30000);
      if(source.length<60)return {text:'Cole um texto com pelo menos 60 caracteres para que haja conteúdo suficiente para resumir.',count:0};
      const sentences=source.replace(/\r/g,'').split(/(?<=[.!?;])\s+|\n+/).map(s=>s.trim()).filter(s=>s.length>=20);
      if(!sentences.length)return {text:'Não identifiquei frases suficientes. Separe o conteúdo em frases ou parágrafos.',count:0};
      const focus=tokens(question),freq=new Map();
      sentences.forEach(s=>tokens(s).forEach(t=>freq.set(t,(freq.get(t)||0)+1)));
      let ranked=sentences.map((s,i)=>{const ts=tokens(s);const matches=focus.filter(t=>ts.some(w=>near(t,w))).length;return {s,i,matches,score:focus.length?matches:ts.reduce((n,t)=>n+(freq.get(t)||0),0)/Math.sqrt(ts.length||1)+(i===0?1:0)};});
      if(focus.length){ranked=ranked.filter(x=>x.matches);if(!ranked.length)return {text:'Não encontrei no texto um trecho relacionado à pergunta. Não vou completar a resposta com informações externas.',count:0};}
      const chosen=ranked.sort((a,b)=>b.score-a.score||a.i-b.i).slice(0,focus.length?3:4).sort((a,b)=>a.i-b.i);
      return {text:(focus.length?'Trechos relacionados à sua pergunta':'Resumo por seleção de frases')+'\n\n'+chosen.map(x=>'• '+x.s).join('\n\n')+'\n\nExtraído apenas do texto fornecido. Não é interpretação jurídica nem confirmação da veracidade ou vigência.',count:chosen.length};
    }
    return {answer,reset,summarize,entries,rank};
  }
  const api={create,norm,tokens};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.GBMarEngine=api;
})(typeof globalThis!=='undefined'?globalThis:this);
