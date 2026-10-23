# Design System · Oral Face Odontologia | Conceito 02 APROVADO

## Posicionamento
Odontologia boutique: **sofisticação feminina, proximidade humana e estética editorial**. A sensação central deve ser de confiança, conforto, atenção aos detalhes e valor percebido. Não copiar templates hospitalares genéricos.

## Referência visual mandatória
`references/mockup-approved/ORALFACE_MOCKUP_02_APROVADO.png`: usar a composição da **segunda opção** aprovada, não a primeira. A imagem é um direcionamento de layout, não fonte de fatos, depoimentos ou fotos reais.

## Identidade de cor
| Token | Cor | Hex | Uso |
|---|---|---|---|
| Bordô principal | #6B1F2D | `#6B1F2D` | CTAs, highlights, headings |
| Rosa antigo | #C98A8E | `#C98A8E` | Acentos discretos e elementos de marca |
| Rosa claro | #F7D9DA | `#F7D9DA` | Cards suaves, formas e detalhes |
| Nude | #EAD7CE | `#EAD7CE` | Planos de apoio e fundos |
| Off-white | #FBF8F6 | `#FBF8F6` | Fundo dominante |
| Cinza quente | #A79B97 | `#A79B97` | Detalhes secundários |
| Texto escuro | #3D2A2D | `#3D2A2D` | Corpo e títulos neutros |
| Linha suave | #E9DDDA | `#E9DDDA` | Bordas e divisórias |


**Proporção aproximada:** 70–75% fundos off-white/branco, 15–20% blush/nude, 5–10% vinho em CTA e destaques. Sem cores neon; sem gradientes intensos.

## Tipografia
- **Playfair Display**, elegância editorial nos títulos, peso 400/500; evitar títulos inteiros em bold.
- **Poppins**, interface e textos, peso 400/500; base 16px, line-height 1.65.
- Escalas fluidas com `clamp`. Título hero ~clamp(3.1rem, 6vw, 6.2rem), quebrar naturalmente em 3 linhas quando cabível.
- Eyebrows caps com tracking de 0.16em, 11–12px; sem excesso.

## Geometria e layout
- Container 1240px, gutter fluido 20–48px.
- Espaçamento entre seções 72–120px.
- Cards com raio 20–28px, botões 999px e sombras sutis.
- Desktop: hero editorial 44/56, foto em composição assimétrica com curva ou recorte orgânico discreto.
- Tablet: reorganizar em duas colunas sempre que legibilidade permitir.
- Mobile: foto e conteúdo em pilha, sem cortes no rosto e CTAs acessíveis.

## Componentes
- Navbar clean, logo em destaque moderado, links com underline/indicador sutil, CTA bordô.
- CTA primário bordô com texto branco; secundário outline vinho com borda rosa antigo.
- Cards de tratamento com fotografia realista na parte superior, copy curto, ícone linear e Saiba mais.
- Seção da clínica com a fachada aprovada e conteúdo ao lado. O visual deve comunicar estrutura, cuidado e sofisticação.
- Bloco da Dra. Tallita com retrato editorial + texto, sem biografia/credenciais inventadas.
- Citação editorial em bloco bordô, sem fingir ser citação direta da doutora.
- CTA final com botão funcional conectado ao contato real quando verificado.

## UX e movimento
- Hover: pequeno deslocamento (-2px), sem animações longas.
- Reveal suave opcional de 400–500ms apenas com respeito a `prefers-reduced-motion`.
- Um único CTA principal por seção; botões acionáveis e estados focus/disabled.
- Contraste mínimo WCAG AA, teclado, alt útil, formulários rotulados.

## Estrutura da home
1. Header e hero: “Sorrisos que transformam histórias”
2. Barra de diferenciais
3. Sobre a clínica e fachada aprovada
4. Tratamentos e modalidades (seis cards)
5. Sobre a Dra. Tallita
6. Destaque editorial bordô
7. Depoimentos **somente se fornecidos e autorizados** (senão omitir)
8. Conversão/agendamento e contato
9. Footer

## Regras de verdade da marca e publicidade profissional
- Nunca inventar dados, números de pacientes, prêmios, CRM/CRO, especialização, avaliações, contato ou resultados.
- Fotos geradas por IA são ILUSTRATIVAS; não afirmar que representam pacientes, o interior real da clínica, procedimentos reais ou resultados clínicos.
- Usar a fachada aprovada do kit como imagem principal da seção da clínica.
- Informações profissionais e publicidade odontológica devem ser revisadas pelo responsável antes da publicação.

## Tokens consumíveis
`src/design-system/oralface-tokens.css` e `src/design-system/tokens.json`.
