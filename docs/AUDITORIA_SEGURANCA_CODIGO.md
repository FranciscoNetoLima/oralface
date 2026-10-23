# Auditoria de segurança e higiene — Oral Face

Data: 23/10/2026. Escopo: código da aplicação Next.js, configuração, dependências, metadados, CSS, manifesto de conteúdo e assets públicos.

## Achados corrigidos

| Gravidade | Local original | Achado | Correção |
| --- | --- | --- | --- |
| Média | `src/app/layout.tsx:6` | URL base de SEO caía em `localhost:3000` quando o domínio não estava configurado. | Metadados de URL só são publicados quando `NEXT_PUBLIC_SITE_URL` contém uma origem HTTPS válida. Foram adicionados URL canônica, Open Graph e Twitter Card quando o domínio estiver confirmado. |
| Média | `next.config.ts:3` | Faltavam cabeçalhos de proteção. | Adicionados CSP para produção, `Referrer-Policy`, `X-Content-Type-Options`, `X-Frame-Options` e `Permissions-Policy`; removido `X-Powered-By`. |
| Média | `src/components/EvaluationForm.tsx:21-40` | O campo WhatsApp aceitava texto arbitrário e o formulário podia usar GET se o JavaScript falhasse. | Validação de nome e 10/11 dígitos com DDD; método POST no HTML; dados inseridos na URL do WhatsApp por `encodeURIComponent`. |
| Baixa | `src/components/ContactActions.tsx:1-26` | Componente antigo sem uso indicava contato ainda não confirmado. | Componente removido. |
| Baixa | `src/app/globals.css:122-149,186-188,211-217,256-270,324-343` | CSS de versões anteriores não correspondia às seções atuais. | Seletores sem uso removidos. |
| Baixa | `src/design-system/site-content.json:38-41` | Âncora `#depoimentos` não existia na página. | Entrada removida. |
| Baixa | `src/design-system/oralface-tokens.css:2` | Importação de fonte externa duplicada no arquivo de referência. | Importação removida; fontes ativas continuam declaradas no layout. |

## Verificações sem achados

- Nenhum `innerHTML`, `document.write`, `eval`, parâmetro de URL inserido no DOM ou requisição `fetch`/Axios/XHR na aplicação.
- Nenhum ID de GTM, Meta Pixel ou Hotjar; nenhum segredo ou credencial fixa encontrado nos arquivos de código e configuração varridos.
- O link externo com `target="_blank"` usa `rel="noopener noreferrer"`; a abertura programática usa `noopener,noreferrer`.
- Links externos de produção encontrados: Google Fonts e WhatsApp HTTPS da Oral Face. Não foram encontrados domínios de templates ou referências externos no código ativo.
- `npm audit` encontrou 0 vulnerabilidades nas dependências, incluindo as de produção.

## Configuração e limite conhecido

Definir `NEXT_PUBLIC_SITE_URL` com a origem HTTPS definitiva antes de publicar. Sem esse valor, a página não emite URL canônica ou imagem OG absoluta, evitando divulgar `localhost` ou um domínio fictício.

A CSP permite scripts e estilos inline porque a versão estática atual do Next.js os gera. Isso é uma proteção inicial, não uma política estrita baseada em nonce. Para endurecê-la, será preciso integrar nonces ao pipeline de renderização e testar o impacto no cache e no desempenho.

O formulário usa validação no navegador e abre uma mensagem pré-preenchida no WhatsApp; não existe endpoint próprio de coleta. A validação do cliente não substitui validação no servidor caso um endpoint seja criado futuramente.

## Verificações executadas

`npm run typecheck`, `npm run lint`, `npm run build --webpack` e `npm audit` passaram. O manifesto de produção contém todos os cabeçalhos configurados; a página compilada não contém `localhost:3000` em metadados de SEO.
