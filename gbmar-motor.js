/* GBMar IA v3: roteamento local por assunto, intenção e estado de conversa. */
(function(root){
  'use strict';
  const reader=typeof module!=='undefined'&&module.exports?require('./gbmar-leitura.js'):root.GBMarReader;
  const norm=x=>String(x||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/e[ -]mail/g,'email').replace(/[^a-z0-9]+/g,' ').trim();
  const lemmas={mapas:'mapa',mares:'mare',materiais:'material',embarcacoes:'embarcacao',viaturas:'viatura',boletins:'boletim',portarias:'portaria',postos:'posto',escalas:'escala',permissoes:'permissao',operacoes:'operacao',msas:'msa',bges:'bge',chuvas:'chuva',motores:'motor',processos:'processo',documentos:'documento',servicos:'servico',creditos:'credito',ocorrencias:'ocorrencia',links:'link',militares:'militar',chover:'chuva',chovendo:'chuva',chove:'chuva',recuperacao:'recuperar',recuperando:'recuperar',recuperar:'recuperar',chegou:'chegar',chegarem:'chegar',chegue:'chegar',recebi:'receber',recebido:'receber',recebida:'receber',entrar:'acessar',entro:'acessar',acesso:'acessar',acessa:'acessar',acessar:'acessar',abrir:'abrir',abro:'abrir',abre:'abrir',abrindo:'abrir',vc:'voce',vcs:'voces',pfv:'favor',q:'que',pra:'para',ta:'esta',prazos:'prazo',dias:'dia',horas:'hora'};
  const canonical=x=>norm(x).split(' ').map(w=>lemmas[w]||w).join(' ');
  const stop=new Set('a o as os um uma de da do das dos no na nos nas em para por pelo pela com e ou ao aos que qual quais como onde quando porque eu meu minha meus minhas voce voces quero queria preciso gostaria saber ver consultar consulta acessar abrir abra encontre encontrar link site sistema pagina gbmar cbmpe favor pode poderia tem tenho me mostre mostrar explique explica funciona serve usar uso hoje agora atual atualizado vai esta estao esse essa isso ele ela nele nela mais detalhe detalhes quanto quantos quantas sobre tambem e necessario'.split(' '));
  const tokens=x=>[...new Set(canonical(x).split(' ').filter(w=>w.length>1&&!stop.has(w)))];
  const has=(q,p)=>(' '+q+' ').includes(' '+p+' ');
  const safeURL=url=>{try{const u=new URL(url);return u.protocol==='https:'?u.href:'';}catch{return '';}};
  function distance(a,b){if(Math.abs(a.length-b.length)>2)return 9;let previous=Array.from({length:b.length+1},(_,i)=>i);for(let i=1;i<=a.length;i++){const row=[i];for(let j=1;j<=b.length;j++)row[j]=Math.min(row[j-1]+1,previous[j]+1,previous[j-1]+(a[i-1]===b[j-1]?0:1));previous=row;}return previous[b.length];}
  const near=(a,b)=>a===b?1:(a.length>=5&&b.length>=5&&distance(a,b)<=(Math.min(a.length,b.length)>=9?2:1)?.7:0);
  const topicRules=[
    ['apac',/\b(chuva|apac|meteorologia|clima|precipitacao|radar|previsao do tempo|tempo amanha)\b/,28],
    ['mares',/\b(mare|preamar|baixa mar|vazante|enchente|surfguru|tabua de mare)\b/,28],
    ['cprh',/\b(cprh|balneabilidade|qualidade da agua|agua propria|agua impropria|banho|praia limpa)\b/,28],
    ['forca',/\b(efetivo|guarnicao|permuta|permutas|pronto|quem esta de servico|de servico hoje|quantos militar|posto.*ativ[oa]|posto.*funcionando)\b/,30],
    ['operacoes',/\b(mapa de operacao|mapa operacional|satelite|openstreetmap|georreferenciamento|area de risco|areas de risco|ocorrencia)\b/,23],
    ['postos',/\b(localizacao|endereco|onde fica|chegar ao posto|mapa de posto)\b/,24],
    ['postos',/\b(acaiaca|pina|olinda|boa viagem|barra|posto 0?6)\b/,7],
    ['prime',/\b(prime|abastecimento|combustivel|gasolina|diesel|saldo|litros|cartao de abastecimento)\b/,23],
    ['materiais',/\b(material|estoque|inventario|almoxarifado|equipamento|equipamentos|nadadeira|nadadeiras|boias)\b/,24],
    ['frota',/\b(viatura|embarcacao|msa|bis|motor|frota|pane|defeito|potencia)\b/,22],
    ['manutencao',/\b(manutencao|oficina|reparo|revisao|ordem de servico|ordens de servico)\b/,27],
    ['bge',/\b(bge|boletim|portaria|publicacao|publicacoes)\b/,25],
    ['sei',/\b(sei|processo eletronico|documento eletronico|oficio|despacho|assinatura|protocolo)\b/,22],
    ['sigpad',/\b(sigpad|sindicancia|disciplinar|pad|corregedoria)\b/,26],
    ['sogo',/\b(sogo|email|correio eletronico|caixa de entrada)\b/,15],
    ['ese',/\b(ese|escala|plantao|turno)\b/,25],
    ['sca',/\b(sca|controle de acessar)\b/,25],
    ['saq',/\b(saq|oficial de operacao|notas de servico|ordens operacionais)\b/,26],
    ['smo',/\b(smo|planilha (?:da )?stsgt)\b/,26],
    ['stsgt',/\b(stsgt|transportes|telematica|servicos gerais)\b/,13],
    ['nga',/\b(nga|normas gerais|competencias|regulamento interno)\b/,25],
    ['intranet',/\b(intranet|portal interno|sistemas corporativos)\b/,25],
    ['sac',/\b(sac|saconline|avcb|vistoria|atestado|certidao|atendimento ao publico|projeto de seguranca|taxa de bombeiros)\b/,26],
    ['contatos',/\b(contato|contatos|telefone|ramal)\b/,16],
    ['diretrizes',/\b(diretrizes|procedimento operacional)\b/,24],
    ['combustivel',/\b(incremento de saldo|solicitacao de credito|controle de combustivel)\b/,28],
    ['contingencia',/\b(contingencia|modelos do servico diario|sei fora do ar|sei indisponivel)\b/,35]
  ];
  function intentOf(q){
    if(/\b(para que serve|o que e|qual a finalidade|qual a funcao)\b/.test(q))return 'purpose';
    if(/\b(mais detalhes|explique melhor|detalhar|tudo sobre)\b/.test(q))return 'details';
    if(/\b(diferenca|diferencas|comparar|compare|comparacao|versus|vs)\b/.test(q))return 'compare';
    if(/\b(email|mensagem|codigo|link)\b/.test(q)&&/\b(nao chegar|nao receber|nao recebo|nao veio|sem receber|nao vem)\b/.test(q))return 'recoveryMissing';
    if(/\b(recuperar|esqueci|senha|bloquead[oa]|primeira senha|primeiro acessar)\b/.test(q))return 'recovery';
    if(/\b(fonte|fontes|referencia|bibliografia|de onde|com base em que)\b/.test(q))return 'source';
    if(/\b(quem pode|para quem|publico alvo|qual o publico|quem usa|a quem)\b/.test(q))return 'audience';
    if(/\b(suporte|ajuda tecnica|telefone|contato|falar com|responsavel pelo acessar)\b/.test(q))return 'support';
    if(/\b(editar|edite|altere|alterar|atualize|atualizar a planilha|lance|lancar|preencha|enviar|assinar|protocolar|liberar credito|transfira)\b/.test(q))return 'write';
    if(/\b(permissao|autoriza|autorizacao|quem libera)\b/.test(q))return 'permissions';
    if(/\b(nao abrir|nao abriu|nao consigo|erro|negado|problema de acessar|indisponivel|fora do ar|travou|travado|tela branca|nao carrega)\b/.test(q))return 'trouble';
    if(/\b(como|passo a passo|guia|acessar|abrir|onde|consultar|vejo|localizar|encontrar)\b/.test(q))return 'access';
    if(/\b(hoje|agora|amanha|atual|atualmente|ultimo|ultima|saldo|quantos|quantas|quanto|quem esta|funcionando|baixad[oa]|ativ[oa]|horario|vai chuva|esta propria|esta impropria)\b/.test(q))return 'current';
    return 'purpose';
  }
  function create(knowledge,catalog){
    const entries=knowledge.entries.map(e=>{
      const item=catalog.find(c=>norm(c.title).includes(norm(e.match)));
      const phrases=e.aliases.map(canonical),names=(e.names||[]).map(canonical);
      return {...e,url:safeURL(item?.url),pending:!item?.url,phrases,names,keywords:tokens(e.aliases.join(' ')+' '+e.title)};
    });
    const byId=id=>entries.find(e=>e.id===id),freq=new Map();entries.forEach(e=>e.keywords.forEach(t=>freq.set(t,(freq.get(t)||0)+1)));
    let state={topics:[],pending:[],intent:'purpose'},documentText='',documentName='Texto fornecido';
    function reset(){state={topics:[],pending:[],intent:'purpose'};documentText='';documentName='Texto fornecido';}
    function setDocument(text,name='Texto fornecido'){documentText=String(text||'').slice(0,30000);documentName=String(name).slice(0,100);}
    function negative(e,q){
      return [...e.names,...e.phrases].some(p=>{if(p.length<3)return false;const at=(' '+q+' ').indexOf(' '+p+' ');if(at<0)return false;const before=q.slice(Math.max(0,at-65),at).trim();return /\bnao (?:quero|e|era|quis|falei de|estou falando de)(?: (?:o|a|do|da|sobre))?\s*$/.test(before)||/\bsem (?:o|a)?\s*$/.test(before);});
    }
    function rank(question){
      const q=canonical(question),ts=tokens(q);
      const results=entries.map(e=>{
        if(negative(e,q))return {entry:e,score:0,coverage:0,named:false,direct:0};
        const nameHits=e.names.filter(p=>has(q,p));
        const fuzzyNamed=e.names.some(p=>{const ws=tokens(p);return ws.length&&ws.some(w=>ts.some(t=>t!==w&&near(t,w)))&&ws.some(w=>w.length>=5)&&ws.every(w=>ts.some(t=>near(t,w)))&&ts.length<=ws.length+3;});
        let lexical=0,hits=0;
        for(const t of ts){let best=0;for(const w of e.keywords){const n=near(t,w);if(n)best=Math.max(best,n*(2+Math.log(1+entries.length/((freq.get(w)||0)+1))));}if(best){lexical+=best;hits++;}}
        const exact=e.phrases.filter(p=>has(q,p));
        let direct=topicRules.filter(([id,re])=>id===e.id&&re.test(q)).reduce((m,[,,n])=>Math.max(m,n),0);
        if(e.id==='contingencia'&&/\bmodelos\b/.test(q)&&/\bsei\b/.test(q))direct=40;
        if(e.id==='forca'&&/\bmapa de forca\b/.test(q))direct=24;
        if(e.id==='institucional'&&/\bmapa de forca\b/.test(q)&&/\b(institucional|cbmpe)\b/.test(q))direct=38;
        if(e.id==='postos'&&/\b(chuva|mare|balneabilidade|efetivo|quantos militar|ativ[oa]|de servico)\b/.test(q)&&!/\b(localizacao|endereco|onde fica)\b/.test(q))direct=0;
        const phraseBonus=exact.reduce((m,p)=>Math.max(m,p.split(' ').length*2),0);
        const coverage=ts.length?hits/ts.length:0;
        return {entry:e,score:lexical+phraseBonus+direct+(nameHits.length?50+Math.max(...nameHits.map(p=>p.length))/8:fuzzyNamed?42:0),coverage,named:!!nameHits.length||fuzzyNamed,direct};
      }).filter(x=>x.score>=5&&(x.coverage>=.30||x.named||x.direct>=15)).sort((a,b)=>b.score-a.score);
      return results;
    }
    function sourcesFor(selected,intent){
      const sources=selected.filter(e=>e.url);
      if(selected.some(e=>['frota','manutencao'].includes(e.id)))sources.push(byId('forca'),byId('smo'));
      if(selected.some(e=>e.id==='combustivel'))sources.push(byId('prime'));
      if(selected.some(e=>e.id==='postos')&&intent==='current')sources.push(byId('forca'));
      if(selected.some(e=>e.id==='apac')&&['current','access'].includes(intent))sources.push(...(byId('apac').relatedSources||[]).filter(s=>safeURL(s.url)));
      return [...new Map(sources.filter(e=>e?.url).map(e=>[e.id,e])).values()].slice(0,6);
    }
    function result(text,selected=[],options={}){
      return {text,sources:sourcesFor(selected,options.intent),topics:selected.map(e=>e.id),suggestions:options.suggestions||[],steps:options.steps||[],intent:options.intent||'general',contextLabel:state.topics.map(id=>byId(id)?.title).filter(Boolean).join(' · '),...options};
    }
    const menu=['Mapa de Força GBMar','Como acessar o Prime Frota?','Consultar marés','Quais serviços você conhece?'];
    function clarify(selected,text='Qual destes serviços você quer consultar?'){
      state.pending=selected.map(e=>e.id);state.topics=[];state.intent='clarify';
      return result(text,selected,{intent:'clarify',suggestions:selected.map(e=>e.title),contextLabel:'Escolha um serviço'});
    }
    function reply(e,intent,q){
      const r=e.replies||{};let text='',steps=[];
      if(intent==='source')text='Fonte: '+e.evidence+'\nRevisão: '+e.reviewed.split('-').reverse().join('/')+'.\nEscopo: '+(e.evidenceDetails?.authenticatedContentRead?'conteúdo autenticado':'sem leitura de conteúdo autenticado')+'.\n'+e.limit;
      else if(intent==='details')text=e.summary+'\n\nPúblico: '+e.audience+'\nRequisitos: '+e.requirements.join(' ')+'\n\n'+e.steps.map((s,i)=>(i+1)+'. '+s).join('\n')+'\n\n'+e.limit;
      else if(intent==='audience')text=e.audience+'\n\nRequisitos: '+e.requirements.join(' ');
      else if(intent==='current')text=r.current||e.limit;
      else if(intent==='permissions')text=r.permissions;
      else if(intent==='write')text=r.write;
      else if(intent==='support')text=r.support||'Não há contato específico de suporte verificado para '+e.title+' nesta base. Consulte o canal publicado pelo próprio serviço ou o responsável institucional. Não vou inventar um contato.';
      else if(intent==='recoveryCheck')text='Verificação geral: abra o e-mail cadastrado no serviço, procure a mensagem na caixa de entrada e em spam/lixo eletrônico. Se não encontrar ou não souber qual endereço foi cadastrado, confirme o cadastro com o responsável pelo acesso. '+(e.id==='prime'?'No Prime, a orientação pública é procurar o assessor do contrato.':'Não há um prazo de entrega verificado nesta base.');
      else if(intent==='recoveryMissing')text=r.recoveryMissing||'Continuamos no acesso a '+e.title+'. Verificação geral: confira a caixa de spam e o endereço cadastrado no serviço. A base não confirma prazo de entrega da recuperação. Se não receber a mensagem, procure o suporte responsável.';
      else if(intent==='recovery'){
        text=r.recovery||(e.access.startsWith('Consulta pública')?'A consulta pública indicada não exige uma senha fornecida por este assistente. Se outra área do destino pedir acesso, siga as orientações do próprio serviço.':'Não conheço suas credenciais nem posso redefini-las. Não há procedimento específico de recuperação verificado para '+e.title+' nesta base. Consulte o suporte responsável pela conta.');
      }else if(intent==='trouble')text=r.trouble;
      else if(intent==='access'){
        steps=e.steps;text=(e.pending?'O atalho específico ainda está em preparação.':'Use o link de '+e.title+' indicado abaixo.')+'\n\n'+steps.map((s,i)=>(i+1)+'. '+s).join('\n');
      }else text=e.summary;
      if(['purpose','access'].includes(intent)){
        let best={score:0,a:''};const qt=tokens(q).filter(t=>!e.keywords.includes(t));
        for(const f of e.faqs||[])for(const example of f.q){const ft=tokens(example).filter(t=>!e.keywords.includes(t));const hits=qt.filter(t=>ft.some(w=>near(t,w))).length;const score=hits/Math.max(2,qt.length);if(hits>=2&&score>best.score)best={score,a:f.a};}
        if(best.score>=.65){text=best.a;steps=[];}
        if(intent==='purpose')text+='\n\n'+e.limit;
      }
      if(e.pending&&intent!=='access')text+='\n\nAtalho específico: em breve.';
      return {text,steps};
    }
    function answer(question){
      const raw=String(question||'').trim().slice(0,1200),q=canonical(raw),basic=norm(raw),requestedIntent=intentOf(q);
      if(/\b(qual (?:e )?(?:a )?minha senha|me diga (?:a )?senha|mostre (?:a )?senha)\b/.test(q))return result('Não conheço suas credenciais nem consigo mostrar senhas. Para recuperar o acesso, diga o nome do serviço.',[],{suggestions:menu});
      if(!q)return result('Digite uma pergunta sobre os serviços da Central.',[],{suggestions:menu});
      if(/^(oi|ola|bom dia|boa tarde|boa noite|tudo bem)$/.test(q))return result('Olá! Posso orientar o acesso e explicar os serviços da Central. Qual é a sua dúvida?',[],{suggestions:menu});
      if(/^(obrigad[oa]|valeu|entendi|ok|certo|perfeito)$/.test(q))return result('Por nada! Pode continuar neste assunto ou escolher outro serviço.',[],{suggestions:menu});
      if(/^(menu|ajuda|iniciar|novo assunto)$/.test(q)){state={topics:[],pending:[],intent:'purpose'};return result('Escolha um assunto da Central.',[],{suggestions:menu});}
      if(/\b(minha senha e|password|token|api key|chave secreta)\b/.test(basic))return result('Não envie senhas ou chaves. O assistente não precisa de credenciais; autentique-se somente no portal oficial.');
      if(/\b(credito|custo|custos|custa|pago|gratis|gratuito|api|chatgpt|gpt|inteligencia artificial)\b/.test(q)&&!/\b(combustivel|abastecimento|prime|saldo|frota)\b/.test(q))return result('As respostas são processadas neste navegador com uma base local. O uso pelos visitantes não consome créditos do criador e não utiliza API paga, chave particular ou servidor de IA. Não sou um modelo generativo e não aprendo automaticamente com conversas.',[],{suggestions:['O que você consegue fazer?']});
      if(/\b(biografia|autoria|quem criou|quem desenvolveu|sobre voce|quem e voce|o que voce consegue|o que voce faz|capacidades)\b/.test(q))return result('Sou o GBMar IA, assistente local da Central. O projeto é desenvolvido pelo Asp BM BRAGANÇA, Técnico em Desenvolvimento de Sistemas (1.200 horas), conforme a apresentação pública do site.\n\nA base contém '+entries.length+' serviços, orientações por intenção e referências. Posso manter o assunto da conversa e localizar trechos de textos fornecidos na aba Ler texto. Não acesso contas nem consulto dados ao vivo.',[],{suggestions:['Quais serviços você conhece?','Abrir leitura de texto']});
      if(/\b(video|videos|clipe|clipes)\b/.test(q))return result('O vídeo-guia monta cartões de texto no seu aparelho, sem áudio nem filmagens externas. Nas respostas com fontes, use Vídeo-guia quando o navegador permitir. O guia visual em etapas funciona como alternativa.',[],{suggestions:menu});
      const groups={'operacao e posto':['operacoes','postos','forca','saq'],'operacoes e postos':['operacoes','postos','forca','saq'],'documento e sistemas':['sei','bge','sigpad','sogo'],'frota e combustivel':['frota','prime','smo','materiais'],'clima e praias':['mares','apac','cprh']};
      if(/\b(todos os links|todos os servicos|todo os servico|todos os servico|quais servico|listar servico|lista de link|catalogo)\b/.test(q))return result('A base cobre operações, postos, clima, efetivo, frota e sistemas administrativos. Escolha uma área. A aba Sobre e fontes contém a ficha de cada serviço.',[],{suggestions:['Operações e postos','Documentos e sistemas','Frota e combustível','Clima e praias']});
      if(groups[q])return clarify(groups[q].map(byId),'Qual serviço dessa área você quer consultar?');
      const docQuery=/\b(esse documento|este documento|esse texto|este texto|nesse texto|nesse documento|trecho|resuma|resumir|ler texto|leia|prazo)\b/.test(q)&&!/(senha|recuperar)/.test(q);
      if(docQuery){
        if(!documentText)return result('Para verificar isso, preciso do trecho do documento. Abra Ler texto, cole o conteúdo e informe qual prazo ou informação deseja conferir. Sem o texto, não posso confirmar que ele contém essa informação.',[],{intent:'document',suggestions:['Abrir leitura de texto']});
        const docResult=reader.analyze(documentText,raw,documentName);state.intent='document';state.topics=[];return result(docResult.text,[],{intent:'document',evidence:docResult.evidence,suggestions:['Abrir leitura de texto'],contextLabel:'Texto fornecido'});
      }
      let ranked=rank(raw),selected=[],intent=requestedIntent;
      const named=ranked.filter(r=>r.named);
      if(intent==='recoveryMissing'&&!state.topics.length&&!named.length)return clarify(['prime','bge','sei','sogo'].map(byId),'De qual serviço é a mensagem de recuperação que não chegou?');
      const follow=/^(e\b|mas\b|como faco|como faz|qual a fonte|quais as fontes|de onde|passo a passo|mais detalhes|explique melhor|resuma|esse|essa|ele|ela|nele|nela|o primeiro|o segundo|o terceiro|precisa de|como acessar|como abrir|nao consigo|e se)/.test(q)||['recovery','recoveryMissing','source','permissions'].includes(intent);
      const authFollow=state.topics.length===1&&['recovery','recoveryMissing'].includes(state.intent)&&intent==='recoveryMissing';
      if(state.pending.length&&/^(o |a )?(primeiro|primeira|segundo|segunda|terceiro|terceira|1|2|3)$/.test(q)){
        const position=/segund|2/.test(q)?1:/terceir|3/.test(q)?2:0;selected=[byId(state.pending[position])].filter(Boolean);intent='purpose';
      }else if(named.length===0&&state.topics.length&&((follow&&(!ranked.length||ranked[0].direct<20))||authFollow)){
        selected=state.topics.map(byId).filter(Boolean);
        if(/\b(como faco isso|como faz isso|passo a passo)\b/.test(q))intent=state.intent==='recoveryMissing'?'recoveryCheck':state.intent==='recovery'?'recovery':'access';
      }else{
        if(/\bsei\b/.test(q)&&/\b(modelos|contingencia|fora do ar|indisponivel)\b/.test(q))selected=[byId('contingencia')];
        if(/\bmapa de forca\b/.test(q)){
          const local=/\bgbmar|local|planilha\b/.test(q),institution=/\binstitucional|cbmpe\b/.test(q);
          if(intent==='compare'&&!/\boperacao\b/.test(q))selected=['forca','institucional'].map(byId);
          else if(!local&&!institution)return clarify(['forca','institucional'].map(byId),'Você quer a planilha do GBMar ou o sistema institucional do CBMPE?');
          else if(local&&!institution)selected=[byId('forca')];else if(institution&&!local)selected=[byId('institucional')];
        }
        if(!selected.length&&ranked.length){
          const multi=/\b(e|tambem|alem|versus|vs)\b|[,;?].+\S/.test(basic)&&intent!=='recoveryMissing';
          const strong=ranked.filter(r=>r.named||r.direct>=20);
          if(named.length&&(!multi||named.length===1&&/\b(publico|telefone|contato|suporte|senha|email de recuperar)\b/.test(q)))selected=[named[0].entry];
          else if((multi||intent==='compare')&&strong.length>1){
            let candidates=strong;
            if(candidates.some(r=>r.entry.id==='prime'&&r.named))candidates=candidates.filter(r=>r.entry.id!=='frota'||/\b(viatura|msa|embarcacao|motor)\b/.test(q));
            if(candidates.some(r=>r.entry.id==='smo'))candidates=candidates.filter(r=>r.entry.id!=='stsgt'||has(q,'site da stsgt'));
            if(candidates.some(r=>r.entry.id==='contingencia'))candidates=candidates.filter(r=>r.entry.id!=='sei'||/\b(e tambem|alem de)\b/.test(q));
            selected=candidates.slice(0,3).map(r=>r.entry);
          }else selected=[ranked[0].entry];
          if(!named.length&&ranked[0].direct<15&&ranked.length>1&&ranked[1].score>=ranked[0].score*.85)return clarify(ranked.slice(0,3).map(r=>r.entry));
        }
      }
      if(!selected.length){
        if(intent==='source')return result('De qual serviço você quer a fonte? Escolha um assunto ou consulte a aba Sobre e fontes.',[],{suggestions:menu});
        if(intent==='recovery')return result('Não conheço suas credenciais. Diga qual serviço deseja acessar para receber a orientação de recuperação.',[],{suggestions:['Prime Frota','BGE','SEI Pernambuco','SOGo']});
        state={topics:[],pending:[],intent:'purpose'};
        return result('Não tenho uma resposta fundamentada para essa pergunta na base da Central. Diga o serviço ou tema; se a dúvida está em um documento, forneça o trecho em Ler texto.',[],{suggestions:menu});
      }
      // Uma referência geográfica só localiza a pergunta; não muda chuva em consulta de postos.
      if(selected.some(e=>['apac','mares','cprh'].includes(e.id))&&!/\b(localizacao|endereco|onde fica)\b/.test(q))selected=selected.filter(e=>e.id!=='postos');
      selected=[...new Map(selected.map(e=>[e.id,e])).values()];
      state={topics:selected.map(e=>e.id),pending:[],intent};
      if(intent==='compare'){
        if(selected.length===1)return clarify(entries.filter(e=>['forca','institucional','operacoes','postos'].includes(e.id)),'Qual outro serviço você quer comparar?');
        return result(selected.map(e=>e.title+'\n'+e.summary+'\nAcesso: '+e.access).join('\n\n')+'\n\nSão destinos independentes. Consulte a fonte correspondente à sua necessidade; não há sincronização realizada por este assistente.',selected,{intent,suggestions:selected.map(e=>'Como acessar '+e.title+'?')});
      }
      const clauses=raw.replace(/STSGT\s+e\s+SMO/gi,'STSGT / SMO').split(/\s+e\s+(?=(?:onde|como|qual|quanto|quem|o |a |as |os |tambem))|[;?]\s*(?=\S)/i).map(c=>c.trim()).filter(Boolean);
      const replies=selected.map(e=>{let localIntent=intent,localQuestion=q;
        if(selected.length>1&&clauses.length>1){const clause=clauses.find(c=>rank(c)[0]?.entry.id===e.id);if(clause){localQuestion=canonical(clause);localIntent=intentOf(localQuestion);}}
        return {entry:e,intent:localIntent,...reply(e,localIntent,localQuestion)};
      });
      const e=selected[0];let suggestions=[];
      if(selected.length>1)suggestions=selected.map(e=>'Como acessar '+e.title+'?');
      else if(intent==='recovery')suggestions=['E se o e-mail de recuperação não chegar?','Qual a fonte?'];
      else if(intent==='recoveryMissing')suggestions=['Como falar com o suporte?','Qual a fonte?'];
      else suggestions=['Como acessar '+e.title+'?','Mais detalhes sobre '+e.title,'Qual a fonte?'];
      return result(replies.map(r=>r.entry.title+'\n'+r.text).join('\n\n'),selected,{intent,suggestions,steps:selected.length===1?(replies[0].steps.length?replies[0].steps:e.steps):[],sections:replies.map(r=>({id:r.entry.id,title:r.entry.title,text:r.text,intent:r.intent}))});
    }
    return {answer,reset,rank,entries,setDocument,summarize:(text,q='',name)=>reader.analyze(text,q,name)};
  }
  const api={create,norm,tokens,canonical,intentOf};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.GBMarEngine=api;
})(typeof globalThis!=='undefined'?globalThis:this);
