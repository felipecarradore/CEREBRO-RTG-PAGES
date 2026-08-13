# Deploy plan — cerebro.rtgengenharia.com

## Pacote preparado

Origem:

- `/root/rtg/rtggestao-agent/prototypes/cerebro-rtg-sala-comando-v03/`

Pacote estático:

- `/root/rtg/rtggestao-agent/dist/cerebro-rtg-sala-comando-v03/`

Arquivos:

- `index.html`
- `mock-data.js`
- `README.md`
- `CNAME` com `cerebro.rtgengenharia.com`

## Validação local realizada

- Página carregou no browser local.
- `window.openControl` existe.
- `window.closeControl` existe.
- `#modal` existe.
- `#moduleGrid` existe.
- `window.RTG_MOCK_DATA.modules.length = 12`.
- Botão principal abre modal com 12 módulos.
- Botão central abre modal com 12 módulos.
- `Esc` fecha modal.
- Clique fora fecha modal.
- Botão `X` fecha modal.

## DNS / hospedagem observados

- `cerebro.rtgengenharia.com` ainda não responde em DNS público.
- DNS local resolve para localhost por configuração do ambiente, não usar como evidência pública.
- `rtgestao.rtgengenharia.com` aponta para Cloudflare Pages (`rtgestao.pages.dev`).
- `rtgarquivos.rtgengenharia.com`, `rtgclock.rtgengenharia.com` e `www.rtgengenharia.com` apontam para GitHub Pages (`felipecarradore.github.io`).
- `rtgdiretoria.rtgengenharia.com` aponta para `custom-domains.chatgpt.site`.

## Guardrails

- Sem dados reais.
- Sem deploy ainda.
- Sem alteração DNS ainda.
- Sem credenciais.
- Sem sistema oficial.
- Produção exige autorização explícita do Felipe.

## Próximo caminho recomendado

Opção mais simples para protótipo estático:

1. Criar/publicar um repositório GitHub Pages dedicado, por exemplo `CEREBRO-RTG-PAGES`.
2. Publicar o pacote estático no branch principal.
3. Configurar GitHub Pages.
4. Criar CNAME `cerebro.rtgengenharia.com -> felipecarradore.github.io` no SystemDNS/OpenSRS.
5. Validar HTTP/HTTPS público.

Alternativa se Felipe quiser seguir padrão do `rtgestao`:

- Cloudflare Pages, mas somente com credencial/projeto explicitamente RTG e nunca Crown/CrownPDF/CrownServices.
