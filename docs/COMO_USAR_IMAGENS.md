# Instruções de imagens, marcas e licenças

## Caminhos de produção
- Logo: `/brand/logo-oralface-transparente.png` (PNG alpha) ou WebP alpha.
- Favicon: `/brand/favicon.ico`, `/brand/favicon-32x32.png` e `/brand/apple-touch-icon.png`.
- Hero desktop: `/images/hero/dra-tallita-hero-desktop.webp`.
- Hero mobile: `/images/hero/dra-tallita-hero-mobile.webp`.
- Sobre Dra. Tallita: `/images/hero/dra-tallita-sobre.webp`.
- Clínica: `/images/clinic/fachada-real-oralface.webp` (**versão aprovada da fachada com tratamento visual e melhor acabamento**).
- Tratamentos: `/images/services/<slug>-thumb.webp` nos cards; `<slug>.webp` em views grandes.

## Assets gerados por IA
A foto hero e retrato da profissional são recriações ilustrativas guiadas pelas fotos fornecidas; **podem diferir visualmente da pessoa real**. Exigir aprovação antes de publicar. As imagens dos serviços são genéricas e não comprovam tratamentos ou resultados reais do estabelecimento.

## Fidelidade da logo
A logo foi refinada com IA a partir da imagem original. A versão PNG alta resolução está pronta para layout, mas **não é arquivo vetorial oficial** nem garante reconstrução pixel a pixel. Para registro/identidade final, solicitar vetor original ao cliente se existir.

## Fachada
Na produção, usar a **fachada aprovada** em `/images/clinic/fachada-real-oralface.webp`, que é a versão visualmente refinada escolhida para o projeto. A foto original da fachada permanece arquivada em `references/client-originals/` como referência do ponto físico.

## Performance
- Usar `picture`/`srcset` quando adequado, largura/altura explícitas, object-fit cover, hero em prioridade, cards lazy.
- Não redimensionar fotografia original para megapixels fictícios ou aplicar sharpening exagerado.
- WebP preserva qualidade visual com peso menor que PNG; os PNG originais gerados podem ser exportados novamente se necessário.


**Atualização da identidade:** utilizar `public/brand/logo-oralface-transparente.png` (horizontal, símbolo à esquerda e nome à direita) no cabeçalho/navbar. PNG com transparência. A versão anterior foi preservada em `public/brand/logo-oralface-anterior.png`.
