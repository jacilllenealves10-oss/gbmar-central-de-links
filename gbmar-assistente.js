/* GBMar IA v3 — sem rede, telemetria, armazenamento de conversas ou serviços pagos. */
(() => {
  'use strict';
  if(!window.GBMarKnowledge||!window.GBMarEngine)return;
  const catalog=[...document.querySelectorAll('main .item')].map(el=>({title:el.querySelector('.name')?.textContent.trim()||'',url:el.matches('a[href]')?el.href:''}));
  const engine=GBMarEngine.create(GBMarKnowledge,catalog);
  const root=document.createElement('div');root.className='gbai-root';
  // Este HTML é estático. Perguntas, textos e respostas usam exclusivamente textContent.
  root.innerHTML=`
    <button type="button" class="gbai-toggle" aria-controls="gbai-panel" aria-expanded="false" aria-label="Abrir GBMar IA"><span aria-hidden="true" class="gbai-spark">✦</span><span>GBMar IA</span></button>
    <section class="gbai-panel" id="gbai-panel" aria-label="GBMar IA — assistente de consulta" hidden>
      <header class="gbai-header"><div class="gbai-avatar" aria-hidden="true">✦</div><div class="gbai-heading"><strong>GBMar IA</strong><small><span class="gbai-dot" aria-hidden="true"></span>Seu guia na Central</small></div><button class="gbai-icon" type="button" id="gbai-reset" title="Limpar conversa e texto" aria-label="Limpar conversa e texto">↺</button><button class="gbai-icon" type="button" id="gbai-close" title="Fechar" aria-label="Fechar assistente">×</button></header>
      <div class="gbai-tabs" role="tablist" aria-label="Áreas do assistente"><button type="button" role="tab" id="gbai-tab-chat" aria-selected="true" aria-controls="gbai-chat">Conversa</button><button type="button" role="tab" id="gbai-tab-read" aria-selected="false" aria-controls="gbai-read" tabindex="-1">Ler texto</button><button type="button" role="tab" id="gbai-tab-about" aria-selected="false" aria-controls="gbai-about" tabindex="-1">Sobre e fontes</button></div>
      <div class="gbai-view gbai-chat" id="gbai-chat" role="tabpanel" aria-labelledby="gbai-tab-chat">
        <div class="gbai-notice">Orientação com fontes • Sem consulta em tempo real</div><div class="gbai-context" hidden><span id="gbai-topic" role="status"></span><button type="button" id="gbai-new-topic">Trocar assunto</button></div>
        <div class="gbai-messages" role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversa"></div>
        <div class="gbai-suggestions" aria-label="Perguntas sugeridas"></div>
        <form class="gbai-compose"><label class="gbai-sr" for="gbai-question">Sua pergunta</label><textarea id="gbai-question" rows="1" maxlength="1200" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="O que você precisa encontrar?"></textarea><button type="submit" class="gbai-send" aria-label="Enviar pergunta" disabled>↑</button></form>
      </div>
      <div class="gbai-view gbai-scroll" id="gbai-read" role="tabpanel" aria-labelledby="gbai-tab-read" hidden>
        <div class="gbai-eyebrow">LEITURA NO SEU DISPOSITIVO</div><h2>Entenda um trecho.</h2><p>Cole um texto autorizado ou abra um arquivo TXT. O resumo seleciona frases do próprio documento, sem enviar o conteúdo.</p>
        <label class="gbai-label" for="gbai-document">Texto para leitura</label><textarea id="gbai-document" rows="7" maxlength="30000" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Cole aqui o trecho que deseja resumir…"></textarea>
        <div class="gbai-file-row"><label class="gbai-file-label" for="gbai-file">Abrir .txt</label><input id="gbai-file" type="file" accept=".txt,text/plain" class="gbai-sr"><span id="gbai-count">0 / 30.000 caracteres</span></div>
        <label class="gbai-label" for="gbai-focus">Pergunta sobre o texto <span>(opcional)</span></label><input id="gbai-focus" type="text" maxlength="300" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Ex.: o que diz sobre combustível?">
        <button type="button" class="gbai-primary" id="gbai-summarize">Resumir / localizar resposta</button>
        <div class="gbai-read-status" role="status" aria-live="polite"></div><div class="gbai-reading-result" role="region" aria-label="Evidências do texto"></div><p class="gbai-muted">Sem leitura de PDF, imagem ou links externos. Não substitui a leitura integral nem confirma autenticidade ou vigência.</p>
      </div>
      <div class="gbai-view gbai-scroll" id="gbai-about" role="tabpanel" aria-labelledby="gbai-tab-about" hidden>
        <div class="gbai-eyebrow">BASE DE CONHECIMENTO · V3</div><h2>Uma fonte para cada caminho.</h2><p>Um assistente local para localizar serviços, explicar sua finalidade e orientar a consulta.</p>
        <div class="gbai-stats"><div><strong id="gbai-total"></strong><span>serviços na base</span></div><div><strong>R$ 0</strong><span>por resposta</span></div><div><strong>Local</strong><span>processamento</span></div></div>
        <details class="gbai-details"><summary>Sobre a IA e o desenvolvimento</summary><p>GBMar IA é o assistente de consulta da Central, desenvolvido no projeto do Asp BM BRAGANÇA, Técnico em Desenvolvimento de Sistemas (1.200 horas), conforme a apresentação pública do site.</p><p>Usa regras de intenção, sinônimos, tolerância a erros de escrita e contexto da conversa. Não é um modelo GPT nem aprende sozinho. Não acessa contas, consulta dados ao vivo ou altera sistemas.</p><p>As conversas e os textos ficam apenas na memória desta página. Fechar o painel mantém a conversa; recarregar ou usar Limpar apaga o conteúdo. Não há transmissão, histórico permanente ou cobrança por mensagem. A abertura de links leva você ao serviço externo.</p></details>
        <details class="gbai-details"><summary>Como as fontes foram revisadas</summary><p>Base editorial revisada em 19/10/2026. Páginas públicas acessíveis foram consultadas; sistemas restritos usam apenas a tela pública e a descrição da Central. Pastas e planilhas não foram lidas. A revisão não comprova disponibilidade ou atualização em tempo real.</p><p>Guia visual apresenta passos de consulta em cartões. Vídeos-guia de texto podem ser gerados no navegador a partir das respostas, sem áudio e sem filmagens externas. Leitura em voz alta só é oferecida quando o navegador disponibiliza uma voz local em português.</p></details>
        <h3>Serviços e referências</h3><label class="gbai-sr" for="gbai-filter">Filtrar serviços e fontes</label><input id="gbai-filter" type="search" placeholder="Filtrar serviços e fontes…" autocomplete="off"><div id="gbai-reference-list"></div><p id="gbai-no-source" hidden>Nenhum serviço encontrado para esse termo.</p>
      </div>
      <footer class="gbai-footer"><span aria-hidden="true">◇</span> Sem créditos de IA · Consulta local · Não oficial</footer>
    </section>`;
  document.body.append(root);
  const $=s=>root.querySelector(s),toggle=$('.gbai-toggle'),panel=$('.gbai-panel'),messages=$('.gbai-messages'),suggestions=$('.gbai-suggestions'),question=$('#gbai-question');
  const doc=$('#gbai-document'),focus=$('#gbai-focus'),reading=$('.gbai-reading-result'),file=$('#gbai-file');
  let lastFocus=null,currentTab='chat',fileGeneration=0,videoJob=null,documentName='Texto colado',speechButton=null;
  function fitViewport(){const v=window.visualViewport;const layout=window.GBMarLayout?.calculate({width:v?.width||window.innerWidth,height:v?.height||window.innerHeight,offsetTop:v?.offsetTop||0,layoutHeight:window.innerHeight,scale:v?.scale||1});
    for(const property of ['top','height','width','bottom'])panel.style.removeProperty(property);
    root.classList.toggle('gbai-compact',!!layout?.compact&&!panel.hidden);
    if(layout){panel.style.top=layout.top+'px';panel.style.height=layout.height+'px';panel.style.width=layout.width+'px';panel.style.bottom='auto';}
  }
  window.addEventListener('resize',fitViewport);window.visualViewport?.addEventListener('resize',fitViewport);window.visualViewport?.addEventListener('scroll',fitViewport);fitViewport();
  const videoURLs=new Set();
  function clearVideos(){videoJob?.abort();videoJob=null;videoURLs.forEach(url=>URL.revokeObjectURL(url));videoURLs.clear();}
  window.addEventListener('pagehide',()=>{clearVideos();stopSpeaking();});
  function el(tag,cls,text){const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;}
  function button(label,handler,cls='gbai-chip'){const b=el('button',cls,label);b.type='button';b.addEventListener('click',handler);return b;}
  function stopSpeaking(){if('speechSynthesis' in window)window.speechSynthesis.cancel();if(speechButton){speechButton.textContent='Ouvir';speechButton._speaking=false;speechButton=null;}}
  function localVoice(){return 'speechSynthesis' in window?window.speechSynthesis.getVoices().find(v=>v.localService&&/^pt(?:-|_)/i.test(v.lang)):null;}
  function speak(text,b){const voice=localVoice();if(!voice)return;stopSpeaking();speechButton=b;const utterance=new SpeechSynthesisUtterance(text);utterance.voice=voice;utterance.lang=voice.lang;const done=()=>{b.textContent='Ouvir';b._speaking=false;if(speechButton===b)speechButton=null;};utterance.onend=done;utterance.onerror=done;b.textContent='Parar';b._speaking=true;window.speechSynthesis.speak(utterance);}
  function addActions(container,text){
    const actions=el('div','gbai-actions');
    if(navigator.clipboard?.writeText){actions.append(button('Copiar',async e=>{const b=e.currentTarget;try{await navigator.clipboard.writeText(text);b.textContent='Copiado';}catch{b.textContent='Selecione o texto para copiar';}},'gbai-text-button'));}
    const listen=button('Ouvir',e=>{const b=e.currentTarget;if(b._speaking){stopSpeaking();b._speaking=false;b.textContent='Ouvir';}else speak(text,b);},'gbai-text-button');listen.dataset.localVoice='true';listen.hidden=!localVoice();actions.append(listen);container.append(actions);
  }
  if('speechSynthesis' in window)window.speechSynthesis.addEventListener('voiceschanged',()=>root.querySelectorAll('[data-local-voice]').forEach(b=>b.hidden=!localVoice()));
  function addVideo(container,text){
    if(!window.GBMarVideo?.supported())return;
    const b=button('Vídeo-guia',async()=>{
      const old=container.querySelector('.gbai-video');if(old){old.scrollIntoView({block:'nearest'});return;}
      if(videoJob){b.textContent='Aguarde o outro vídeo';return;}
      const controller=new AbortController();videoJob=controller;b.disabled=true;
      const box=el('div','gbai-video'),status=el('p','','Gerando vídeo em texto, sem áudio…');status.setAttribute('role','status');box.append(status);container.append(box);
      const cancel=button('Cancelar',()=>controller.abort());box.append(cancel);
      try{const result=await GBMarVideo.generate(text,progress=>status.textContent='Gerando no seu aparelho: '+progress+'%',controller.signal);
        if(!box.isConnected)return;
        const url=URL.createObjectURL(result.blob);videoURLs.add(url);box.dataset.objectUrl=url;
        const video=el('video');video.src=url;video.controls=true;video.playsInline=true;video.preload='metadata';video.setAttribute('aria-label','Vídeo com o texto da resposta, sem áudio');
        const download=el('a','gbai-source','Baixar vídeo ('+result.extension.toUpperCase()+')');download.href=url;download.download='gbmar-ia-guia.'+result.extension;
        box.replaceChildren(el('p','','Vídeo-guia em texto · sem áudio'),video,download);
      }catch(e){if(box.isConnected){box.replaceChildren(el('p','',e.message));box.append(button('Fechar aviso',()=>box.remove()));}}
      finally{if(videoJob===controller)videoJob=null;b.disabled=false;b.textContent='Vídeo-guia';}
    },'gbai-text-button');container.querySelector('.gbai-actions').append(b);
  }
  function sourceLink(entry){const a=el('a','gbai-source');a.href=entry.url;a.target='_blank';a.rel='noopener noreferrer';a.append(el('span','',entry.title),el('span','','↗'));a.setAttribute('aria-label','Abrir '+entry.title+' em nova aba');return a;}
  function showGuide(container,steps,title){
    const existing=container.querySelector('.gbai-guide');if(existing){existing.remove();return;}
    let i=0;const guide=el('div','gbai-guide'),count=el('small'),body=el('p'),controls=el('div','gbai-guide-controls');
    const previous=button('← Voltar',()=>{i--;render();}),next=button('Próximo →',()=>{i++;render();});
    guide.append(el('strong','','Guia visual · '+title),count,body,controls);controls.append(previous,next);container.append(guide);
    function render(){count.textContent='Passo '+(i+1)+' de '+steps.length;body.textContent=steps[i];previous.disabled=i===0;next.disabled=i===steps.length-1;next.textContent=i===steps.length-1?'Concluído':'Próximo →';}
    render();messages.scrollTop=messages.scrollHeight;
  }
  function append(role,text,result={}){
    const item=el('article','gbai-message'+(role==='user'?' gbai-user':''));
    item.setAttribute('aria-label',role==='user'?'Você':'GBMar IA');
    const bubble=el('div','gbai-bubble',text);item.append(bubble);
    if(result.sources?.length){const links=el('div','gbai-sources');result.sources.forEach(e=>links.append(sourceLink(e)));item.append(links);}
    if(role!=='user'){
      if(result.steps?.length)item.append(button('Guia de acesso · '+result.steps.length+' passos',()=>showGuide(item,result.steps,'Como acessar '+(result.sources?.[0]?.title||'o serviço')),'gbai-guide-button'));
      addActions(item,text);if(result.sources?.length)addVideo(item,text);
      if(result.sources?.length){const proof=el('details','gbai-proof');proof.append(el('summary','','Base da resposta'));result.sources.forEach(e=>proof.append(el('p','',e.title+': '+e.evidence)));item.append(proof);}
    }
    messages.append(item);while(messages.children.length>80){const old=messages.firstElementChild;old.querySelectorAll('[data-object-url]').forEach(x=>{URL.revokeObjectURL(x.dataset.objectUrl);videoURLs.delete(x.dataset.objectUrl);});old.remove();}messages.scrollTop=Math.max(0,item.offsetTop-12);
  }
  function setSuggestions(labels){suggestions.replaceChildren();labels.slice(0,4).forEach(label=>suggestions.append(button(label,()=>label==='Abrir leitura de texto'?switchTab('read',true):ask(label))));}
  function welcome(){
    messages.replaceChildren();engine.reset();$('.gbai-context').hidden=true;
    append('bot','Olá! Qual caminho você procura?\n\nPosso orientar o acesso aos serviços do GBMar, explicar os links e ajudar a ler um texto.');
    setSuggestions(['Mapa de Força GBMar','Esqueci minha senha do Prime','Consultar marés','Quais serviços você conhece?']);
  }
  function ask(value){const text=String(value||'').trim().slice(0,1200);if(!text)return;stopSpeaking();append('user',text);const result=engine.answer(text);append('bot',result.text,result);setSuggestions(result.suggestions);question.value='';question.style.height='';$('.gbai-send').disabled=true;$('.gbai-context').hidden=!result.contextLabel;$('#gbai-topic').textContent=result.contextLabel?'Assunto: '+result.contextLabel:'';question.focus();}
  function switchTab(id,moveFocus=false){currentTab=id;for(const name of ['chat','read','about']){const tab=$('#gbai-tab-'+name),selected=name===id;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;$('#gbai-'+name).hidden=!selected;}if(moveFocus)(id==='read'?doc:$('#gbai-tab-'+id)).focus();}
  for(const id of ['chat','read','about'])$('#gbai-tab-'+id).addEventListener('click',()=>switchTab(id));
  $('.gbai-tabs').addEventListener('keydown',e=>{const ids=['chat','read','about'];let i=ids.indexOf(currentTab);if(e.key==='ArrowRight')i=(i+1)%3;else if(e.key==='ArrowLeft')i=(i+2)%3;else if(e.key==='Home')i=0;else if(e.key==='End')i=2;else return;e.preventDefault();switchTab(ids[i]);$('#gbai-tab-'+ids[i]).focus();});
  function openState(open){panel.hidden=!open;fitViewport();toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar GBMar IA':'Abrir GBMar IA');if(open){lastFocus=document.activeElement;(currentTab==='chat'?question:$('#gbai-tab-'+currentTab)).focus();messages.scrollTop=messages.scrollHeight;}else{stopSpeaking();videoJob?.abort();root.querySelectorAll('video').forEach(v=>v.pause());(lastFocus?.isConnected?lastFocus:toggle).focus();}}
  toggle.addEventListener('click',()=>openState(panel.hidden));$('#gbai-close').addEventListener('click',()=>openState(false));
  $('#gbai-reset').addEventListener('click',()=>{stopSpeaking();clearVideos();fileGeneration++;welcome();doc.value='';focus.value='';question.value='';file.value='';reading.replaceChildren();$('.gbai-read-status').textContent='';$('.gbai-send').disabled=true;documentName='Texto colado';updateCount();switchTab('chat');question.focus();});
  $('.gbai-compose').addEventListener('submit',e=>{e.preventDefault();ask(question.value);});
  question.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();ask(question.value);}});
  question.addEventListener('input',()=>{$('.gbai-send').disabled=!question.value.trim();question.style.height='auto';question.style.height=Math.min(question.scrollHeight,100)+'px';});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){e.preventDefault();openState(false);}});
  $('#gbai-new-topic').addEventListener('click',()=>ask('Novo assunto'));
  function updateCount(){$('#gbai-count').textContent=doc.value.length.toLocaleString('pt-BR')+' / 30.000 caracteres';}
  doc.addEventListener('input',()=>{fileGeneration++;documentName='Texto colado';engine.setDocument(doc.value,documentName);updateCount();reading.replaceChildren();$('.gbai-read-status').textContent='';});focus.addEventListener('input',()=>reading.replaceChildren());
  file.addEventListener('change',async()=>{const f=file.files[0];if(!f)return;const generation=++fileGeneration;reading.replaceChildren();if(!/\.txt$/i.test(f.name)||f.size>128000){reading.textContent='Escolha um arquivo .txt de até 128 KB.';file.value='';return;}try{const text=await f.text();if(generation!==fileGeneration)return;if(text.length>30000){reading.textContent='O arquivo excede 30.000 caracteres. Recorte o trecho desejado antes de importar.';return;}doc.value=text;documentName=f.name;engine.setDocument(text,documentName);updateCount();reading.textContent='Texto carregado localmente. Selecione Resumir para continuar.';}catch{if(generation===fileGeneration)reading.textContent='Não foi possível ler o arquivo. Cole o texto diretamente.';}finally{if(generation===fileGeneration)file.value='';}});
  function highlighted(quote,marks){const fragment=document.createDocumentFragment();let cursor=0;for(const mark of marks||[]){if(mark.start<cursor)continue;fragment.append(document.createTextNode(quote.slice(cursor,mark.start)),el('mark','',quote.slice(mark.start,mark.end)));cursor=mark.end;}fragment.append(document.createTextNode(quote.slice(cursor)));return fragment;}
  $('#gbai-summarize').addEventListener('click',()=>{
    engine.setDocument(doc.value,documentName);const result=engine.summarize(doc.value,focus.value,documentName);reading.replaceChildren();
    $('.gbai-read-status').textContent=result.count?result.count+' trecho(s) localizado(s). Confira as condições destacadas.':result.text;
    if(!result.count)return;
    reading.append(el('p','',result.lead));
    for(const evidence of result.evidence){const card=el('section','gbai-evidence'),quote=el('blockquote','gbai-quote');quote.append(highlighted(evidence.text,evidence.marks));
      card.append(el('h3','','['+evidence.id+'] '+documentName+' · linhas '+evidence.lineStart+'–'+evidence.lineEnd),quote,button('Ver trecho no texto de origem',()=>{doc.focus();doc.setSelectionRange(evidence.start,evidence.end);doc.scrollIntoView({block:'nearest'});}));reading.append(card);
    }
    reading.append(el('p','gbai-muted','Trechos literais do texto fornecido. Não confirmam autenticidade, vigência ou interpretação jurídica.'));addActions(reading,result.text);
  });
  $('#gbai-total').textContent=String(engine.entries.length);
  const scopeLabels={pagina_publica:'Página pública consultada',tela_publica:'Somente tela pública de acesso',documentacao_publica:'Documentação pública do projeto',aplicacao_nao_lida:'Aplicação externa não lida',descricao_da_central:'Somente descrição da Central',sem_link:'Link ainda não cadastrado'};
  for(const entry of engine.entries){
    const detail=el('details','gbai-details');detail.dataset.search=GBMarEngine.norm(entry.title+' '+entry.aliases.join(' '));
    detail.append(el('summary','',entry.title),el('p','gbai-scope',scopeLabels[entry.reviewScope]||entry.reviewScope),el('p','',entry.summary),el('p','','Público: '+entry.audience),el('p','','Requisitos: '+entry.requirements.join(' ')),el('p','gbai-muted','Fonte: '+entry.evidence),el('p','gbai-muted','Revisão: '+entry.reviewed.split('-').reverse().join('/')+' · conteúdo autenticado não consultado.'),el('p','gbai-muted',entry.limit));
    if(entry.url)detail.append(sourceLink(entry));else detail.append(el('p','gbai-muted','Atalho ainda em preparação.'));
    if(entry.evidenceURL)detail.append(sourceLink({title:'Documentação usada nesta revisão',url:entry.evidenceURL}));
    for(const item of entry.questions.slice(0,5))detail.append(button(item.question,()=>{switchTab('chat');ask(item.question);}));
    $('#gbai-reference-list').append(detail);
  }
  $('#gbai-filter').addEventListener('input',()=>{const q=GBMarEngine.norm($('#gbai-filter').value);let visible=0;$('#gbai-reference-list').querySelectorAll('details').forEach(d=>{d.hidden=!d.dataset.search.includes(q);if(!d.hidden)visible++;});$('#gbai-no-source').hidden=visible>0;});
  welcome();
})();
