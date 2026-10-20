# GBMar · Central de Links

Central estática publicada no GitHub Pages. Assistente **GBMar IA v3**, com base editorial de 27 serviços (21 links ativos e 6 espaços em preparação).

## Funcionamento e custo das respostas

- Processamento no navegador, sem modelo remoto, API, chave, cobrança por pergunta, servidor de inferência ou banco pago.
- Perguntas, documentos e conversas não são enviados nem persistidos; ficam apenas na memória da página.
- A política `connect-src 'none'` bloqueia conexões de scripts. Os únicos recursos do assistente são arquivos estáticos da própria origem. Links externos só são abertos por ação do visitante.
- Voz: apenas vozes identificadas pelo navegador como locais e em português. O recurso fica oculto sem uma voz compatível.
- Vídeo: cartões de texto gerados localmente com Canvas/MediaRecorder, sem áudio, em WebM ou MP4 conforme suporte. Até 5 cartões/35 segundos, com cancelamento, limite de duração e liberação dos recursos. Não são filmagens dos sistemas.
- Custos, disponibilidade e regras dos serviços externos continuam próprios de cada serviço; o assistente não contrata nenhum deles.

## Base e capacidades

`gbmar-conhecimento.js` contém identificação, aliases, finalidade, etapas, condições de acesso, limitações e perguntas específicas por serviço. `gbmar-motor.js` separa assunto e intenção, interpreta plurais, acentos, sinônimos, pequenos erros de digitação, correções, perguntas com mais de um tema e continuações. A conversa mantém estado apenas em memória. A base tem 150 perguntas de referência, público, requisitos e escopo de revisão por serviço. Quando necessário, pede a escolha entre serviços. Não é um LLM e não aprende automaticamente.

A área **Ler texto** aceita até 30.000 caracteres ou TXT de até 128 KB (também limitado a 30.000 caracteres). O resumo é extrativo (`gbmar-leitura.js`): mostra trechos literais com linhas e intervalos verificáveis, sem acrescentar informação externa. Preserva condições e exceções próximas. Datas, quantidades e conectivos condicionais são destacados; um botão seleciona o trecho na origem. Perguntas que alegam valores ausentes não recebem confirmação. Uma pergunta opcional filtra os trechos por assunto. Não lê imagens, PDFs, documentos externos ou conteúdo autenticado.

A área **Sobre e fontes** lista todos os serviços, a origem da orientação e os limites de leitura. Não foram copiados dados operacionais internos, saldos, senhas, escalas ou células das planilhas.

## Revisão das fontes — 19/10/2026

- CPRH e APAC: páginas públicas consultadas, com orientações de navegação e interpretação de seus produtos.
- Prime Frota: tela pública de entrada e instrução pública de recuperação de acesso.
- SEI, BGE, ESE, SCA e SIGPAD: somente telas públicas de acesso; conteúdo autenticado não consultado.
- SACBM/Online: catálogo público de serviços.
- Mapa de Operações/postos: descrições da Central e README público de `jacilllenealves10-oss/mapa-gbmar`; cadastro de posto não significa ativação diária.
- Intranet e Mapa de Força institucional: a consulta pública exige JavaScript; descrição da Central preservada.
- SurfGuru: leitura externa bloqueada com HTTP 403; orientação limitada à descrição da Central.
- SOGo e site da STSGT: conteúdo externo não recuperado; orientação limitada à descrição da Central.
- Pastas do Drive e planilhas: conteúdo não recuperado. Nenhuma planilha foi editada.
- Itens “Em breve”: explicitamente identificados e sem destinos inventados.

As referências externas estão nos próprios cartões da Central. As descrições de contingência (09–12/10/2026) e da previsão do site STSGT (15/11/2026) são tratadas como registros datados, nunca como estado atual.

## Manutenção

1. Atualizar a finalidade/FAQ em `gbmar-conhecimento.js` apenas com fonte verificável e conteúdo publicável.
2. Preservar a correspondência entre `match` e os títulos em `index.html`.
3. Atualizar a data editorial somente após a revisão pertinente. Não afirmar que páginas restritas foram lidas.
4. Executar `node tests/assistant.test.cjs`, `node tests/quality.test.cjs` e `node tests/video.test.cjs`. A comparação reproduzível com a versão anterior usa `node tests/compare.cjs`.
5. Atualizar a versão dos scripts e CSS em `index.html` quando houver nova entrega.

## Validação desta versão

84 verificações anteriores e 202 novas passaram. Nos 20 cenários comparativos, a v2 atendeu a 6 e a v3 a 20. Este resultado se limita ao conjunto de teste, não mede precisão geral. Consulte [VALIDACAO_V3.md](docs/VALIDACAO_V3.md). Teste da geração de vídeo com APIs simuladas cobre conclusão, cancelamento, erro e encerramento dos recursos; não comprova codecs reais.

A sintaxe JavaScript e a integridade dos arquivos foram verificadas. O painel usa `gbmar-layout.js` para adaptar sua altura ao viewport visual e ao teclado virtual, com fallback CSS. A geometria foi testada em cinco tamanhos; confirmação em aparelho físico e outros navegadores continua necessária. O recurso de vídeo tem fallback para guia visual quando não há suporte. A interface publicada e a geração/reprodução real de WEBM foram verificadas no Chrome em 20/10/2026. Resultados e limitações: [QA_NAVEGADOR_V3.md](docs/QA_NAVEGADOR_V3.md).
