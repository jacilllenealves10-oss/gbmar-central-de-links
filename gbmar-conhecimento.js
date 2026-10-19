/* Base editorial local: atualizar junto das fontes. Nenhum segredo ou dado interno. */
(function(root){
  const data = {
  "version": "2.0.0",
  "reviewed": "2026-10-19",
  "scope": "Base de orientação revisada; sem consulta automática aos sistemas externos.",
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
          "a": "Não. Postos cadastrados e ocorrências históricas não comprovam ativação diária. Consulte o Mapa de Força GBMar para a situação do serviço."
        },
        {
          "q": [
            "As coordenadas são exatas?",
            "Os pontos são GPS?"
          ],
          "a": "O projeto distingue coordenadas originais e inferidas. Confira a identificação de cada ponto antes de utilizá-lo no planejamento."
        }
      ]
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
      "faqs": []
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
          "a": "A classificação informa a qualidade sanitária da água para banho. A CPRH usa análises de bactérias indicadoras de contaminação e divulga informativos periódicos. Confira sempre o ponto de coleta e a data."
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
          "a": "Monitoramento apresenta observações ou medições. Previsão descreve condições esperadas. Na APAC, confira o tipo do produto e o horário de referência antes de interpretar o valor."
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
      "faqs": []
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
      "faqs": []
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
          "a": "O Mapa de Força GBMar é a planilha local da unidade. O Mapa de Força institucional é um sistema do CBMPE. São destinos distintos; confirme qual deles foi solicitado."
        },
        {
          "q": [
            "Você pode editar o mapa de força?",
            "Atualize a planilha oficial"
          ],
          "a": "Não. Este assistente apenas orienta a consulta e não possui integração de escrita com a planilha oficial."
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
      "faqs": []
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
      "faqs": []
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
      "faqs": []
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
          "a": "Na tela do Prime Frota, use “Esqueci minha senha”. O portal solicita código do cliente, usuário e e-mail cadastrado, e envia as instruções por e-mail. Se o primeiro acesso não funcionar, procure o assessor do contrato. Não informe esses dados neste chat."
        },
        {
          "q": [
            "Quais dados preciso para entrar no Prime?",
            "Como fazer login no Prime?"
          ],
          "a": "A área Empresa Cliente solicita código do cliente, login e senha. Preencha-os somente no portal. Este assistente não conhece suas credenciais."
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
      "faqs": []
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
      "faqs": []
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
          "a": "A situação deve ser conferida no registro atualizado da unidade e com a STSGT. Não tenho telemetria nem leitura em tempo real dos controles."
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
      "faqs": []
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
      "faqs": []
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
          "a": "A tela pública informa o e-mail cgdti@corregedoria.sds.pe.gov.br e o telefone (81) 3184-2741 para dúvidas ou dificuldades de acesso. Confira esses canais no próprio portal antes de contatar."
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
      "faqs": []
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
          "a": "Não verifico indisponibilidade em tempo real. A pasta de contingência da Central menciona 09–12/10/2026; confirme a orientação vigente com a unidade antes de reutilizá-la."
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
      "faqs": []
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
      "faqs": []
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
      "faqs": []
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
      "faqs": []
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
      "faqs": []
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
      "faqs": []
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
      "faqs": []
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
          "a": "No Portal de Atendimento, selecione a opção de validação de AVCB (autenticidade). Informe os dados somente na página oficial e confira o resultado apresentado."
        },
        {
          "q": [
            "Onde pedir certidão de ocorrência?"
          ],
          "a": "O Portal de Atendimento lista “Emissão de Certidão de Ocorrências”. Abra esse serviço e verifique os requisitos atuais no destino indicado."
        }
      ]
    }
  ]
};
  if (typeof module !== "undefined" && module.exports) module.exports = data;
  else root.GBMarKnowledge = data;
})(typeof globalThis !== "undefined" ? globalThis : this);
