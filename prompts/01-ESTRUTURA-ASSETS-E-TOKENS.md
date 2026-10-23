# ETAPA 01 · Preparação técnica, assets e tokens
Objetivo: preparar a base para implementação sem criar regressões.

- Inspecione a stack e determine onde assets estáticos são servidos. Se já houver `/public/`, integre conteúdo da pasta `public/` do kit; caso contrário adapte para o equivalente.
- Instale apenas as dependências estritamente necessárias e explique as adicionadas. Não sobrescreva lockfile desnecessariamente.
- Importe/integre os tokens de `src/design-system/oralface-tokens.css` e conteúdos em JSON, respeitando o reset existente.
- Defina componentes reutilizáveis (`Container`, `SectionHeading`, `Button`, `ServiceCard`, `NavLink`) conforme arquitetura do projeto.
- Configure as fontes Playfair Display e Poppins com fallbacks robustos; se Next, preferir `next/font/google` e evitar `@import` simultâneo. Não distribuir arquivos de fontes de terceiros.
- Garanta paths consistentes: `/brand/...` e `/images/...`.
- Gere favicon, metadata title/description/OG com os assets fornecidos; não substituir a logo por texto genérico.
- Continue somente quando todos os caminhos de imagens resolverem e tokens estiverem acessíveis.
