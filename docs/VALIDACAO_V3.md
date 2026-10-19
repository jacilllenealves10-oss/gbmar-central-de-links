# Validação GBMar IA v3 — 19/10/2026

Comparação com o commit 9e8769e8785582cb098919d0c6100ff60733eaea. Cenários sintéticos e perguntas fornecidas pelo usuário; nenhum dado de visitante.

Resultado neste conjunto específico: v2 **6/20**; v3 **20/20**. Isso é um teste de regressão, não uma estimativa de precisão para perguntas arbitrárias.

| Cenário | V2 | V3 |
|---|---|---|
| Chuva em localidade não vira mapa de postos | Falha | Atende |
| Efetivo atual é encaminhado à fonte correta | Falha | Atende |
| Recuperação do Prime | Atende | Atende |
| E-mail de recuperação mantém o Prime | Falha | Atende |
| Como faço isso mantém a etapa da recuperação | Falha | Atende |
| Fonte contextual após três turnos | Falha | Atende |
| Comparar os dois mapas de força | Falha | Atende |
| Corrigir serviço com negação | Falha | Atende |
| Corrigir tema com negação | Atende | Atende |
| Duas perguntas na mesma mensagem | Falha | Atende |
| Dois temas ambientais | Falha | Atende |
| Desambiguação aceita segunda opção | Atende | Atende |
| Fontes no plural preservam assunto | Falha | Atende |
| Documento ausente não é confirmado | Falha | Atende |
| Troca explícita encerra contexto anterior | Atende | Atende |
| Prazo de recuperação não é inventado | Falha | Atende |
| Erro de digitação no nome do Prime | Atende | Atende |
| Dados atuais de embarcação sem invenção | Falha | Atende |
| Contingência mantém referência histórica | Atende | Atende |
| Pedido de edição da planilha é recusado | Falha | Atende |

## Evidências de mudança

### Chuva em localidade não vira mapa de postos

Pergunta(s): Vai chover em Boa Viagem amanhã?

Antes: Localização dos postos O mapa de postos ajuda a localizar os pontos cadastrados do GBMar.  Não tenho leitura em tempo real dessa fonte. A localização cadastrada não comprova que o posto esteja ativado ou guarnecido neste momento.  ────────  Chuvas e clima · APAC O monitoramento da APAC reúne consultas de chuvas, radar meteorológico, dados históricos e informações hidrológicas.  Não tenho leitura em tempo real dessa fonte. Não recebo alertas nem medições ao vivo. Um acumulado de chuva não equivale a uma previsão.

Depois: Chuvas e clima · APAC Não tenho previsão ou medição ao vivo. Para saber se vai chover, abra a Previsão do Tempo indicada pela APAC e confira localidade e validade. O monitoramento de chuva observada é um produto diferente.

### Efetivo atual é encaminhado à fonte correta

Pergunta(s): Quantos militares estão no Pina?

Antes: Mapa de Força · GBMar A planilha do GBMar concentra escalas, efetivo, postos, viaturas, embarcações, permutas e registros diários.  Não tenho leitura em tempo real dessa fonte. Não consulto nem altero a planilha oficial. Não posso informar efetivo, nomes de serviço ou meios disponíveis em tempo real.

Depois: Mapa de Força · GBMar Não tenho o efetivo atual nem os nomes de quem está de serviço. Consulte a data do serviço e o posto no Mapa de Força GBMar, com a conta autorizada.

### E-mail de recuperação mantém o Prime

Pergunta(s): Esqueci a senha do Prime. → E se o e-mail de recuperação não chegar?

Antes: E-mail funcional · SOGo SOGo PE é o atalho de acesso ao correio eletrônico institucional do Governo de Pernambuco.  Não leio nem envio mensagens, e não recupero a sua senha.

Depois: Prime Frota Continuamos na recuperação do Prime Frota.  Verificação geral: confira spam/lixo eletrônico e se você está consultando o e-mail cadastrado. O Prime informa que valida esse endereço antes de enviar as instruções. Se a mensagem não chegar ou o cadastro estiver incorreto, procure o assessor do contrato. A fonte consultada não informa prazo de entrega; não posso prometer um tempo de espera.

### Como faço isso mantém a etapa da recuperação

Pergunta(s): Esqueci a senha do Prime. → E se o e-mail de recuperação não chegar? → Como faço isso?

Antes: Não tenho uma resposta fundamentada para essa pergunta na base da Central. Diga o serviço ou tema, como Prime Frota, BGE, marés ou escala. Para um documento específico, use Ler texto.

Depois: Prime Frota Verificação geral: abra o e-mail cadastrado no serviço, procure a mensagem na caixa de entrada e em spam/lixo eletrônico. Se não encontrar ou não souber qual endereço foi cadastrado, confirme o cadastro com o responsável pelo acesso. No Prime, a orientação pública é procurar o assessor do contrato.

### Fonte contextual após três turnos

Pergunta(s): Esqueci a senha do Prime. → E se o e-mail de recuperação não chegar? → Como faço isso? → Qual a fonte?

Antes: Não tenho uma resposta fundamentada para essa pergunta na base da Central. Diga o serviço ou tema, como Prime Frota, BGE, marés ou escala. Para um documento específico, use Ler texto.

Depois: Prime Frota Fonte: Tela pública de acesso e recuperação do Prime consultada em 19/10/2026. Revisão: 19/10/2026. Escopo: sem leitura de conteúdo autenticado. Não vejo saldos, cartões ou abastecimentos e não libero créditos.

### Comparar os dois mapas de força

Pergunta(s): Qual a diferença entre os mapas de força?

Antes: Não tenho uma resposta fundamentada para essa pergunta na base da Central. Diga o serviço ou tema, como Prime Frota, BGE, marés ou escala. Para um documento específico, use Ler texto.

Depois: Mapa de Força · GBMar A planilha do GBMar concentra escalas, efetivo, postos, viaturas, embarcações, permutas e registros diários. Acesso: Google Sheets; acesso sujeito à autorização.  Mapa de Força · Institucional É o sistema institucional de efetivo e meios do CBMPE, distinto da planilha local do GBMar. Acesso: Aplicação dependente de JavaScript; acesso institucional.  São destinos independentes. Consulte a fonte correspondente à sua necessidade; não há sincronização realizada por este assistente.

### Corrigir serviço com negação

Pergunta(s): Não é o Prime, é o BGE

Antes: Encontrei mais de um serviço possível. Qual deles você quer consultar?

Depois: Boletim Geral Eletrônico O BGE é o atalho para consulta aos boletins do CBMPE.  Não leio boletins restritos nem confirmo a publicação mais recente. Você pode colar um trecho autorizado na área Ler texto para um resumo local.

### Duas perguntas na mesma mensagem

Pergunta(s): Como acesso o Prime e onde vejo minha escala?

Antes: Escala de Serviço Eletrônica A ESE é o destino institucional para a Escala de Serviço Eletrônica do CBMPE.  1. Abra a ESE. 2. Informe seu acesso no portal e complete a verificação solicitada. 3. Confira o período e a escala disponíveis ao seu perfil.  Não sei quando você está escalado nem realizo trocas ou permutas.  Acesso: Tela de entrada com login, senha e verificação por caracteres.

Depois: Prime Frota Use o link de Prime Frota indicado abaixo.  1. Abra o Prime Frota. 2. Na área Empresa Cliente, preencha código do cliente, login e senha diretamente no portal. 3. Após entrar, consulte os registros disponíveis ao seu perfil.  Escala de Serviço Eletrônica Use o link de Escala de Serviço Eletrônica indicado abaixo.  1. Abra a ESE. 2. Informe seu acesso no portal e complete a verificação solicitada. 3. Confira o período e a escala disponíveis ao seu perfil.

## Verificações adicionais

- 84 verificações anteriores: preservadas.
- 202 verificações novas: intenções das fichas, contexto, negações, múltiplos assuntos, evidências literais e limites de viewport.
- Vídeo: conclusão, cancelamento, erro e encerramento dos recursos cobertos com APIs simuladas.
- Sem clientes de rede, telemetria ou persistência em módulos de produção. Política connect-src none preservada.
- A conferência em navegador real e a publicação são registradas após a entrega.

## Leitura local

O exemplo sintético “5 dias após a autorização”, com exceção para pedidos incompletos e início da contagem após regularização, mantém o bloco integral na v3. Valores alegados ausentes são apontados; cada trecho tem offsets e linhas conferíveis. O motor não decide validade jurídica.
