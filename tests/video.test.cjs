'use strict';
const assert=require('node:assert/strict');
const video=require('../gbmar-video');
const real={setInterval:global.setInterval,clearInterval:global.clearInterval};
let tracksStopped=0,mode='ok',recorder;
global.HTMLCanvasElement=class {};HTMLCanvasElement.prototype.captureStream=function(){};
global.document={createElement(){return {getContext(){return {fillRect(){},fillText(){}};},captureStream(){return {getTracks(){return [{stop(){tracksStopped++;}}];}};}};}};
global.MediaRecorder=class{
 static isTypeSupported(t){return t.startsWith('video/webm');}
 constructor(){this.state='inactive';recorder=this;}
 start(){this.state='recording';if(mode==='error')queueMicrotask(()=>this.onerror());}
 stop(){this.state='inactive';queueMicrotask(()=>{this.ondataavailable({data:new Blob(['frame'])});this.onstop();});}
};
let active=new Set();
global.setInterval=(fn)=>{const id={cancelled:false};active.add(id);const run=()=>{if(id.cancelled)return;fn();setImmediate(run);};setImmediate(run);return id;};
global.clearInterval=id=>{if(id){id.cancelled=true;active.delete(id);}};
(async()=>{
 assert(video.supported());
 let last=0;const result=await video.generate('Consulte a fonte indicada na Central.',p=>last=p);
 assert.equal(result.extension,'webm');assert(result.blob.size);assert.equal(last,100);assert.equal(active.size,0);assert.equal(tracksStopped,1);
 const cancel=new AbortController();const pending=video.generate('Resposta local.',()=>cancel.abort(),cancel.signal);await assert.rejects(pending,/cancelada/);assert.equal(active.size,0);assert.equal(tracksStopped,2);
 mode='error';await assert.rejects(video.generate('Resposta local.'),/não conseguiu/);assert.equal(active.size,0);assert.equal(tracksStopped,3);
 mode='ok';const early=new AbortController();early.abort();await assert.rejects(video.generate('Resposta local.',null,early.signal),/cancelada/);assert.equal(tracksStopped,4);
 console.log('Vídeo: conclusão, cancelamento, erro e limpeza de recursos aprovados (APIs simuladas).');
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>Object.assign(global,real));
