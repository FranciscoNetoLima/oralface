# ORAL FACE ODONTOLOGIA · KIT COMPLETO PARA CODEX

## Entrega pronta para iniciar implementação
Este ZIP contém os arquivos visuais otimizados, mockup 02 aprovado, design tokens, copy, assets de identidade, favicon e prompts sequenciais do Codex.

### Instalação
1. Extraia a pasta `oralface-web-kit-codex/` dentro da raiz do projeto que o Codex abrirá (não substitua o projeto existente).
2. Abra a pasta raiz do projeto no Codex.
3. Cole o texto de **`COPIAR_E_COLAR_NO_CODEX.txt`** no chat do Codex — uma única mensagem basta para iniciar as etapas 00–06.
4. Antes do deploy, revise `docs/CHECKLIST_PRE_PUBLICACAO.md` e confirme os dados do cliente.

### Arquivos
- `references/mockup-approved/`: **segundo mockup aprovado**, única referência visual principal.
- `public/`: imagens WebP otimizadas, logo transparente PNG/WebP, favicons, imagem OG.
- `references/client-originals/`: logo original, fachada original e fotos de marketing originais.
- `references/ai-master-png/`: inclui também a fachada aprovada em alta resolução para novos recortes e derivações.
- `references/ai-master-png/`: imagens geradas em PNG mestre, resolução original para recortes futuros.
- `src/design-system/`: tokens CSS/JSON e copy JSON.
- `docs/`: especificação de design, uso de imagens, copy e checklist de veracidade.
- `prompts/`: 00–06 (briefing técnico, composição, seções, conversão, refinamento, testes).
- `INSTRUCAO_UNICA_PARA_CODEX.md`: orquestra tudo.

### Nota sobre veracidade
Os retratos e tratamentos são imagens ilustrativas geradas por IA; não são fotografias oficiais garantidamente fiéis à Dra. Tallita ou à rotina real da clínica. Confirme com a cliente antes da publicação. A fachada de produção deste kit é a versão aprovada e refinada visualmente, enquanto a foto original permanece arquivada como referência.


**Atualização da identidade:** utilizar `public/brand/logo-oralface-transparente.png` (horizontal, símbolo à esquerda e nome à direita) no cabeçalho/navbar. PNG com transparência. A versão anterior foi preservada em `public/brand/logo-oralface-anterior.png`.

## Implementação local

O site foi implementado neste diretório com Next.js, TypeScript e Tailwind CSS, seguindo o mockup 02 aprovado. Para esta implementação, prevalece o pedido mais recente: a marca exibida é `public/brand/logo-oralface-horizontal.png` e a fachada é `public/images/clinic/fachada-oralface-aprovada.webp`.

```bash
npm install
npm run dev
```

Abra `http://127.0.0.1:3000`. Para verificar antes de entregar:

```bash
npm run typecheck
npm run lint
npm run build
```

O WhatsApp `(88) 9 8814-3184` foi confirmado pelo usuário em 23/10/2026 e está configurado em `src/design-system/site-content.json`. O formulário de avaliação abre o WhatsApp com a mensagem preenchida; não grava dados em servidor. Endereço, Instagram, CRO e a confirmação final de serviços e retratos ainda dependem do cliente. Defina `NEXT_PUBLIC_SITE_URL` com o domínio real antes de publicar. A publicação não faz parte desta entrega local.

A revisão de fidelidade ao mockup 02 está descrita em `docs/AJUSTES_FIDELIDADE_MOCKUP.md`. A seção da doutora e o formulário seguem a referência visual adicional enviada em 23/10/2026. Os retratos exibidos usam fotos originais da cliente, com os textos de marketing fora do enquadramento; os retratos sintéticos do kit foram preservados, mas não aparecem na página.
