window.RTG_MOCK_DATA = {
  meta: {
    product: 'Cérebro RTG — Sala de Comando',
    version: 'v0.3-premium',
    dateLabel: '13/08/2026',
    mode: 'Protótipo v0.3 — dados demonstrativos/read-only',
    sources: ['RTGestão: mock', 'RTGClock: mock', 'RTGArquivos: futuro', 'Diretoria: futuro', 'Read-only']
  },
  briefing: {
    eyebrow: 'Conclusão do dia',
    titleBefore: 'Felipe, a empresa precisa de',
    titleHighlight: 'comando operacional',
    titleAfter: 'agora.',
    summary: 'O Cérebro abre pelo estado, explica a causa, mostra impacto e força a próxima decisão.',
    text: 'Hoje o risco demonstrativo é controle operacional: foco de Torelli, rastreabilidade no RTGClock e vencidas críticas. A próxima melhor ação é travar a frente principal, limpar ruído e manter decisão registrada.',
    voice: 'Felipe, briefing demonstrativo. A empresa precisa de comando operacional agora. Recomendo validar foco em Torelli, checar RTGClock e limpar vencidas críticas antes que o ruído vire atraso real.'
  },
  kpis: [
    ['Modo','Read-only','good'], ['Prioridade','Torelli','warn'], ['Decisões','3 pendentes','warn'], ['Dados','mock','risk']
  ],
  modules: [
    {tag:'Operação', tone:'green', title:'Projetos', desc:'Status, etapa, disciplinas, risco e próxima ação.', target:'projeto'},
    {tag:'Sequências', tone:'', title:'Etapas', desc:'Fluxo padrão, gates, critérios e dependências.', target:'controle'},
    {tag:'Capacidade', tone:'yellow', title:'Pessoas', desc:'Agenda, horas, foco, bloqueios e carga real.', target:'pessoa'},
    {tag:'Carteira', tone:'green', title:'Empreendimentos', desc:'Visão 360 de ativos, entregas e riscos.', target:'empreendimento'},
    {tag:'Atenção', tone:'red', title:'Apontamentos', desc:'Incompatibilidades, impacto, responsáveis e resolução.', target:'grafo'},
    {tag:'Entrega', tone:'', title:'Arquivos', desc:'Esperado, encontrado, revisão vigente e pacote validado.', target:'arquivos'},
    {tag:'Controle', tone:'yellow', title:'Gates', desc:'Critérios formais, aceite, pendências e exceções.', target:'projeto'},
    {tag:'Decisão', tone:'green', title:'Aprovações', desc:'Ações preparadas, impacto, risco e aceite do Felipe.', target:'decisoes'},
    {tag:'Executivo', tone:'', title:'Diretoria', desc:'Carteira, riscos 30/60/90, financeiro e comercial.', target:'empreendimento'},
    {tag:'Tempo', tone:'yellow', title:'RTGClock', desc:'Horas por pessoa, projeto, etapa e disciplina.', target:'pessoa'},
    {tag:'Comercial', tone:'', title:'Funil', desc:'Prospecção, propostas, contratos e sinais.', target:'empreendimento'},
    {tag:'Fonte', tone:'green', title:'Evidências', desc:'Origem, qualidade, lacunas e última leitura dos dados.', target:'fontes'}
  ],
  priorities: [
    {title:'Travar frente principal', desc:'Torelli concentra disciplinas e precisa de coordenação explícita.', tone:'green', label:'Agora'},
    {title:'Separar vencidas críticas', desc:'Limpar ruído operacional antes de medir atraso real.', tone:'yellow', label:'30 min'},
    {title:'Exigir RTGClock vinculado', desc:'Sem pessoa+projeto+etapa+disciplina, capacidade vira hipótese.', tone:'red', label:'Risco'},
    {title:'Registrar decisões', desc:'Telegram decide rápido; Cérebro precisa virar memória/auditoria.', tone:'green', label:'Sistema'}
  ],
  graph: { center: 'CÉREBRO RTG', nodes: ['Torelli','Gabrielle','RTGClock','Arquivos','Gate','Decisão','Empreendimento','Apontamento'] },
  project360: { title: 'TORELLI — Projeto 360', rows: [['Etapa','Anteprojeto / Executivo técnico',''],['Disciplinas','HID, CLI, ELE, PPCI, ARQ',''],['Risco','Médio — coordenação de foco','warn'],['Gate','Necessita evidência','warn'],['Arquivos','mock: aguardando RTGArquivos',''],['Próxima ação','Validar frente principal','good']] },
  person360: { title: 'Gabrielle — Pessoa 360', rows: [['Foco sugerido','Torelli / ARQ + PCI',''],['Horas semana','26,2h / 40h',''],['Capacidade','Parcialmente comprometida','warn'],['Timer','Sem timer no mock','risk'],['Risco','Rastreabilidade de execução',''],['Recomendação','Confirmar início real','good']] },
  venture360: { title: 'Empreendimento — Torre Torelli 360', rows: [['Projetos vinculados','Complementares + Arquitetura + PPCI',''],['Status macro','Em avanço técnico','warn'],['Risco comum','Coordenação entre disciplinas','warn'],['Entregáveis','Pacote ainda não validado','risk'],['Decisão pendente','Confirmar foco e responsável de coordenação','warn'],['Próxima ação','Abrir Projeto 360 e validar gate','good']] },
  files360: { title: 'Arquivos e Entregáveis — mock', rows: [['Esperados','DWG, PDF, IFC conforme pacote',''],['Encontrados','mock indisponível','warn'],['Validados','0 no protótipo','risk'],['Regra','arquivo encontrado não é entrega','warn']] },
  sources360: { title: 'Fontes e Evidências', rows: [['RTGestão/Supabase','mock nesta versão','warn'],['RTGClock/Clockify','mock nesta versão','warn'],['RTGArquivos','futuro/read-only',''],['ClickUp','não fonte viva operacional','risk']] },
  decisions: [
    {title:'Triagem operacional', desc:'Preparar limpeza de vencidas críticas. Execução real exige aprovação.', impact:'Reduz ruído e melhora previsibilidade.'},
    {title:'Foco do dia', desc:'Validar se Torelli é frente principal e quem coordena.', impact:'Evita dispersão e retrabalho.'},
    {title:'Próximo gate de produto', desc:'Escolher entre visual premium, app local ou fonte real read-only.', impact:'Define caminho até produção controlada.'}
  ]
};
