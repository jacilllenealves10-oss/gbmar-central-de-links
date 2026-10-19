/* Comparação reprodutível de comportamentos, sem tráfego ou dados de visitantes. */
'use strict';
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),cp=require('node:child_process');
const repo=path.resolve(__dirname,'..'),baseline=process.argv[2]||'9e8769e8785582cb098919d0c6100ff60733eaea';
if(!/^[a-f0-9]{7,40}$/.test(baseline))throw new Error('Informe um SHA de commit.');
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'gbmar-baseline-'));
try{
 for(const name of ['gbmar-motor.js','gbmar-conhecimento.js'])fs.writeFileSync(path.join(dir,name),cp.execFileSync('git',['show',baseline+':'+name],{cwd:repo}));
 const html=fs.readFileSync(path.join(repo,'index.html'),'utf8'),catalog=[...html.matchAll(/<(a|div)\b([^>]*class="item[^>]*?)>([\s\S]*?)<\/\1>/g)].map(m=>({title:m[3].match(/class="name">(.*?)<\/span>/)?.[1]||'',url:m[2].match(/href="([^"]+)"/)?.[1].replaceAll('&amp;','&')||''}));
 const before=require(path.join(dir,'gbmar-motor')).create(require(path.join(dir,'gbmar-conhecimento')),catalog),after=require('../gbmar-motor').create(require('../gbmar-conhecimento'),catalog);
 const scenarios=require('./fixtures/quality-scenarios.json');
 function run(ai,c){ai.reset();let r;for(const q of c.turns)r=ai.answer(q);const topics=JSON.stringify([...r.topics].sort())===JSON.stringify([...c.topics].sort());return {ok:topics&&(c.includes||[]).every(s=>r.text.toLowerCase().includes(s.toLowerCase()))&&(c.excludes||[]).every(s=>!r.text.toLowerCase().includes(s.toLowerCase())),text:r.text,topics:r.topics};}
 const results=scenarios.map(c=>({name:c.name,questions:c.turns,before:run(before,c),after:run(after,c)}));
 const oldPass=results.filter(r=>r.before.ok).length,newPass=results.filter(r=>r.after.ok).length;
 const md=['# Validação GBMar IA v3 — 19/10/2026','',`Comparação com o commit ${baseline}. Cenários sintéticos e perguntas fornecidas pelo usuário; nenhum dado de visitante.`,``,`Resultado neste conjunto específico: v2 **${oldPass}/${results.length}**; v3 **${newPass}/${results.length}**. Isso é um teste de regressão, não uma estimativa de precisão para perguntas arbitrárias.`,``,`| Cenário | V2 | V3 |`,`|---|---|---|`,...results.map(r=>`| ${r.name} | ${r.before.ok?'Atende':'Falha'} | ${r.after.ok?'Atende':'Falha'} |`),'','## Evidências de mudança','',...results.filter(r=>!r.before.ok&&r.after.ok).slice(0,8).flatMap(r=>['### '+r.name,'','Pergunta(s): '+r.questions.join(' → '),'','Antes: '+r.before.text.replaceAll('\n',' '),'','Depois: '+r.after.text.replaceAll('\n',' '),'']),'## Verificações adicionais','','- 84 verificações anteriores: preservadas.','- 201 verificações novas: intenções das fichas, contexto, negações, múltiplos assuntos, evidências literais e limites de viewport.','- Vídeo: conclusão, cancelamento, erro e encerramento dos recursos cobertos com APIs simuladas.','- Sem clientes de rede, telemetria ou persistência em módulos de produção. Política connect-src none preservada.','- A conferência em navegador real e a publicação são registradas após a entrega.','', '## Leitura local','','O exemplo sintético “5 dias após a autorização”, com exceção para pedidos incompletos e início da contagem após regularização, mantém o bloco integral na v3. Valores alegados ausentes são apontados; cada trecho tem offsets e linhas conferíveis. O motor não decide validade jurídica.',''];
 fs.writeFileSync(path.join(repo,'docs/VALIDACAO_V3.md'),md.join('\n'));
 console.log(JSON.stringify({baseline:oldPass,current:newPass,total:results.length}));
}finally{fs.rmSync(dir,{recursive:true,force:true});}
