/* Vídeos de orientação em texto, gerados localmente; sem imagens/serviços externos. */
(function(root){
  'use strict';
  function splitSlides(text,maxChars=48,maxLines=6,maxSlides=5){
    const lines=[];
    for(const paragraph of String(text).split('\n').filter(x=>x.trim())){
      let line='';
      for(let word of paragraph.split(/\s+/)){
        while(word.length>maxChars){if(line){lines.push(line);line='';}lines.push(word.slice(0,maxChars));word=word.slice(maxChars);}
        if(line.length+word.length+1>maxChars){lines.push(line);line=word;}else line+=(line?' ':'')+word;
      }
      if(line)lines.push(line);lines.push('');
    }
    while(lines.at(-1)==='')lines.pop();
    const pages=[];for(let i=0;i<lines.length&&pages.length<maxSlides;i+=maxLines)pages.push(lines.slice(i,i+maxLines));
    if(lines.length>maxLines*maxSlides)pages[maxSlides-1][maxLines-1]='Continue a leitura na resposta do chat.';
    return pages.length?pages:[['Consulte os links da Central do GBMar.']];
  }
  function supported(){return typeof MediaRecorder!=='undefined'&&typeof HTMLCanvasElement!=='undefined'&&typeof HTMLCanvasElement.prototype.captureStream==='function';}
  async function generate(text,onProgress,signal){
    if(!supported())throw new Error('Este navegador não oferece gravação local de vídeo. Use o guia visual em etapas.');
    const formats=['video/webm;codecs=vp9','video/webm;codecs=vp8','video/webm','video/mp4'];
    const mime=formats.find(t=>MediaRecorder.isTypeSupported(t));
    if(!mime)throw new Error('Formato de vídeo local indisponível. Use o guia visual em etapas.');
    const canvas=document.createElement('canvas');canvas.width=1280;canvas.height=720;
    const ctx=canvas.getContext('2d');if(!ctx)throw new Error('Não foi possível preparar o vídeo neste navegador.');
    const slides=splitSlides(text),seconds=7,frameRate=10,total=slides.length*seconds*frameRate;
    function paint(frame){
      const index=Math.min(slides.length-1,Math.floor(frame/(seconds*frameRate)));
      ctx.fillStyle='#081c2b';ctx.fillRect(0,0,1280,720);ctx.fillStyle='#153748';ctx.fillRect(0,0,1280,122);
      ctx.fillStyle='#91dfcf';ctx.font='bold 34px Arial';ctx.fillText('GBMar IA',64,78);
      ctx.fillStyle='#abc4d0';ctx.font='22px Arial';ctx.fillText('GUIA DE CONSULTA  /  '+(index+1)+' DE '+slides.length,790,76);
      ctx.font='30px monospace';ctx.fillStyle='#edf6f9';slides[index].forEach((line,i)=>ctx.fillText(line,64,196+i*61));
      ctx.fillStyle='#abc4d0';ctx.font='20px Arial';ctx.fillText('Orientação local · Não oficial · Confira as fontes indicadas no chat',64,650);
      ctx.fillStyle='#284b5c';ctx.fillRect(64,678,1152,4);ctx.fillStyle='#91dfcf';ctx.fillRect(64,678,1152*frame/total,4);
    }
    paint(0);const stream=canvas.captureStream(frameRate);
    let recorder;try{recorder=new MediaRecorder(stream,{mimeType:mime,videoBitsPerSecond:1500000});}catch(e){stream.getTracks().forEach(t=>t.stop());throw e;}
    return await new Promise((resolve,reject)=>{
      const chunks=[];let frame=0,timer,watchdog,done=false;
      function cleanup(){clearInterval(timer);clearTimeout(watchdog);stream.getTracks().forEach(t=>t.stop());signal?.removeEventListener('abort',cancel);}
      function fail(message){if(done)return;done=true;cleanup();if(recorder.state!=='inactive')recorder.stop();reject(new Error(message));}
      function cancel(){fail('Geração cancelada.');}
      recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};
      recorder.onerror=()=>fail('O navegador não conseguiu gerar o vídeo. Use o guia visual.');
      recorder.onstop=()=>{if(done)return;done=true;cleanup();if(signal?.aborted){reject(new Error('Geração cancelada.'));return;}if(!chunks.length){reject(new Error('O vídeo ficou vazio. Use o guia visual.'));return;}resolve({blob:new Blob(chunks,{type:mime}),extension:mime.includes('mp4')?'mp4':'webm'});};
      if(signal?.aborted){cancel();return;}
      signal?.addEventListener('abort',cancel,{once:true});
      try{recorder.start();}catch{fail('Não foi possível iniciar a gravação local.');return;}
      timer=setInterval(()=>{frame++;paint(frame);onProgress?.(Math.round(frame/total*100));if(frame>=total){clearInterval(timer);if(recorder.state!=='inactive')recorder.stop();}},1000/frameRate);
      // Evita gravação sem limite se a aba ficar suspensa em segundo plano.
      watchdog=setTimeout(()=>fail('A geração demorou demais. Mantenha a página aberta e tente novamente.'),60000);
    });
  }
  const api={splitSlides,supported,generate};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.GBMarVideo=api;
})(typeof globalThis!=='undefined'?globalThis:this);
