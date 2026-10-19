/* GBMar IA: consulta local, gratuita e sem API externa. */
(() => {
  'use strict';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  const stop = new Set('a o os as um uma de da do das dos em no na nos nas para por com ao aos que qual quais quero preciso gostaria onde como eu pelo pela e ou se ser sao esta esse essa este isto isso meu minha tem ter vou pode posso ajudar favor informe mostrar encontrar saber ver consultar consulta acessar acesso link links site pagina sistema gbmar bombeiros cbmpe militar militares hoje agora atual informacao informacoes sobre ai la aqui me diga me mostre'.split(' '));
  const guides = [
    ['Mapa de Operações GBMAR','mapa operacoes satelite openstreetmap georreferenciamento area risco ocorrencias territorio litoral'],
    ['Consulta diária das marés','mare mares tabua preamar baixar vazante enchente surfguru altura nivel agua'],
    ['Balneabilidade','balneabilidade cprh qualidade agua praias banho proprio improprio poluicao ambiental'],
    ['Monitoramento APAC','apac chuva chuvas precipitacao meteorologia tempo alerta clima'],
    ['Modelos do Serviço Diário','contingencia indisponibilidade sei modelos servico diario relatorio documento'],
    ['Oficial de Operações SAQ','oficial operacoes saq ordem ordens notas orientacoes operacionais'],
    ['Mapa de Força GBMar','mapa forca efetivo guarnicao escala posto guarda vidas permuta alteracao viatura embarcacao msa bis pronto servico'],
    ['Diretrizes do serviço operacional','diretrizes procedimento operacional ordens servico'],
    ['Localização dos postos do GBMAR','localizacao postos posto guarda vidas endereco praias mapa local'],
    ['Planilha de Materiais da STSGT','material materiais estoque inventario almoxarifado equipamentos stsgt'],
    ['Prime Frota','prime frota beneficios gasolina combustivel abastecimento credito saldo cartao litros'],
    ['Site da STSGT','stsgt secao transportes servicos gerais telematica gestao manutencao viaturas embarcacoes historico'],
    ['Planilha da STSGT e SMO','stsgt smo planilha transportes manutencao'],
    ['Controle de viaturas e embarcações','controle frota viatura viaturas msa msas bis embarcacoes motores manutencao baixada defeito pane indisponibilidade funcionamento'],
    ['Abastecimento e combustível','abastecimento combustivel gasolina diesel saldo credito abastecer prime frota'],
    ['Manutenção e ordens de serviço','manutencao oficina os ordem servico reparo problema mecanico revisao defeito viatura embarcacao'],
    ['SIGPAD','sigpad sindicancia disciplinar pad procedimentos investigacao'],
    ['SOGo PE','sogo correio eletronico email funcional caixa entrada mensagem institucional'],
    ['SEI Pernambuco','sei pernambuco processo eletronico documento oficio despacho assinatura protocolo expediente requerimento'],
    ['Boletim Geral Eletrônico','bge boletim geral eletronico portaria publicacao normas boletins oficiais'],
    ['Normas Gerais de Ação','nga normas gerais acao regulamento regras competencias procedimentos'],
    ['Contatos institucionais','contatos telefone ramal enderecos email comunicacao setores'],
    ['Intranet CBMPE','intranet portal interno sistemas corporativos rede interna'],
    ['Mapa de Força institucional','mapa forca institucional sistema efetivo meios cbmpe'],
    ['Escala de Serviço Eletrônica','ese escala servico eletronica plantao turno institucional'],
    ['Sistema de Controle de Acesso','sca controle acesso credenciais login'],
    ['Portal de Atendimento CBMPE','sac online atendimento servicos publico solicitar']
  ];
  const entries=[];
  document.querySelectorAll('main section').forEach(section=>{
    const category=section.querySelector('h2')?.textContent?.trim()||'Central de Links';
    section.querySelectorAll('.item').forEach(element=>{
      const title=element.querySelector('.name')?.textContent?.trim()||'';
      if(!title) return;
      const desc=element.querySelector('.desc')?.textContent?.trim()||'';
      const anchor=element.matches('a[href]')?element:null;
      const guide=guides.find(g=>norm(title).includes(norm(g[0])));
      entries.push({title,desc,category,url:anchor?.href||'',pending:!anchor||element.classList.contains('pending'),
        titleTokens:norm(title).split(' '),descTokens:norm(desc).split(' '),categoryTokens:norm(category).split(' '),
        keyTokens:norm(guide?.[1]||'').split(' ')});
    });
  });
  if (!entries.length) return;
  const shell=document.createElement('div');
  shell.className='gbai-root';
  shell.innerHTML=[
    '<button type="button" class="gbai-toggle" id="gbai-toggle" aria-controls="gbai-panel" aria-expanded="false" aria-label="Abrir assistente GBMar IA"><span class="gbai-toggle-icon" aria-hidden="true">✦</span> GBMar IA</button>',
    '<section class="gbai-panel gbai-hidden" id="gbai-panel" aria-label="Assistente GBMar IA" role="region">',
    '<div class="gbai-header"><div class="gbai-avatar" aria-hidden="true">🛟</div><div class="gbai-header-copy"><strong>GBMar IA</strong><small>Assistente de consulta • Gratuito e local</small></div>',
    '<div class="gbai-header-actions"><button type="button" class="gbai-icon-btn" id="gbai-reset" aria-label="Limpar conversa" title="Limpar conversa">↺</button><button type="button" class="gbai-icon-btn" id="gbai-close" aria-label="Fechar assistente" title="Fechar">×</button></div></div>',
    '<div class="gbai-notice">Respostas baseadas nos links e descrições desta página. Sem acesso a documentos restritos, conteúdos externos ou dados em tempo real.</div>',
    '<div class="gbai-messages" id="gbai-messages" role="log" aria-live="polite" aria-relevant="additions" aria-label="Mensagens da conversa"></div>',
    '<div class="gbai-chips" id="gbai-chips"></div>',
    '<form class="gbai-input-area" id="gbai-form"><label for="gbai-input" class="gbai-hidden">Sua pergunta</label><textarea class="gbai-input" id="gbai-input" rows="1" maxlength="700" placeholder="Ex.: onde consulto o mapa de força?" aria-label="Digite sua pergunta"></textarea><button type="submit" class="gbai-send">Enviar</button></form>',
    '<div class="gbai-footer">Sem API paga • Sem armazenamento da conversa • Não oficial</div></section>'
  ].join('');
  document.body.append(shell);
  const toggle=shell.querySelector('#gbai-toggle'),panel=shell.querySelector('#gbai-panel');
  const close=shell.querySelector('#gbai-close'),reset=shell.querySelector('#gbai-reset');
  const messages=shell.querySelector('#gbai-messages'),chips=shell.querySelector('#gbai-chips');
  const form=shell.querySelector('#gbai-form'),input=shell.querySelector('#gbai-input');
  let recent=[];
  function append(role,text,sources=[]){
    const item=document.createElement('div');
    item.className='gbai-message'+(role==='user'?' gbai-user':'');
    const bubble=document.createElement('div');bubble.className='gbai-bubble';bubble.textContent=text;item.append(bubble);
    for(const source of sources){
      const link=document.createElement('a');link.className='gbai-source';link.href=source.url;link.target='_blank';link.rel='noopener noreferrer';
      link.setAttribute('aria-label','Abrir '+source.title+' em nova aba');
      const arrow=document.createElement('span');arrow.className='gbai-source-icon';arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';
      const label=document.createElement('span');label.textContent=source.title+' — '+source.desc;
      link.append(arrow,label);item.append(link);
    }
    messages.append(item);messages.scrollTop=messages.scrollHeight;
  }
  function welcome(){
    messages.replaceChildren();recent=[];
    append('bot','Olá! Posso localizar os links da Central do GBMar e explicar sua finalidade.\n\nPergunte em português. Eu indico as fontes cadastradas, mas não consigo ler documentos externos nem consultar informações operacionais em tempo real.');
    chips.replaceChildren();
    for(const title of ['Onde vejo o mapa de força?','Como acessar o Prime Frota?','Onde consultar os BGEs?','Como consultar as marés?']){
      const button=document.createElement('button');button.type='button';button.className='gbai-chip';button.textContent=title;
      button.addEventListener('click',()=>ask(title));chips.append(button);
    }
  }
  function score(entry,q){
    const tokens=[...new Set(norm(q).split(' ').filter(t=>t.length>=3&&!stop.has(t)))];
    if(!tokens.length)return 0;
    let value=0, hits=0;
    const title=entry.titleTokens.join(' ');
    if(title.length>=5&&norm(q).includes(title))value+=30;
    for(const token of tokens){
      if(entry.titleTokens.includes(token)){value+=5;hits++;}
      else if(entry.keyTokens.includes(token)){value+=3;hits++;}
      else if(entry.descTokens.includes(token)){value+=2;hits++;}
      else if(entry.categoryTokens.includes(token)){value+=0.4;hits++;}
    }
    // Cobertura da pergunta evita que uma palavra genérica domine as fontes.
    return value+(hits>=2?hits*1.2:0);
  }
  function choose(question){
    const ranked=entries.map(entry=>({entry,points:score(entry,question)}))
      .filter(x=>x.points>=3).sort((a,b)=>b.points-a.points||Number(a.entry.pending)-Number(b.entry.pending));
    return ranked.filter((x,i)=>i<3&&x.points>=Math.max(3,ranked[0].points*0.47)).map(x=>x.entry);
  }
  function live(q){
    return /\b(quantos|quantas|quanto|valor|saldo|situacao atual|situacao de|status|estado atual|funcionando|funcionamento|baixad[ao]s?|disponiveis|indisponiveis|hoje|agora|neste momento|tempo real|atualizad[ao]s?|quem esta|escala de hoje|ultima)\b/.test(q);
  }
  function answer(question){
    const q=norm(question);
    if(/^(oi|ola|bom dia|boa tarde|boa noite|ajuda|menu|iniciar)$/.test(q))
      return {text:'Olá! Pergunte onde encontrar um serviço, documento ou sistema do GBMar. Consigo indicar os links cadastrados, não os dados restritos.',sources:[]};
    if(/\b(chatgpt|creditos|custa|gratuito|gratuita|preco|api|pago|pagamento|inteligencia artificial)\b/.test(q))
      return {text:'Sou um assistente local de pesquisa de links. Uso correspondência de texto, não um modelo generativo. Não consumo créditos de ChatGPT, não utilizo API paga e não envio perguntas a servidores externos. Não leio o conteúdo de sites vinculados.',sources:[]};
    if(/\b(senha|password|credencial|token|login pessoal|meus dados pessoais)\b/.test(q))
      return {text:'Não tenho acesso a contas, senhas ou credenciais. Utilize os canais oficiais de suporte e nunca compartilhe senhas no chat.',sources:[]};
    let matches=choose(question);
    if(!matches.length&&/\b(esse link|esse sistema|e ele|e ela|como abro|como entro|e nele)\b/.test(q)&&recent.length)matches=recent.slice(0,2);
    if(!matches.length){recent=[];return {text:'Não encontrei uma fonte suficientemente relacionada à pergunta nas descrições da página.\n\nTente informar o nome do sistema ou tema, como marés, APAC, CPRH, mapa de força, viaturas, STSGT, Prime Frota, SEI ou BGE. Para informações não cadastradas, consulte o setor responsável.',sources:[]};}
    const available=matches.filter(x=>!x.pending),pending=matches.filter(x=>x.pending);
    let text='';
    if(live(q)){
      text='Não posso confirmar situação, saldos, escalas ou outros dados atualizados em tempo real.\n\n';
      text+=available.length?'Para consultar a fonte autorizada, utilize:\n':'Não há um atalho ativo específico para esse assunto.';
    }else{
      text=available.length?'Encontrei '+(available.length===1?'este atalho relacionado à sua dúvida:':'estes atalhos relacionados à sua dúvida:')+'\n\n':'Este assunto está na Central, mas o atalho ainda não está disponível.';
    }
    if(available.length){
      text+=available.map(x=>'• '+x.title+': '+x.desc).join('\n');
      text+='\n\nAbra a fonte indicada abaixo para verificar as informações oficiais disponíveis.';
    }
    if(pending.length)text+='\n\nEm desenvolvimento na Central: '+pending.map(x=>x.title).join('; ')+'.';
    if(available.some(x=>/requer|permiss|credencia|intranet|sujeito/i.test(x.desc)))
      text+='\n\nO acesso pode exigir credenciais e permissões institucionais.';
    recent=matches;
    return {text,sources:available.slice(0,3)};
  }
  function ask(value){
    const question=String(value||'').trim().slice(0,700);if(!question)return;
    append('user',question);chips.replaceChildren();
    const result=answer(question);append('bot',result.text,result.sources);
    input.value='';input.focus();
  }
  function openState(open){
    panel.classList.toggle('gbai-hidden',!open);toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Assistente GBMar IA aberto':'Abrir assistente GBMar IA');
    if(open){input.focus();messages.scrollTop=messages.scrollHeight;}else toggle.focus();
  }
  toggle.addEventListener('click',()=>openState(panel.classList.contains('gbai-hidden')));
  close.addEventListener('click',()=>openState(false));
  reset.addEventListener('click',()=>{welcome();input.focus();});
  form.addEventListener('submit',event=>{event.preventDefault();ask(input.value);});
  input.addEventListener('keydown',event=>{if(event.key==='Enter'&&!event.shiftKey&&!event.isComposing){event.preventDefault();ask(input.value);}if(event.key==='Escape')openState(false);});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!panel.classList.contains('gbai-hidden'))openState(false);});
  welcome();
})();