# Deploy plan — cerebro.rtgengenharia.com — v0.4

## Autorização

Felipe autorizou avançar com a publicação após o pacote local/read-only estar validado.

## Pacote

Origem:
- `/root/rtg/rtggestao-agent/prototypes/cerebro-rtg-sala-comando-v04/`

Dist:
- `/root/rtg/rtggestao-agent/dist/cerebro-rtg-sala-comando-v04/`

Arquivos publicados:
- `index.html`
- `mock-data.js`
- `README.md`
- `manifest.json`
- `CNAME`
- `DEPLOY_PLAN.md`

## Guardrails

- Dados mock/demonstrativos.
- Read-only.
- Sem conexão com RTGestao, RTGClock, Drive, ClickUp ou fontes oficiais.
- Não usar para decisão real, aceite de entrega ou cobrança operacional.
- HTTPS enforcement só deve ser ativado quando o certificado do GitHub Pages estiver válido para `cerebro.rtgengenharia.com`.

## Validação pré-publicação

- Browser local carregou sem erro JS.
- Banner read-only visível.
- Resíduos visuais antigos removidos.
- ZIP e dist verificados.
- DNS autoritativo já aponta `cerebro.rtgengenharia.com CNAME felipecarradore.github.io.`

## Validação pós-publicação esperada

- `gh api repos/felipecarradore/CEREBRO-RTG-PAGES/pages` com `status=built`.
- `curl http://cerebro.rtgengenharia.com/` contendo título v0.4.
- `curl https://cerebro.rtgengenharia.com/` somente após certificado válido.
