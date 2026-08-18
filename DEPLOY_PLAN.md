# Deploy — Cérebro RTG v1 Public Safe

Domínio: `cerebro.rtgengenharia.com`

## Escopo publicado

Publicação GitHub Pages **pública e segura**, sem dados reais identificáveis.

## Guardrails

- Não contém payload operacional real.
- Não contém nomes de projetos, clientes ou pessoas reais.
- Não conecta RTGestão, RTGClock, Drive, ClickUp ou Supabase.
- Não executa escrita.
- Não envia mensagem externa.
- Operação viva permanece somente em ambiente restrito/local até autenticação protegida.

## Evidência local antes do deploy

- Dist: `/root/rtg/rtggestao-agent/dist/cerebro-rtg-sala-comando-v1-public-safe`
- Browser local validado em `http://127.0.0.1:8781/`
- Título: `Cérebro RTG — Public Safe v1`
- DNS já aponta `cerebro.rtgengenharia.com CNAME felipecarradore.github.io`
- GitHub Pages reportado com certificado HTTPS aprovado.

## Validação pós-deploy esperada

- `https://cerebro.rtgengenharia.com/` retorna título `Cérebro RTG — Public Safe v1`.
- A página contém aviso `vitrine sem dados reais`.
