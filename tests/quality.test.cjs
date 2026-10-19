'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const kb=require('../gbmar-conhecimento'),{create}=require('../gbmar-motor'),reader=require('../gbmar-leitura'),layout=require('../gbmar-layout');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8'),catalog=[...html.matchAll(/<(a|div)\b([^>]*class="item[^>]*?)>([\s\S]*?)<\/\1>/g)].map(m=>({title:m[3].match(/class="name">(.*?)<\/span>/)?.[1]||'',url:m[2].match(/href="([^"]+)"/)?.[1].replaceAll('&amp;','&')||''}));
const ai=create(kb,catalog);let total=0,passed=0;
function check(name,fn){total++;try{fn();passed++;}catch(e){console.error('FAIL '+name+': '+e.message);process.exitCode=1;}}
check('Não sei verbal não significa sistema SEI',()=>{ai.reset();assert(!ai.answer('Não sei minha senha').topics.includes('sei'));ai.reset();assert.deepEqual(ai.answer('Não sei entrar no SEI').topics,['sei']);ai.reset();ai.answer('Esqueci a senha do Prime');assert.deepEqual(ai.answer('Não sei minha senha').topics,['prime']);});
for(const c of require('./fixtures/quality-scenarios.json'))check(c.name,()=>{ai.reset();let r;for(const q of c.turns)r=ai.answer(q);assert.deepEqual([...r.topics].sort(),[...c.topics].sort(),r.text);for(const s of c.includes||[])assert(r.text.toLowerCase().includes(s.toLowerCase()),r.text);for(const s of c.excludes||[])assert(!r.text.toLowerCase().includes(s.toLowerCase()),r.text);});
for(const e of kb.entries){
 check('Ficha completa: '+e.id,()=>{assert(e.audience&&e.requirements.length&&e.evidenceDetails&&e.reviewed&&e.limit);assert.equal(e.evidenceDetails.authenticatedContentRead,false);});
 for(const q of e.questions)check(e.id+' / '+q.intent,()=>{ai.reset();const r=ai.answer(q.question);assert(r.topics.includes(e.id),JSON.stringify({question:q.question,topics:r.topics,text:r.text}));assert.equal(r.intent,q.intent,JSON.stringify({q,r:r.intent}));});
}
const sample='Art. 3º. A entrega ocorrerá em até 5 dias após a autorização. Esse prazo não se aplica aos pedidos incompletos. Para estes, a contagem começa somente após a regularização.\n\nA equipe deverá confirmar o recebimento.\n\nExceto nos feriados, quando não haverá recebimento.';
check('Preserva prazo, exceção e condição',()=>{const r=reader.analyze(sample,'Qual o prazo de entrega?');assert(r.text.includes('5 dias após a autorização'));assert(r.text.includes('não se aplica aos pedidos incompletos'));assert(r.text.includes('somente após a regularização'));});
check('Trechos correspondem exatamente à origem',()=>{const r=reader.analyze(sample);for(const e of r.evidence){assert.equal(e.text,sample.slice(e.start,e.end));assert.equal(e.lineStart,sample.slice(0,e.start).split('\n').length);assert.equal(e.lineEnd,sample.slice(0,e.end).split('\n').length);}});
check('Ausência de prazo alegado',()=>{const r=reader.analyze(sample,'O prazo é 30 dias?');assert.equal(r.status,'value_not_found');assert(r.text.includes('não confirmam automaticamente'));});
check('Número parcial não confirma valor',()=>assert.equal(reader.analyze('O prazo informado é de 13 dias após autorização.','O prazo é 3 dias?').status,'value_not_found'));
check('Assunto ausente não gera fato',()=>assert.equal(reader.analyze(sample,'Qual o salário?').status,'not_found'));
check('Exceção curta não é descartada',()=>assert(reader.analyze('Prazo: cinco dias.\n\nExceto férias.','Qual o prazo?').text.includes('Exceto férias.')));
check('Documento passa ao chat sem rede',()=>{ai.setDocument(sample,'Exemplo');const r=ai.answer('Esse documento realmente informa esse prazo?');assert.equal(r.intent,'document');assert(r.evidence.length&&r.text.includes('5 dias'));});
check('Limpar elimina texto e contexto',()=>{ai.reset();assert.equal(ai.answer('Esse documento informa o prazo?').evidence,undefined);});
check('Pedido na mesma mensagem mantém intenções distintas',()=>{ai.reset();const r=ai.answer('Onde fica o posto e qual o efetivo hoje?');assert.equal(r.sections.find(s=>s.id==='forca').intent,'current');assert.equal(r.sections.find(s=>s.id==='postos').intent,'access');});
for(const [w,h,outer] of [[360,780,780],[390,380,844],[320,280,640],[540,300,300],[375,500,812]])check('Painel cabe no viewport '+w+'x'+h,()=>{const r=layout.calculate({width:w,height:h,layoutHeight:outer,offsetTop:50});assert(r.top>=50);assert(r.top+r.height<=50+h);assert(r.width<=w-16);});
check('Zoom mantém fallback CSS',()=>assert.equal(layout.calculate({width:300,height:600,scale:2}),null));
check('Dependências locais presentes e em ordem',()=>{const names=['gbmar-conhecimento','gbmar-leitura','gbmar-layout','gbmar-motor','gbmar-video','gbmar-assistente'];let last=-1;for(const n of names){const at=html.indexOf(n+'.js?v=3.0.0');assert(at>last,n);last=at;}});
check('Sem clientes de rede em todos os módulos de produção',()=>{for(const name of ['gbmar-conhecimento.js','gbmar-motor.js','gbmar-leitura.js','gbmar-layout.js','gbmar-video.js','gbmar-assistente.js'])assert(!/\b(fetch\s*\(|XMLHttpRequest|WebSocket|sendBeacon|localStorage|sessionStorage|indexedDB)\b/.test(fs.readFileSync(path.join(__dirname,'..',name),'utf8')),name);});
console.log(passed+'/'+total+' verificações de qualidade v3 aprovadas.');
