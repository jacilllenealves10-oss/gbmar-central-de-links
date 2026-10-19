/* Base editorial pública. Sem conteúdo de contas ou arquivos restritos. */
(function(root){
 const data={
  "version": "3.0.0",
  "reviewed": "2026-10-19",
  "scope": "Orientação local por serviço e intenção; fontes revisadas e limites de acesso explícitos.",
  "entries": [
    {
      "id": "operacoes",
      "match": "Mapa de Operações GBMAR",
      "title": "Mapa de Operações",
      "aliases": [
        "mapa de operacoes",
        "mapa operacional",
        "satelite",
        "openstreetmap",
        "ocorrencias",
        "areas de risco",
        "georreferenciamento"
      ],
      "summary": "O mapa reúne ocorrências e prevenções para apoiar o planejamento territorial, com filtros e análise por cidade e posto.",
      "steps": [
        "Abra o Mapa de Operações.",
        "Escolha os filtros de período, cidade e posto disponíveis.",
        "Confira a data da base e a origem das coordenadas antes de interpretar os pontos."
      ],
      "limit": "O mapa representa a base publicada. Um posto cadastrado não significa posto ativado hoje; coordenadas inferidas não são levantamentos GPS oficiais.",
      "access": "Consulta pelo link público do mapa.",
      "evidence": "Descrição da Central e README público do repositório mapa-gbmar.",
      "faqs": [
        {
          "q": [
            "O mapa mostra os postos ativos hoje?",
            "Posso usar o mapa como situação atual?"
          ],
          "a": "Não. Postos cadastrados e ocorrências históricas não comprovam ativação diária. Consulte o Mapa de Força GBMar para a situação do serviço.",
          "id": "operacoes-1",
          "basis": "base_revisada"
        },
        {
          "q": [
            "As coordenadas são exatas?",
            "Os pontos são GPS?"
          ],
          "a": "O projeto distingue coordenadas originais e inferidas. Confira a identificação de cada ponto antes de utilizá-lo no planejamento.",
          "id": "operacoes-2",
          "basis": "base_revisada"
        }
      ],
      "names": [
        "mapa de operacoes",
        "mapa operacional"
      ],
      "audience": "Militares e pessoas que consultam o planejamento territorial publicado.",
      "reviewed": "2026-10-19",
      "reviewScope": "documentacao_publica",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Consulta pelo link público do mapa."
      ],
      "evidenceDetails": {
        "kind": "documentacao_publica",
        "date": "2026-10-19",
        "description": "Descrição da Central e README público do repositório mapa-gbmar.",
        "contentRead": true,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "O mapa contém a base publicada, não uma leitura operacional ao vivo. Confira o período dos dados antes de interpretar os pontos.",
        "audience": "Militares e pessoas que consultam o planejamento territorial publicado.",
        "permissions": "Consulta pelo link público do mapa. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Mapa de Operações, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Orientação geral de acesso: confira o endereço e a conexão. Se o portal pedir autenticação, use somente sua conta autorizada. Persistindo a falha, procure o suporte responsável pelo serviço."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Mapa de Operações?"
        },
        {
          "intent": "access",
          "question": "Como acessar Mapa de Operações?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Mapa de Operações?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Mapa de Operações"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Mapa de Operações?"
        }
      ],
      "evidenceURL": "https://github.com/jacilllenealves10-oss/mapa-gbmar/blob/main/README.md"
    },
    {
      "id": "mares",
      "match": "Consulta diária das marés",
      "title": "Marés · SurfGuru",
      "aliases": [
        "mare",
        "mares",
        "tabua de mare",
        "preamar",
        "baixa mar",
        "vazante",
        "enchente",
        "surfguru",
        "nivel do mar"
      ],
      "summary": "O atalho leva à previsão de marés cadastrada na Central, para consulta de horários e níveis previstos.",
      "steps": [
        "Abra a previsão no SurfGuru.",
        "Confirme a localidade, a data e o horário exibidos na página.",
        "Confira os horários e as alturas previstos antes de planejar a atividade."
      ],
      "limit": "Não tenho os valores da maré de hoje. A previsão precisa ser conferida na fonte e não substitui a avaliação local.",
      "access": "Link externo; a disponibilidade depende do SurfGuru.",
      "evidence": "Descrição da Central. A leitura externa foi bloqueada (HTTP 403).",
      "faqs": [],
      "names": [
        "surfguru",
        "surf guru"
      ],
      "audience": "Pessoas que precisam consultar previsão de marés para a localidade cadastrada.",
      "reviewed": "2026-10-19",
      "reviewScope": "descricao_da_central",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Link externo; a disponibilidade depende do SurfGuru."
      ],
      "evidenceDetails": {
        "kind": "descricao_da_central",
        "date": "2026-10-19",
        "description": "Descrição da Central. A leitura externa foi bloqueada (HTTP 403).",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não tenho horários ou alturas atualizados da maré. Abra o SurfGuru e confira a localidade, a data e a tabela de previsão.",
        "audience": "Pessoas que precisam consultar previsão de marés para a localidade cadastrada.",
        "permissions": "Link externo; a disponibilidade depende do SurfGuru. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Marés · SurfGuru, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Orientação geral de acesso: confira o endereço e a conexão. Se o portal pedir autenticação, use somente sua conta autorizada. Persistindo a falha, procure o suporte responsável pelo serviço."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Marés · SurfGuru?"
        },
        {
          "intent": "access",
          "question": "Como acessar Marés · SurfGuru?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Marés · SurfGuru?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Marés · SurfGuru"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Marés · SurfGuru?"
        }
      ]
    },
    {
      "id": "cprh",
      "match": "Balneabilidade",
      "title": "Balneabilidade · CPRH",
      "aliases": [
        "balneabilidade",
        "cprh",
        "agua propria",
        "agua impropria",
        "qualidade da agua",
        "poluicao",
        "banho",
        "praia limpa"
      ],
      "summary": "A CPRH divulga a classificação da água das praias como própria ou imprópria para banho, baseada no monitoramento de contaminação.",
      "steps": [
        "Abra a página de balneabilidade da CPRH.",
        "Selecione o último informativo disponível.",
        "Confira a data do boletim e o ponto de coleta correspondente à praia."
      ],
      "limit": "Não confirmo a classificação atual de uma praia. Água própria não é garantia de segurança contra correntes, ondas ou outros riscos.",
      "access": "Consulta pública.",
      "evidence": "Página pública da CPRH consultada em 19/10/2026.",
      "faqs": [
        {
          "q": [
            "O que significa própria ou imprópria para banho?",
            "Como interpretar balneabilidade?"
          ],
          "a": "A classificação informa a qualidade sanitária da água para banho. A CPRH usa análises de bactérias indicadoras de contaminação e divulga informativos periódicos. Confira sempre o ponto de coleta e a data.",
          "id": "cprh-1",
          "basis": "base_revisada"
        }
      ],
      "names": [
        "cprh"
      ],
      "audience": "Público interessado na qualidade sanitária da água das praias.",
      "reviewed": "2026-10-19",
      "reviewScope": "pagina_publica",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Consulta pública."
      ],
      "evidenceDetails": {
        "kind": "pagina_publica",
        "date": "2026-10-19",
        "description": "Página pública da CPRH consultada em 19/10/2026.",
        "contentRead": true,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não tenho a classificação atual dessa praia. Abra o último informativo da CPRH e confira a data e o ponto de coleta.",
        "audience": "Público interessado na qualidade sanitária da água das praias.",
        "permissions": "Consulta pública. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Balneabilidade · CPRH, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Orientação geral de acesso: confira o endereço e a conexão. Se o portal pedir autenticação, use somente sua conta autorizada. Persistindo a falha, procure o suporte responsável pelo serviço."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Balneabilidade · CPRH?"
        },
        {
          "intent": "access",
          "question": "Como acessar Balneabilidade · CPRH?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Balneabilidade · CPRH?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Balneabilidade · CPRH"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Balneabilidade · CPRH?"
        }
      ]
    },
    {
      "id": "apac",
      "match": "Monitoramento APAC",
      "title": "Chuvas e clima · APAC",
      "aliases": [
        "apac",
        "chuva",
        "chuvas",
        "meteorologia",
        "tempo",
        "clima",
        "precipitacao",
        "radar",
        "reservatorios",
        "rios",
        "alerta meteorologico"
      ],
      "summary": "O monitoramento da APAC reúne consultas de chuvas, radar meteorológico, dados históricos e informações hidrológicas.",
      "steps": [
        "Abra o monitoramento da APAC.",
        "Escolha a consulta desejada, como chuva em tempo real ou acumulada em 24 horas.",
        "Selecione a localidade disponível e confira a data e a hora da atualização."
      ],
      "limit": "Não recebo alertas nem medições ao vivo. Um acumulado de chuva não equivale a uma previsão.",
      "access": "Consulta pública; painéis interativos dependem de JavaScript.",
      "evidence": "Página pública de monitoramento da APAC consultada em 19/10/2026.",
      "faqs": [
        {
          "q": [
            "Chuva acumulada é previsão?",
            "Qual a diferença entre previsão e monitoramento?"
          ],
          "a": "Monitoramento apresenta observações ou medições. Previsão descreve condições esperadas. Na APAC, confira o tipo do produto e o horário de referência antes de interpretar o valor.",
          "id": "apac-1",
          "basis": "base_revisada"
        }
      ],
      "names": [
        "apac"
      ],
      "audience": "Público interessado em monitoramento de chuvas e produtos meteorológicos.",
      "reviewed": "2026-10-19",
      "reviewScope": "pagina_publica",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Consulta pública; painéis interativos dependem de JavaScript."
      ],
      "evidenceDetails": {
        "kind": "pagina_publica",
        "date": "2026-10-19",
        "description": "Página pública de monitoramento da APAC consultada em 19/10/2026.",
        "contentRead": true,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não tenho previsão ou medição ao vivo. Para saber se vai chover, abra a Previsão do Tempo indicada pela APAC e confira localidade e validade. O monitoramento de chuva observada é um produto diferente.",
        "audience": "Público interessado em monitoramento de chuvas e produtos meteorológicos.",
        "permissions": "Consulta pública; painéis interativos dependem de JavaScript. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Chuvas e clima · APAC, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Orientação geral de acesso: confira o endereço e a conexão. Se o portal pedir autenticação, use somente sua conta autorizada. Persistindo a falha, procure o suporte responsável pelo serviço."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Chuvas e clima · APAC?"
        },
        {
          "intent": "access",
          "question": "Como acessar Chuvas e clima · APAC?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Chuvas e clima · APAC?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Chuvas e clima · APAC"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Chuvas e clima · APAC?"
        }
      ],
      "relatedSources": [
        {
          "id": "apac-previsao",
          "title": "Previsão do Tempo · APAC",
          "url": "https://painel.apac.pe.gov.br/previsao/",
          "evidence": "Link de Previsão do Tempo observado na página pública da APAC em 19/10/2026. O conteúdo do destino não foi recuperado nesta revisão.",
          "reviewed": "2026-10-19",
          "reviewScope": "link_publicado_pela_fonte"
        }
      ]
    },
    {
      "id": "contingencia",
      "match": "Modelos do Serviço Diário",
      "title": "Modelos · Contingência SEI",
      "aliases": [
        "contingencia sei",
        "sei fora do ar",
        "sei indisponivel",
        "modelos do servico diario",
        "relatorio diario"
      ],
      "summary": "A pasta reúne modelos do serviço diário cadastrados para a contingência do SEI de 09 a 12/10/2026.",
      "steps": [
        "Confira com a unidade qual orientação de contingência está vigente.",
        "Abra a pasta com a conta autorizada.",
        "Utilize apenas o modelo aplicável e siga a orientação da unidade para posterior juntada no SEI."
      ],
      "limit": "A indicação de 09–12/10/2026 é histórica. Ela não comprova indisponibilidade atual nem prorrogação da orientação.",
      "access": "Pasta do Google Drive sujeita a permissão.",
      "evidence": "Descrição cadastrada na Central; conteúdo interno não consultado.",
      "faqs": [],
      "names": [
        "contingencia sei",
        "modelos do servico diario"
      ],
      "audience": "Militares responsáveis pelos registros do serviço diário.",
      "reviewed": "2026-10-19",
      "reviewScope": "descricao_da_central",
      "requirements": [
        "Conta Google autorizada para esse arquivo ou pasta.",
        "Permissão concedida pelo responsável; a Central não concede acesso."
      ],
      "evidenceDetails": {
        "kind": "descricao_da_central",
        "date": "2026-10-19",
        "description": "Descrição cadastrada na Central; conteúdo interno não consultado.",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "A pasta está descrita na Central para 09–12/10/2026. Essa referência histórica não comprova indisponibilidade do SEI hoje. Confirme a orientação vigente com a unidade.",
        "audience": "Militares responsáveis pelos registros do serviço diário.",
        "permissions": "Pasta do Google Drive sujeita a permissão. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Modelos · Contingência SEI, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "A pasta está descrita na Central para 09–12/10/2026. Essa referência histórica não comprova indisponibilidade do SEI hoje. Confirme a orientação vigente com a unidade. Use apenas a orientação de contingência que a unidade confirmar como vigente.",
        "recovery": "O acesso depende da sua conta Google e da permissão do arquivo. Recupere a conta pelos canais do Google; se a conta já entra, solicite ao responsável apenas a permissão necessária."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Modelos · Contingência SEI?"
        },
        {
          "intent": "access",
          "question": "Como acessar Modelos · Contingência SEI?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Modelos · Contingência SEI?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Modelos · Contingência SEI"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Modelos · Contingência SEI?"
        }
      ]
    },
    {
      "id": "saq",
      "match": "Oficial de Operações SAQ",
      "title": "Oficial de Operações · SAQ",
      "aliases": [
        "oficial de operacoes",
        "saq",
        "ordens operacionais",
        "notas de servico",
        "orientacoes operacionais"
      ],
      "summary": "A pasta é o atalho cadastrado para ordens, notas e orientações do Oficial de Operações SAQ.",
      "steps": [
        "Abra a pasta com a conta autorizada.",
        "Confira os documentos aplicáveis ao serviço e sua data.",
        "Verifique retificações e orientações posteriores com o responsável."
      ],
      "limit": "Não leio o conteúdo desta pasta nem confirmo quais ordens estão vigentes.",
      "access": "Google Drive; acesso conforme permissões concedidas.",
      "evidence": "Descrição cadastrada na Central; conteúdo interno não consultado.",
      "faqs": [],
      "names": [
        "saq",
        "oficial de operacoes"
      ],
      "audience": "Oficial de Operações e demais militares autorizados pela unidade.",
      "reviewed": "2026-10-19",
      "reviewScope": "descricao_da_central",
      "requirements": [
        "Conta Google autorizada para esse arquivo ou pasta.",
        "Permissão concedida pelo responsável; a Central não concede acesso."
      ],
      "evidenceDetails": {
        "kind": "descricao_da_central",
        "date": "2026-10-19",
        "description": "Descrição cadastrada na Central; conteúdo interno não consultado.",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não leio o conteúdo desta pasta nem confirmo quais ordens estão vigentes.",
        "audience": "Oficial de Operações e demais militares autorizados pela unidade.",
        "permissions": "Google Drive; acesso conforme permissões concedidas. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Oficial de Operações · SAQ, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Se aparecer pedido de acesso no Google, confira se está usando a conta autorizada. Use a solicitação de permissão oferecida pelo Google ou contate o responsável pelo arquivo. Não torne o documento público para resolver o acesso.",
        "recovery": "O acesso depende da sua conta Google e da permissão do arquivo. Recupere a conta pelos canais do Google; se a conta já entra, solicite ao responsável apenas a permissão necessária."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Oficial de Operações · SAQ?"
        },
        {
          "intent": "access",
          "question": "Como acessar Oficial de Operações · SAQ?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Oficial de Operações · SAQ?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Oficial de Operações · SAQ"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Oficial de Operações · SAQ?"
        }
      ]
    },
    {
      "id": "forca",
      "match": "Mapa de Força GBMar",
      "title": "Mapa de Força · GBMar",
      "aliases": [
        "mapa de forca gbmar",
        "mapa de forca",
        "efetivo",
        "guarnicao",
        "permutas",
        "alteracoes",
        "posto ativo",
        "pronto",
        "escala do gbmar",
        "militares de servico"
      ],
      "summary": "A planilha do GBMar concentra escalas, efetivo, postos, viaturas, embarcações, permutas e registros diários.",
      "steps": [
        "Abra o Mapa de Força GBMar com a conta autorizada.",
        "Confira a aba, a data do serviço e a atualização do registro.",
        "Confirme divergências com o responsável antes de utilizar a informação."
      ],
      "limit": "Não consulto nem altero a planilha oficial. Não posso informar efetivo, nomes de serviço ou meios disponíveis em tempo real.",
      "access": "Google Sheets; acesso sujeito à autorização.",
      "evidence": "Descrição cadastrada na Central; conteúdo interno não consultado.",
      "faqs": [
        {
          "q": [
            "Qual a diferença entre os mapas de força?",
            "Mapa de força GBMar ou institucional?"
          ],
          "a": "O Mapa de Força GBMar é a planilha local da unidade. O Mapa de Força institucional é um sistema do CBMPE. São destinos distintos; confirme qual deles foi solicitado.",
          "id": "forca-1",
          "basis": "base_revisada"
        },
        {
          "q": [
            "Você pode editar o mapa de força?",
            "Atualize a planilha oficial"
          ],
          "a": "Não. Este assistente apenas orienta a consulta e não possui integração de escrita com a planilha oficial.",
          "id": "forca-2",
          "basis": "base_revisada"
        }
      ],
      "names": [
        "mapa de forca gbmar",
        "planilha do mapa de forca",
        "mapa de forca local"
      ],
      "audience": "Militares e responsáveis pelo serviço com permissão de consulta.",
      "reviewed": "2026-10-19",
      "reviewScope": "descricao_da_central",
      "requirements": [
        "Conta Google autorizada para esse arquivo ou pasta.",
        "Permissão concedida pelo responsável; a Central não concede acesso."
      ],
      "evidenceDetails": {
        "kind": "descricao_da_central",
        "date": "2026-10-19",
        "description": "Descrição cadastrada na Central; conteúdo interno não consultado.",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não tenho o efetivo atual nem os nomes de quem está de serviço. Consulte a data do serviço e o posto no Mapa de Força GBMar, com a conta autorizada.",
        "audience": "Militares e responsáveis pelo serviço com permissão de consulta.",
        "permissions": "Google Sheets; acesso sujeito à autorização. A Central e o assistente não concedem permissões.",
        "write": "Não altero a planilha oficial do Mapa de Força. O assistente apenas orienta a consulta; qualquer lançamento depende do responsável autorizado.",
        "trouble": "Se aparecer pedido de acesso no Google, confira se está usando a conta autorizada. Use a solicitação de permissão oferecida pelo Google ou contate o responsável pelo arquivo. Não torne o documento público para resolver o acesso.",
        "recovery": "O acesso depende da sua conta Google e da permissão do arquivo. Recupere a conta pelos canais do Google; se a conta já entra, solicite ao responsável apenas a permissão necessária."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Mapa de Força · GBMar?"
        },
        {
          "intent": "access",
          "question": "Como acessar Mapa de Força · GBMar?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Mapa de Força · GBMar?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Mapa de Força · GBMar"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Mapa de Força · GBMar?"
        }
      ]
    },
    {
      "id": "diretrizes",
      "match": "Diretrizes do serviço operacional",
      "title": "Diretrizes operacionais",
      "aliases": [
        "diretrizes operacionais",
        "procedimento operacional",
        "diretrizes do servico"
      ],
      "summary": "Há um espaço reservado para diretrizes do serviço operacional na Central.",
      "steps": [
        "Consulte o responsável pelo serviço.",
        "Solicite o documento oficial vigente.",
        "Verifique data, assinatura e eventuais atualizações."
      ],
      "limit": "O atalho ainda está marcado como “Em breve”; não há documento vinculado para leitura.",
      "access": "Consulte o endereço indicado. Algumas funções podem exigir identificação.",
      "evidence": "Descrição cadastrada na Central; conteúdo interno não consultado.",
      "faqs": [],
      "names": [
        "diretrizes operacionais",
        "diretrizes do servico"
      ],
      "audience": "Efetivo orientado pelo documento oficial do serviço.",
      "reviewed": "2026-10-19",
      "reviewScope": "sem_link",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Consulte o endereço indicado. Algumas funções podem exigir identificação."
      ],
      "evidenceDetails": {
        "kind": "sem_link",
        "date": "2026-10-19",
        "description": "Descrição cadastrada na Central; conteúdo interno não consultado.",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "O atalho ainda está marcado como “Em breve”; não há documento vinculado para leitura.",
        "audience": "Efetivo orientado pelo documento oficial do serviço.",
        "permissions": "Consulte o endereço indicado. Algumas funções podem exigir identificação. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Diretrizes operacionais, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "O atalho ainda não foi cadastrado. Consulte o responsável pela unidade para obter a fonte vigente."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Diretrizes operacionais?"
        },
        {
          "intent": "access",
          "question": "Como acessar Diretrizes operacionais?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Diretrizes operacionais?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Diretrizes operacionais"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Diretrizes operacionais?"
        }
      ]
    },
    {
      "id": "postos",
      "match": "Localização dos postos",
      "title": "Localização dos postos",
      "aliases": [
        "localizacao dos postos",
        "onde fica o posto",
        "endereco do posto",
        "posto 06",
        "acaiaca",
        "pina",
        "olinda",
        "boa viagem",
        "barra",
        "guarda vidas",
        "chegar ao posto"
      ],
      "summary": "O mapa de postos ajuda a localizar os pontos cadastrados do GBMar.",
      "steps": [
        "Abra o mapa de localização dos postos.",
        "Procure o posto ou a região desejada nos recursos disponíveis.",
        "Confira a referência geográfica e confirme localmente o funcionamento do posto."
      ],
      "limit": "A localização cadastrada não comprova que o posto esteja ativado ou guarnecido neste momento.",
      "access": "Consulta pública.",
      "evidence": "Descrição da Central; README do mapa alerta que cadastro não equivale a ativação.",
      "faqs": [],
      "names": [
        "localizacao dos postos",
        "mapa de postos"
      ],
      "audience": "Militares e público que procuram postos cadastrados.",
      "reviewed": "2026-10-19",
      "reviewScope": "documentacao_publica",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Consulta pública."
      ],
      "evidenceDetails": {
        "kind": "documentacao_publica",
        "date": "2026-10-19",
        "description": "Descrição da Central; README do mapa alerta que cadastro não equivale a ativação.",
        "contentRead": true,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não confirmo se um posto está ativado agora. O mapa informa localização cadastrada; a ativação diária deve ser conferida no Mapa de Força GBMar.",
        "audience": "Militares e público que procuram postos cadastrados.",
        "permissions": "Consulta pública. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Localização dos postos, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Orientação geral de acesso: confira o endereço e a conexão. Se o portal pedir autenticação, use somente sua conta autorizada. Persistindo a falha, procure o suporte responsável pelo serviço."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Localização dos postos?"
        },
        {
          "intent": "access",
          "question": "Como acessar Localização dos postos?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Localização dos postos?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Localização dos postos"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Localização dos postos?"
        }
      ],
      "evidenceURL": "https://github.com/jacilllenealves10-oss/mapa-gbmar/blob/main/README.md"
    },
    {
      "id": "materiais",
      "match": "Planilha de Materiais",
      "title": "Materiais · STSGT",
      "aliases": [
        "materiais",
        "material",
        "estoque",
        "inventario",
        "almoxarifado",
        "equipamentos",
        "nadadeiras",
        "boias"
      ],
      "summary": "A planilha de materiais é o atalho da STSGT para consulta dos registros de materiais.",
      "steps": [
        "Abra a planilha com sua conta autorizada.",
        "Localize o material e confira a unidade e a data do registro.",
        "Valide quantidade e disponibilidade com o responsável pelo controle."
      ],
      "limit": "Não leio o estoque atual nem registro entradas ou saídas.",
      "access": "Google Sheets; acesso sujeito à permissão.",
      "evidence": "Descrição cadastrada na Central; conteúdo interno não consultado.",
      "faqs": [],
      "names": [
        "planilha de materiais",
        "materiais da stsgt"
      ],
      "audience": "Responsáveis e usuários autorizados do controle de materiais.",
      "reviewed": "2026-10-19",
      "reviewScope": "descricao_da_central",
      "requirements": [
        "Conta Google autorizada para esse arquivo ou pasta.",
        "Permissão concedida pelo responsável; a Central não concede acesso."
      ],
      "evidenceDetails": {
        "kind": "descricao_da_central",
        "date": "2026-10-19",
        "description": "Descrição cadastrada na Central; conteúdo interno não consultado.",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não tenho quantidades disponíveis em estoque. Confira o item, a unidade de medida e a atualização na planilha de materiais.",
        "audience": "Responsáveis e usuários autorizados do controle de materiais.",
        "permissions": "Google Sheets; acesso sujeito à permissão. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Materiais · STSGT, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Se aparecer pedido de acesso no Google, confira se está usando a conta autorizada. Use a solicitação de permissão oferecida pelo Google ou contate o responsável pelo arquivo. Não torne o documento público para resolver o acesso.",
        "recovery": "O acesso depende da sua conta Google e da permissão do arquivo. Recupere a conta pelos canais do Google; se a conta já entra, solicite ao responsável apenas a permissão necessária."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Materiais · STSGT?"
        },
        {
          "intent": "access",
          "question": "Como acessar Materiais · STSGT?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Materiais · STSGT?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Materiais · STSGT"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Materiais · STSGT?"
        }
      ]
    },
    {
      "id": "prime",
      "match": "Link de Gestão de Frota",
      "title": "Prime Frota",
      "aliases": [
        "prime frota",
        "prime",
        "abastecimento",
        "combustivel",
        "gasolina",
        "diesel",
        "saldo",
        "creditos de combustivel",
        "cartao de abastecimento",
        "litros"
      ],
      "summary": "O Prime Frota é o destino da Central para gestão de veículos e abastecimento.",
      "steps": [
        "Abra o Prime Frota.",
        "Na área Empresa Cliente, preencha código do cliente, login e senha diretamente no portal.",
        "Após entrar, consulte os registros disponíveis ao seu perfil."
      ],
      "limit": "Não vejo saldos, cartões ou abastecimentos e não libero créditos.",
      "access": "O portal solicita código do cliente, login e senha.",
      "evidence": "Tela pública de acesso e recuperação do Prime consultada em 19/10/2026.",
      "faqs": [
        {
          "q": [
            "Esqueci minha senha do Prime",
            "Como recuperar acesso ao Prime?",
            "Prime bloqueado",
            "Prime primeira senha"
          ],
          "a": "Na tela do Prime Frota, use “Esqueci minha senha”. O portal solicita código do cliente, usuário e e-mail cadastrado, e envia as instruções por e-mail. Se o primeiro acesso não funcionar, procure o assessor do contrato. Não informe esses dados neste chat.",
          "id": "prime-1",
          "basis": "base_revisada"
        },
        {
          "q": [
            "Quais dados preciso para entrar no Prime?",
            "Como fazer login no Prime?"
          ],
          "a": "A área Empresa Cliente solicita código do cliente, login e senha. Preencha-os somente no portal. Este assistente não conhece suas credenciais.",
          "id": "prime-2",
          "basis": "base_revisada"
        }
      ],
      "names": [
        "prime",
        "prime frota"
      ],
      "audience": "Usuários autorizados da gestão de frota e abastecimento.",
      "reviewed": "2026-10-19",
      "reviewScope": "tela_publica",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "O portal solicita código do cliente, login e senha."
      ],
      "evidenceDetails": {
        "kind": "tela_publica",
        "date": "2026-10-19",
        "description": "Tela pública de acesso e recuperação do Prime consultada em 19/10/2026.",
        "contentRead": true,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não tenho leitura em tempo real do saldo ou dos abastecimentos. Abra o Prime Frota com o perfil autorizado e confira os registros do veículo ou cartão correto.",
        "audience": "Usuários autorizados da gestão de frota e abastecimento.",
        "permissions": "O portal solicita código do cliente, login e senha. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Prime Frota, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Confira os dados da área Empresa Cliente no próprio Prime Frota. Para senha esquecida ou usuário bloqueado, a tela oferece “Esqueci minha senha”. Se isso não resolver, procure o assessor do contrato, conforme orientação pública do portal.",
        "recovery": "Use “Esqueci minha senha” na tela do Prime Frota. Preencha código do cliente, usuário e e-mail cadastrado diretamente no portal. As instruções são enviadas ao e-mail validado pelo sistema. Se houver dificuldade, o portal orienta procurar o assessor do contrato.",
        "recoveryMissing": "Continuamos na recuperação do Prime Frota.\n\nVerificação geral: confira spam/lixo eletrônico e se você está consultando o e-mail cadastrado. O Prime informa que valida esse endereço antes de enviar as instruções. Se a mensagem não chegar ou o cadastro estiver incorreto, procure o assessor do contrato. A fonte consultada não informa prazo de entrega; não posso prometer um tempo de espera.",
        "support": "A tela pública do Prime orienta procurar o assessor do contrato. Não há nome ou contato desse assessor cadastrado nesta base."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Prime Frota?"
        },
        {
          "intent": "access",
          "question": "Como acessar Prime Frota?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Prime Frota?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Prime Frota"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Prime Frota?"
        },
        {
          "intent": "recovery",
          "question": "Esqueci minha senha do Prime"
        },
        {
          "intent": "recoveryMissing",
          "question": "O e-mail de recuperação do Prime não chegou"
        }
      ]
    },
    {
      "id": "stsgt",
      "match": "Site da STSGT",
      "title": "Site · STSGT",
      "aliases": [
        "site da stsgt",
        "stsgt",
        "transportes",
        "servicos gerais",
        "telematica",
        "gestao da secao"
      ],
      "summary": "A Central apresenta o site da STSGT como projeto em desenvolvimento, com previsão cadastrada de conclusão em 15/11/2026.",
      "steps": [
        "Abra o site da STSGT pelo atalho.",
        "Confira os recursos efetivamente disponíveis.",
        "Para registros oficiais, utilize a fonte indicada pela unidade."
      ],
      "limit": "A previsão cadastrada não garante entrega nem funcionamento de todos os recursos. Não leio o banco desse site.",
      "access": "A disponibilidade depende do site de destino.",
      "evidence": "Descrição cadastrada na Central; conteúdo interno não consultado.",
      "faqs": [],
      "names": [
        "site da stsgt",
        "site stsgt"
      ],
      "audience": "Usuários dos serviços da STSGT conforme os recursos publicados.",
      "reviewed": "2026-10-19",
      "reviewScope": "descricao_da_central",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "A disponibilidade depende do site de destino."
      ],
      "evidenceDetails": {
        "kind": "descricao_da_central",
        "date": "2026-10-19",
        "description": "Descrição cadastrada na Central; conteúdo interno não consultado.",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "A previsão cadastrada não garante entrega nem funcionamento de todos os recursos. Não leio o banco desse site.",
        "audience": "Usuários dos serviços da STSGT conforme os recursos publicados.",
        "permissions": "A disponibilidade depende do site de destino. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Site · STSGT, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Orientação geral de acesso: confira o endereço e a conexão. Se o portal pedir autenticação, use somente sua conta autorizada. Persistindo a falha, procure o suporte responsável pelo serviço."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Site · STSGT?"
        },
        {
          "intent": "access",
          "question": "Como acessar Site · STSGT?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Site · STSGT?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Site · STSGT"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Site · STSGT?"
        }
      ]
    },
    {
      "id": "smo",
      "match": "Planilha da STSGT e SMO",
      "title": "Planilha · STSGT e SMO",
      "aliases": [
        "smo",
        "planilha stsgt",
        "planilha da stsgt e smo",
        "aba stsgt"
      ],
      "summary": "O atalho abre uma aba específica da planilha utilizada pela STSGT e SMO.",
      "steps": [
        "Abra a aba pelo link da Central.",
        "Confira o nome da aba e o período dos registros.",
        "Se não tiver acesso, solicite permissão ao responsável."
      ],
      "limit": "Não leio as células nem confirmo registros dessa aba.",
      "access": "Google Sheets; permissão necessária.",
      "evidence": "Descrição cadastrada na Central; conteúdo interno não consultado.",
      "faqs": [],
      "names": [
        "smo",
        "planilha stsgt",
        "planilha da stsgt e smo"
      ],
      "audience": "Militares autorizados a consultar os controles da STSGT e SMO.",
      "reviewed": "2026-10-19",
      "reviewScope": "descricao_da_central",
      "requirements": [
        "Conta Google autorizada para esse arquivo ou pasta.",
        "Permissão concedida pelo responsável; a Central não concede acesso."
      ],
      "evidenceDetails": {
        "kind": "descricao_da_central",
        "date": "2026-10-19",
        "description": "Descrição cadastrada na Central; conteúdo interno não consultado.",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não leio as células nem confirmo registros dessa aba.",
        "audience": "Militares autorizados a consultar os controles da STSGT e SMO.",
        "permissions": "Google Sheets; permissão necessária. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Planilha · STSGT e SMO, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Se aparecer pedido de acesso no Google, confira se está usando a conta autorizada. Use a solicitação de permissão oferecida pelo Google ou contate o responsável pelo arquivo. Não torne o documento público para resolver o acesso.",
        "recovery": "O acesso depende da sua conta Google e da permissão do arquivo. Recupere a conta pelos canais do Google; se a conta já entra, solicite ao responsável apenas a permissão necessária."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Planilha · STSGT e SMO?"
        },
        {
          "intent": "access",
          "question": "Como acessar Planilha · STSGT e SMO?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Planilha · STSGT e SMO?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Planilha · STSGT e SMO"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Planilha · STSGT e SMO?"
        }
      ]
    },
    {
      "id": "frota",
      "match": "Controle de viaturas",
      "title": "Viaturas e embarcações",
      "aliases": [
        "viaturas",
        "viatura",
        "embarcacoes",
        "embarcacao",
        "msa",
        "msas",
        "bis",
        "motor",
        "motores",
        "frota",
        "baixada",
        "pane",
        "defeito",
        "potencia"
      ],
      "summary": "O atalho específico de controle de viaturas e embarcações ainda está em preparação. Para consulta do serviço, use o Mapa de Força GBMar; para controles da seção, a planilha STSGT/SMO.",
      "steps": [
        "Abra a fonte de controle indicada pela unidade.",
        "Localize a identificação da viatura ou embarcação e a data do registro.",
        "Confirme a situação com a STSGT antes do emprego."
      ],
      "limit": "Não posso confirmar funcionamento, baixas ou manutenção de um meio específico.",
      "access": "Consulte o endereço indicado. Algumas funções podem exigir identificação.",
      "evidence": "Descrição cadastrada na Central; conteúdo interno não consultado.",
      "faqs": [
        {
          "q": [
            "A MSA está funcionando?",
            "Qual a situação de uma viatura?"
          ],
          "a": "A situação deve ser conferida no registro atualizado da unidade e com a STSGT. Não tenho telemetria nem leitura em tempo real dos controles.",
          "id": "frota-1",
          "basis": "base_revisada"
        }
      ],
      "names": [
        "controle de viaturas",
        "viaturas e embarcacoes"
      ],
      "audience": "Responsáveis pela consulta e pelo controle dos meios da unidade.",
      "reviewed": "2026-10-19",
      "reviewScope": "sem_link",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Consulte o endereço indicado. Algumas funções podem exigir identificação."
      ],
      "evidenceDetails": {
        "kind": "sem_link",
        "date": "2026-10-19",
        "description": "Descrição cadastrada na Central; conteúdo interno não consultado.",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não confirmo a situação atual de viatura, MSA ou BIS. Confira a identificação do meio e a data do registro no Mapa de Força GBMar e nos controles da STSGT/SMO.",
        "audience": "Responsáveis pela consulta e pelo controle dos meios da unidade.",
        "permissions": "Consulte o endereço indicado. Algumas funções podem exigir identificação. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Viaturas e embarcações, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "O atalho ainda não foi cadastrado. Consulte o responsável pela unidade para obter a fonte vigente."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Viaturas e embarcações?"
        },
        {
          "intent": "access",
          "question": "Como acessar Viaturas e embarcações?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Viaturas e embarcações?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Viaturas e embarcações"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Viaturas e embarcações?"
        }
      ]
    },
    {
      "id": "combustivel",
      "match": "Abastecimento e combustível",
      "title": "Controle de combustível",
      "aliases": [
        "solicitacao de credito",
        "incremento de saldo",
        "controle de combustivel"
      ],
      "summary": "O espaço para controle de combustível ainda está “Em breve”. O acesso ativo para gestão de abastecimento é o Prime Frota.",
      "steps": [
        "Consulte o saldo no Prime Frota com perfil autorizado.",
        "Registre a necessidade conforme a rotina da unidade.",
        "Confirme com a STSGT o procedimento aplicável à solicitação."
      ],
      "limit": "Não aprovo nem efetuo transferências ou incrementos de crédito.",
      "access": "Consulte o endereço indicado. Algumas funções podem exigir identificação.",
      "evidence": "Descrição cadastrada na Central; conteúdo interno não consultado.",
      "faqs": [],
      "names": [
        "controle de combustivel",
        "incremento de saldo"
      ],
      "audience": "Responsáveis pelo controle e solicitação de combustível.",
      "reviewed": "2026-10-19",
      "reviewScope": "sem_link",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Consulte o endereço indicado. Algumas funções podem exigir identificação."
      ],
      "evidenceDetails": {
        "kind": "sem_link",
        "date": "2026-10-19",
        "description": "Descrição cadastrada na Central; conteúdo interno não consultado.",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não aprovo nem efetuo transferências ou incrementos de crédito.",
        "audience": "Responsáveis pelo controle e solicitação de combustível.",
        "permissions": "Consulte o endereço indicado. Algumas funções podem exigir identificação. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Controle de combustível, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "O atalho ainda não foi cadastrado. Consulte o responsável pela unidade para obter a fonte vigente."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Controle de combustível?"
        },
        {
          "intent": "access",
          "question": "Como acessar Controle de combustível?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Controle de combustível?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Controle de combustível"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Controle de combustível?"
        }
      ]
    },
    {
      "id": "manutencao",
      "match": "Manutenção e ordens",
      "title": "Manutenção e ordens de serviço",
      "aliases": [
        "manutencao",
        "oficina",
        "reparo",
        "revisao",
        "ordem de servico",
        "os de manutencao"
      ],
      "summary": "A Central reservou um atalho para manutenção e ordens de serviço, ainda sem destino ativo.",
      "steps": [
        "Consulte o controle da STSGT/SMO.",
        "Verifique a identificação do meio, o registro do problema e a ordem de serviço existente.",
        "Confirme o andamento com o setor responsável."
      ],
      "limit": "Não diagnostico falhas nem abro ordens de serviço. O registro depende do procedimento da unidade.",
      "access": "Consulte o endereço indicado. Algumas funções podem exigir identificação.",
      "evidence": "Descrição cadastrada na Central; conteúdo interno não consultado.",
      "faqs": [],
      "names": [
        "manutencao",
        "ordens de servico"
      ],
      "audience": "Responsáveis pelo acompanhamento de manutenção.",
      "reviewed": "2026-10-19",
      "reviewScope": "sem_link",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Consulte o endereço indicado. Algumas funções podem exigir identificação."
      ],
      "evidenceDetails": {
        "kind": "sem_link",
        "date": "2026-10-19",
        "description": "Descrição cadastrada na Central; conteúdo interno não consultado.",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não diagnostico falhas nem abro ordens de serviço. O registro depende do procedimento da unidade.",
        "audience": "Responsáveis pelo acompanhamento de manutenção.",
        "permissions": "Consulte o endereço indicado. Algumas funções podem exigir identificação. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Manutenção e ordens de serviço, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "O atalho ainda não foi cadastrado. Consulte o responsável pela unidade para obter a fonte vigente."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Manutenção e ordens de serviço?"
        },
        {
          "intent": "access",
          "question": "Como acessar Manutenção e ordens de serviço?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Manutenção e ordens de serviço?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Manutenção e ordens de serviço"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Manutenção e ordens de serviço?"
        }
      ]
    },
    {
      "id": "sigpad",
      "match": "SIGPAD",
      "title": "SIGPAD",
      "aliases": [
        "sigpad",
        "sindicancia",
        "disciplinar",
        "pad",
        "procedimento administrativo",
        "corregedoria"
      ],
      "summary": "SIGPAD significa Sistema Integrado de Gestão de Processos Administrativos. O portal apresenta acesso restrito.",
      "steps": [
        "Abra o SIGPAD.",
        "Utilize seu acesso autorizado diretamente no sistema.",
        "Em caso de dificuldade, use o suporte publicado na tela de entrada."
      ],
      "limit": "Não consulto procedimentos, prazos ou conteúdo processual e não interpreto normas não fornecidas.",
      "access": "Acesso restrito.",
      "evidence": "Tela pública do SIGPAD consultada em 19/10/2026.",
      "faqs": [
        {
          "q": [
            "Quem dá suporte ao SIGPAD?",
            "Não consigo entrar no SIGPAD"
          ],
          "a": "A tela pública informa o e-mail cgdti@corregedoria.sds.pe.gov.br e o telefone (81) 3184-2741 para dúvidas ou dificuldades de acesso. Confira esses canais no próprio portal antes de contatar.",
          "id": "sigpad-1",
          "basis": "base_revisada"
        }
      ],
      "names": [
        "sigpad"
      ],
      "audience": "Usuários habilitados para os procedimentos administrativos no sistema.",
      "reviewed": "2026-10-19",
      "reviewScope": "tela_publica",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Acesso restrito."
      ],
      "evidenceDetails": {
        "kind": "tela_publica",
        "date": "2026-10-19",
        "description": "Tela pública do SIGPAD consultada em 19/10/2026.",
        "contentRead": true,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não consulto procedimentos, prazos ou conteúdo processual e não interpreto normas não fornecidas.",
        "audience": "Usuários habilitados para os procedimentos administrativos no sistema.",
        "permissions": "Acesso restrito. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera SIGPAD, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "A tela pública do SIGPAD informa cgdti@corregedoria.sds.pe.gov.br e (81) 3184-2741 para dúvidas ou dificuldades de acesso. Confira os canais no portal antes de contatar.",
        "support": "A tela pública do SIGPAD informa cgdti@corregedoria.sds.pe.gov.br e (81) 3184-2741 para dúvidas ou dificuldades de acesso. Confira os canais no portal antes de contatar."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve SIGPAD?"
        },
        {
          "intent": "access",
          "question": "Como acessar SIGPAD?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar SIGPAD?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir SIGPAD"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre SIGPAD?"
        }
      ]
    },
    {
      "id": "sogo",
      "match": "E-mail funcional",
      "title": "E-mail funcional · SOGo",
      "aliases": [
        "sogo",
        "email",
        "e mail",
        "correio eletronico",
        "caixa de entrada",
        "email funcional"
      ],
      "summary": "SOGo PE é o atalho de acesso ao correio eletrônico institucional do Governo de Pernambuco.",
      "steps": [
        "Abra o SOGo PE.",
        "Entre diretamente no portal com a conta institucional autorizada.",
        "Se o acesso falhar, procure o suporte institucional responsável pela conta."
      ],
      "limit": "Não leio nem envio mensagens, e não recupero a sua senha.",
      "access": "Credenciais institucionais; conteúdo interno não consultado.",
      "evidence": "Descrição cadastrada na Central; conteúdo interno não consultado.",
      "faqs": [],
      "names": [
        "sogo",
        "email funcional",
        "correio institucional"
      ],
      "audience": "Titulares de contas de correio eletrônico institucional.",
      "reviewed": "2026-10-19",
      "reviewScope": "descricao_da_central",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Credenciais institucionais; conteúdo interno não consultado."
      ],
      "evidenceDetails": {
        "kind": "descricao_da_central",
        "date": "2026-10-19",
        "description": "Descrição cadastrada na Central; conteúdo interno não consultado.",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não leio nem envio mensagens, e não recupero a sua senha.",
        "audience": "Titulares de contas de correio eletrônico institucional.",
        "permissions": "Credenciais institucionais; conteúdo interno não consultado. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera E-mail funcional · SOGo, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Orientação geral de acesso: confira o endereço e a conexão. Se o portal pedir autenticação, use somente sua conta autorizada. Persistindo a falha, procure o suporte responsável pelo serviço.",
        "recovery": "Não foi possível consultar a página externa do SOGo nesta revisão. Não há um procedimento específico de recuperação verificado nesta base. Procure o suporte institucional responsável pela sua conta."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve E-mail funcional · SOGo?"
        },
        {
          "intent": "access",
          "question": "Como acessar E-mail funcional · SOGo?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar E-mail funcional · SOGo?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir E-mail funcional · SOGo"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre E-mail funcional · SOGo?"
        }
      ]
    },
    {
      "id": "sei",
      "match": "SEI Pernambuco",
      "title": "SEI Pernambuco",
      "aliases": [
        "sei",
        "processo sei",
        "processos eletronicos",
        "documentos eletronicos",
        "oficio",
        "despacho",
        "assinatura",
        "protocolo"
      ],
      "summary": "O SEI Pernambuco é o destino da Central para processos e documentos eletrônicos.",
      "steps": [
        "Abra o SEI Pernambuco.",
        "Preencha usuário e senha no portal e siga a autenticação solicitada.",
        "Consulte somente processos e documentos aos quais seu perfil tenha acesso."
      ],
      "limit": "Não leio processos restritos, não protocolo documentos nem realizo assinaturas.",
      "access": "Tela de acesso com usuário, senha e recurso de autenticação em dois fatores.",
      "evidence": "Tela pública de entrada do SEI/GOVPE consultada em 19/10/2026.",
      "faqs": [
        {
          "q": [
            "O SEI está fora do ar?",
            "Posso usar a contingência antiga?"
          ],
          "a": "Não verifico indisponibilidade em tempo real. A pasta de contingência da Central menciona 09–12/10/2026; confirme a orientação vigente com a unidade antes de reutilizá-la.",
          "id": "sei-1",
          "basis": "base_revisada"
        }
      ],
      "names": [
        "sei",
        "sei pernambuco"
      ],
      "audience": "Usuários autorizados de processos e documentos eletrônicos.",
      "reviewed": "2026-10-19",
      "reviewScope": "tela_publica",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Tela de acesso com usuário, senha e recurso de autenticação em dois fatores."
      ],
      "evidenceDetails": {
        "kind": "tela_publica",
        "date": "2026-10-19",
        "description": "Tela pública de entrada do SEI/GOVPE consultada em 19/10/2026.",
        "contentRead": true,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não leio processos restritos, não protocolo documentos nem realizo assinaturas.",
        "audience": "Usuários autorizados de processos e documentos eletrônicos.",
        "permissions": "Tela de acesso com usuário, senha e recurso de autenticação em dois fatores. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera SEI Pernambuco, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Orientação geral de acesso: confira o endereço e a conexão. Se o portal pedir autenticação, use somente sua conta autorizada. Persistindo a falha, procure o suporte responsável pelo serviço.",
        "recovery": "A revisão confirmou a tela de entrada do SEI/GOVPE, mas não confirmou um procedimento de recuperação. Consulte o suporte institucional do SEI. Não tenho sua senha nem posso redefini-la."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve SEI Pernambuco?"
        },
        {
          "intent": "access",
          "question": "Como acessar SEI Pernambuco?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar SEI Pernambuco?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir SEI Pernambuco"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre SEI Pernambuco?"
        }
      ]
    },
    {
      "id": "bge",
      "match": "Boletim Geral",
      "title": "Boletim Geral Eletrônico",
      "aliases": [
        "bge",
        "bges",
        "boletim",
        "boletins",
        "portaria",
        "portarias",
        "publicacoes",
        "boletim geral eletronico"
      ],
      "summary": "O BGE é o atalho para consulta aos boletins do CBMPE.",
      "steps": [
        "Abra o BGE e autentique-se no portal.",
        "Localize a edição e confira número, data e publicação completa.",
        "Verifique eventuais retificações ou atos posteriores antes de usar a informação."
      ],
      "limit": "Não leio boletins restritos nem confirmo a publicação mais recente. Você pode colar um trecho autorizado na área Ler texto para um resumo local.",
      "access": "Tela de acesso com login, senha e verificação por caracteres.",
      "evidence": "Tela pública do BGE consultada em 19/10/2026.",
      "faqs": [],
      "names": [
        "bge",
        "bges",
        "boletim geral eletronico"
      ],
      "audience": "Militares e demais usuários habilitados à consulta dos boletins.",
      "reviewed": "2026-10-19",
      "reviewScope": "tela_publica",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Tela de acesso com login, senha e verificação por caracteres."
      ],
      "evidenceDetails": {
        "kind": "tela_publica",
        "date": "2026-10-19",
        "description": "Tela pública do BGE consultada em 19/10/2026.",
        "contentRead": true,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não sei qual é o último boletim nem quais atos foram publicados hoje. Consulte a edição e eventuais retificações diretamente no BGE.",
        "audience": "Militares e demais usuários habilitados à consulta dos boletins.",
        "permissions": "Tela de acesso com login, senha e verificação por caracteres. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Boletim Geral Eletrônico, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Orientação geral de acesso: confira o endereço e a conexão. Se o portal pedir autenticação, use somente sua conta autorizada. Persistindo a falha, procure o suporte responsável pelo serviço.",
        "recovery": "A tela pública do BGE oferece “Esqueci minha senha”. Use essa opção no próprio portal e siga as instruções exibidas. A base não contém as etapas internas da recuperação."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Boletim Geral Eletrônico?"
        },
        {
          "intent": "access",
          "question": "Como acessar Boletim Geral Eletrônico?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Boletim Geral Eletrônico?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Boletim Geral Eletrônico"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Boletim Geral Eletrônico?"
        }
      ]
    },
    {
      "id": "nga",
      "match": "Normas Gerais",
      "title": "Normas Gerais de Ação",
      "aliases": [
        "nga",
        "normas gerais de acao",
        "competencias",
        "regulamento interno"
      ],
      "summary": "A Central tem um espaço para Normas Gerais de Ação, ainda sem link ativo.",
      "steps": [
        "Solicite a versão vigente ao setor responsável.",
        "Confira aprovação, data e eventuais alterações.",
        "Use o documento oficial para verificar competências e procedimentos."
      ],
      "limit": "Não existe texto de NGA carregado nesta base. Não atribuo competências ou obrigações sem fonte.",
      "access": "Consulte o endereço indicado. Algumas funções podem exigir identificação.",
      "evidence": "Descrição cadastrada na Central; conteúdo interno não consultado.",
      "faqs": [],
      "names": [
        "nga",
        "normas gerais de acao"
      ],
      "audience": "Militares que necessitam verificar procedimentos e competências da unidade.",
      "reviewed": "2026-10-19",
      "reviewScope": "sem_link",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Consulte o endereço indicado. Algumas funções podem exigir identificação."
      ],
      "evidenceDetails": {
        "kind": "sem_link",
        "date": "2026-10-19",
        "description": "Descrição cadastrada na Central; conteúdo interno não consultado.",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não existe texto de NGA carregado nesta base. Não atribuo competências ou obrigações sem fonte.",
        "audience": "Militares que necessitam verificar procedimentos e competências da unidade.",
        "permissions": "Consulte o endereço indicado. Algumas funções podem exigir identificação. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Normas Gerais de Ação, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "O atalho ainda não foi cadastrado. Consulte o responsável pela unidade para obter a fonte vigente."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Normas Gerais de Ação?"
        },
        {
          "intent": "access",
          "question": "Como acessar Normas Gerais de Ação?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Normas Gerais de Ação?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Normas Gerais de Ação"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Normas Gerais de Ação?"
        }
      ]
    },
    {
      "id": "contatos",
      "match": "Contatos institucionais",
      "title": "Contatos institucionais",
      "aliases": [
        "contatos",
        "telefone",
        "ramal",
        "contato institucional",
        "email do setor"
      ],
      "summary": "A seção de contatos institucionais está prevista, mas ainda não tem lista vinculada.",
      "steps": [
        "Identifique o setor procurado.",
        "Consulte o canal institucional publicado pelo órgão.",
        "Confirme que o contato é atual antes de enviar informações."
      ],
      "limit": "Não invento nomes, e-mails ou telefones de setores não cadastrados.",
      "access": "Consulte o endereço indicado. Algumas funções podem exigir identificação.",
      "evidence": "Descrição cadastrada na Central; conteúdo interno não consultado.",
      "faqs": [],
      "names": [
        "contatos institucionais"
      ],
      "audience": "Pessoas que precisam localizar o canal oficial de um setor.",
      "reviewed": "2026-10-19",
      "reviewScope": "sem_link",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Consulte o endereço indicado. Algumas funções podem exigir identificação."
      ],
      "evidenceDetails": {
        "kind": "sem_link",
        "date": "2026-10-19",
        "description": "Descrição cadastrada na Central; conteúdo interno não consultado.",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não invento nomes, e-mails ou telefones de setores não cadastrados.",
        "audience": "Pessoas que precisam localizar o canal oficial de um setor.",
        "permissions": "Consulte o endereço indicado. Algumas funções podem exigir identificação. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Contatos institucionais, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "O atalho ainda não foi cadastrado. Consulte o responsável pela unidade para obter a fonte vigente."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Contatos institucionais?"
        },
        {
          "intent": "access",
          "question": "Como acessar Contatos institucionais?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Contatos institucionais?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Contatos institucionais"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Contatos institucionais?"
        }
      ]
    },
    {
      "id": "intranet",
      "match": "Intranet CBMPE",
      "title": "Intranet CBMPE",
      "aliases": [
        "intranet",
        "portal interno",
        "sistemas corporativos"
      ],
      "summary": "A Intranet CBMPE é o portal interno de acesso a sistemas institucionais.",
      "steps": [
        "Abra a Intranet.",
        "Aguarde o carregamento da aplicação e autentique-se, se solicitado.",
        "Escolha o sistema autorizado para seu perfil."
      ],
      "limit": "A IA não concede permissões nem acessa os serviços internos.",
      "access": "Aplicação dependente de JavaScript; serviços podem exigir credenciais.",
      "evidence": "Página pública consultada; conteúdo exige JavaScript.",
      "faqs": [],
      "names": [
        "intranet"
      ],
      "audience": "Usuários autorizados dos sistemas internos do CBMPE.",
      "reviewed": "2026-10-19",
      "reviewScope": "aplicacao_nao_lida",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Aplicação dependente de JavaScript; serviços podem exigir credenciais."
      ],
      "evidenceDetails": {
        "kind": "aplicacao_nao_lida",
        "date": "2026-10-19",
        "description": "Página pública consultada; conteúdo exige JavaScript.",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "A IA não concede permissões nem acessa os serviços internos.",
        "audience": "Usuários autorizados dos sistemas internos do CBMPE.",
        "permissions": "Aplicação dependente de JavaScript; serviços podem exigir credenciais. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Intranet CBMPE, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Orientação geral de acesso: confira o endereço e a conexão. Se o portal pedir autenticação, use somente sua conta autorizada. Persistindo a falha, procure o suporte responsável pelo serviço."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Intranet CBMPE?"
        },
        {
          "intent": "access",
          "question": "Como acessar Intranet CBMPE?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Intranet CBMPE?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Intranet CBMPE"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Intranet CBMPE?"
        }
      ]
    },
    {
      "id": "institucional",
      "match": "Mapa de Força institucional",
      "title": "Mapa de Força · Institucional",
      "aliases": [
        "mapa de forca institucional",
        "mapa de forca cbmpe",
        "sistema de efetivo",
        "meios do cbmpe"
      ],
      "summary": "É o sistema institucional de efetivo e meios do CBMPE, distinto da planilha local do GBMar.",
      "steps": [
        "Abra o Mapa de Força institucional.",
        "Acesse com seu perfil institucional.",
        "Confira a unidade, a data e os registros disponíveis."
      ],
      "limit": "Não consulto os registros desse sistema nem sincronizo os dois mapas de força.",
      "access": "Aplicação dependente de JavaScript; acesso institucional.",
      "evidence": "Descrição da Central; página externa exige JavaScript.",
      "faqs": [],
      "names": [
        "mapa de forca institucional",
        "mapa de forca cbmpe",
        "sistema de efetivo"
      ],
      "audience": "Usuários institucionais habilitados para os registros de efetivo e meios.",
      "reviewed": "2026-10-19",
      "reviewScope": "aplicacao_nao_lida",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Aplicação dependente de JavaScript; acesso institucional."
      ],
      "evidenceDetails": {
        "kind": "aplicacao_nao_lida",
        "date": "2026-10-19",
        "description": "Descrição da Central; página externa exige JavaScript.",
        "contentRead": false,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não consulto os registros desse sistema nem sincronizo os dois mapas de força.",
        "audience": "Usuários institucionais habilitados para os registros de efetivo e meios.",
        "permissions": "Aplicação dependente de JavaScript; acesso institucional. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Mapa de Força · Institucional, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Orientação geral de acesso: confira o endereço e a conexão. Se o portal pedir autenticação, use somente sua conta autorizada. Persistindo a falha, procure o suporte responsável pelo serviço."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Mapa de Força · Institucional?"
        },
        {
          "intent": "access",
          "question": "Como acessar Mapa de Força · Institucional?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Mapa de Força · Institucional?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Mapa de Força · Institucional"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Mapa de Força · Institucional?"
        }
      ]
    },
    {
      "id": "ese",
      "match": "Escala de Serviço",
      "title": "Escala de Serviço Eletrônica",
      "aliases": [
        "ese",
        "escala",
        "escalas",
        "plantao",
        "turno",
        "escala de servico eletronica",
        "minha escala"
      ],
      "summary": "A ESE é o destino institucional para a Escala de Serviço Eletrônica do CBMPE.",
      "steps": [
        "Abra a ESE.",
        "Informe seu acesso no portal e complete a verificação solicitada.",
        "Confira o período e a escala disponíveis ao seu perfil."
      ],
      "limit": "Não sei quando você está escalado nem realizo trocas ou permutas.",
      "access": "Tela de entrada com login, senha e verificação por caracteres.",
      "evidence": "Tela pública ESE-CBMPE consultada em 19/10/2026.",
      "faqs": [],
      "names": [
        "ese",
        "escala de servico eletronica"
      ],
      "audience": "Militares e usuários habilitados a consultar escalas.",
      "reviewed": "2026-10-19",
      "reviewScope": "tela_publica",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Tela de entrada com login, senha e verificação por caracteres."
      ],
      "evidenceDetails": {
        "kind": "tela_publica",
        "date": "2026-10-19",
        "description": "Tela pública ESE-CBMPE consultada em 19/10/2026.",
        "contentRead": true,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não tenho sua escala atual. Abra a ESE e confira o período no seu perfil. Para o serviço local do GBMar, confirme também a orientação da unidade.",
        "audience": "Militares e usuários habilitados a consultar escalas.",
        "permissions": "Tela de entrada com login, senha e verificação por caracteres. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Escala de Serviço Eletrônica, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Orientação geral de acesso: confira o endereço e a conexão. Se o portal pedir autenticação, use somente sua conta autorizada. Persistindo a falha, procure o suporte responsável pelo serviço."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Escala de Serviço Eletrônica?"
        },
        {
          "intent": "access",
          "question": "Como acessar Escala de Serviço Eletrônica?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Escala de Serviço Eletrônica?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Escala de Serviço Eletrônica"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Escala de Serviço Eletrônica?"
        }
      ]
    },
    {
      "id": "sca",
      "match": "Sistema de Controle",
      "title": "Sistema de Controle de Acesso",
      "aliases": [
        "sca",
        "controle de acesso",
        "permissoes institucionais"
      ],
      "summary": "A Central identifica o SCA como Sistema de Controle de Acesso do CBMPE.",
      "steps": [
        "Abra o SCA.",
        "Use a conta institucional diretamente no portal.",
        "Se faltar permissão, procure o administrador responsável pelo seu acesso."
      ],
      "limit": "O assistente não cria contas, concede permissões ou altera credenciais.",
      "access": "Tela de entrada com login e senha.",
      "evidence": "Descrição da Central e tela pública SCA consultada em 19/10/2026.",
      "faqs": [],
      "names": [
        "sca",
        "controle de acesso"
      ],
      "audience": "Usuários institucionais com acesso ao SCA.",
      "reviewed": "2026-10-19",
      "reviewScope": "tela_publica",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Tela de entrada com login e senha."
      ],
      "evidenceDetails": {
        "kind": "tela_publica",
        "date": "2026-10-19",
        "description": "Descrição da Central e tela pública SCA consultada em 19/10/2026.",
        "contentRead": true,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "O assistente não cria contas, concede permissões ou altera credenciais.",
        "audience": "Usuários institucionais com acesso ao SCA.",
        "permissions": "Tela de entrada com login e senha. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Sistema de Controle de Acesso, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Orientação geral de acesso: confira o endereço e a conexão. Se o portal pedir autenticação, use somente sua conta autorizada. Persistindo a falha, procure o suporte responsável pelo serviço.",
        "recovery": "A tela pública do SCA oferece “Esqueci minha senha”. Inicie a recuperação no portal e siga as instruções exibidas. As etapas posteriores não foram consultadas."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Sistema de Controle de Acesso?"
        },
        {
          "intent": "access",
          "question": "Como acessar Sistema de Controle de Acesso?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Sistema de Controle de Acesso?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Sistema de Controle de Acesso"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Sistema de Controle de Acesso?"
        }
      ]
    },
    {
      "id": "sac",
      "match": "Portal de Atendimento",
      "title": "Atendimento ao público · CBMPE",
      "aliases": [
        "sac",
        "saconline",
        "atendimento",
        "publico",
        "avcb",
        "vistoria",
        "atestado",
        "projeto de seguranca",
        "certidao",
        "taxa de bombeiros"
      ],
      "summary": "O portal oferece atalhos de projetos de segurança, vistorias, consulta e validação de AVCB, fiscalização e certidão de ocorrências.",
      "steps": [
        "Abra o Portal de Atendimento.",
        "Escolha o serviço correspondente à sua necessidade.",
        "Confira as exigências atuais na página do serviço antes de enviar documentos."
      ],
      "limit": "Não emito documentos nem confirmo requisitos, taxas ou prazos atuais por este chat.",
      "access": "Página pública; cada serviço pode exigir cadastro.",
      "evidence": "Portal público SACBM/Online consultado em 19/10/2026.",
      "faqs": [
        {
          "q": [
            "Como validar AVCB?",
            "Verificar autenticidade do AVCB"
          ],
          "a": "No Portal de Atendimento, selecione a opção de validação de AVCB (autenticidade). Informe os dados somente na página oficial e confira o resultado apresentado.",
          "id": "sac-1",
          "basis": "base_revisada"
        },
        {
          "q": [
            "Onde pedir certidão de ocorrência?"
          ],
          "a": "O Portal de Atendimento lista “Emissão de Certidão de Ocorrências”. Abra esse serviço e verifique os requisitos atuais no destino indicado.",
          "id": "sac-2",
          "basis": "base_revisada"
        }
      ],
      "names": [
        "sac",
        "saconline",
        "avcb",
        "portal de atendimento"
      ],
      "audience": "Cidadãos, empresas e responsáveis que procuram os serviços públicos do CBMPE.",
      "reviewed": "2026-10-19",
      "reviewScope": "pagina_publica",
      "requirements": [
        "Abra o endereço cadastrado na Central.",
        "Página pública; cada serviço pode exigir cadastro."
      ],
      "evidenceDetails": {
        "kind": "pagina_publica",
        "date": "2026-10-19",
        "description": "Portal público SACBM/Online consultado em 19/10/2026.",
        "contentRead": true,
        "authenticatedContentRead": false
      },
      "replies": {
        "current": "Não emito documentos nem confirmo requisitos, taxas ou prazos atuais por este chat.",
        "audience": "Cidadãos, empresas e responsáveis que procuram os serviços públicos do CBMPE.",
        "permissions": "Página pública; cada serviço pode exigir cadastro. A Central e o assistente não concedem permissões.",
        "write": "Este assistente não altera Atendimento ao público · CBMPE, não envia solicitações e não opera contas. Utilize o serviço oficial com o perfil autorizado.",
        "trouble": "Orientação geral de acesso: confira o endereço e a conexão. Se o portal pedir autenticação, use somente sua conta autorizada. Persistindo a falha, procure o suporte responsável pelo serviço.",
        "support": "O Portal de Atendimento publica sac@bombeiros.pe.gov.br e (81) 3182-9126 para dúvidas ou sugestões. Confira esses canais no portal antes de contatar."
      },
      "questions": [
        {
          "intent": "purpose",
          "question": "Para que serve Atendimento ao público · CBMPE?"
        },
        {
          "intent": "access",
          "question": "Como acessar Atendimento ao público · CBMPE?"
        },
        {
          "intent": "audience",
          "question": "Quem pode usar Atendimento ao público · CBMPE?"
        },
        {
          "intent": "trouble",
          "question": "Não consigo abrir Atendimento ao público · CBMPE"
        },
        {
          "intent": "source",
          "question": "Qual a fonte sobre Atendimento ao público · CBMPE?"
        }
      ]
    }
  ]
};
 if(typeof module!=="undefined"&&module.exports)module.exports=data;else root.GBMarKnowledge=data;
})(typeof globalThis!=="undefined"?globalThis:this);
