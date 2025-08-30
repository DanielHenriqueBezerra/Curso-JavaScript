
# Documentação Completa de Propriedades CSS

Este documento apresenta uma lista completa das propriedades CSS, organizada por categoria. Você pode usar este guia para consultar rapidamente as propriedades e valores de CSS.

## Fontes:
- [MDN Web Docs - CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Properties)
- [W3Schools - CSS Reference](https://www.w3schools.com/CSSref/index.php)
- [GeeksforGeeks - CSS Properties](https://www.geeksforgeeks.org/css/css-properties-complete-reference/)

## 1. Estrutura e Box Model
Estas propriedades controlam o modelo de caixa (box model) e como os elementos são posicionados no layout.

- **`margin`**: Define a distância entre o elemento e seus elementos vizinhos.
- **`margin-top`, `margin-right`, `margin-bottom`, `margin-left`**: Define as margens individualmente em cada lado do elemento.
- **`padding`**: Espaçamento interno entre o conteúdo do elemento e suas bordas.
- **`border`**: Define as bordas de um elemento (tamanho, estilo e cor).
- **`box-sizing`**: Controla como as dimensões de largura e altura de um elemento são calculadas (com ou sem considerar as bordas e o preenchimento).
- **`width`, `height`**: Define a largura e a altura de um elemento.
- **`max-width`, `min-width`, `max-height`, `min-height`**: Controla os limites de largura e altura.
- **`display`**: Controla o comportamento de layout de um elemento (ex: `block`, `inline`, `flex`, `grid`).
- **`float`**: Alinha um elemento à esquerda ou à direita dentro de seu contêiner.

## 2. Posicionamento e Layout (Flexbox e Grid)
Essas propriedades ajudam a posicionar e controlar o layout dos elementos na página, utilizando o modelo de Flexbox ou Grid.

- **`position`**: Define o tipo de posicionamento de um elemento (`static`, `relative`, `absolute`, `fixed`).
- **`top`, `right`, `bottom`, `left`**: Define a posição de um elemento quando ele está com `position` diferente de `static`.
- **`z-index`**: Controla a sobreposição de elementos com base no seu índice.
- **`display: flex`**: Define o modelo de layout Flexbox.
- **`flex-direction`**: Define a direção dos itens dentro de um container Flexbox (`row`, `column`).
- **`justify-content`**: Alinha os itens do Flexbox ao longo do eixo principal (horizontal, por padrão).
- **`align-items`**: Alinha os itens ao longo do eixo transversal (vertical, por padrão).
- **`flex-wrap`**: Define se os itens dentro de um container Flexbox devem ou não quebrar em várias linhas.
- **`display: grid`**: Define o modelo de layout Grid.
- **`grid-template-columns`, `grid-template-rows`**: Define o número de colunas e linhas no layout Grid.
- **`grid-gap`**: Controla o espaçamento entre as linhas e colunas do Grid.

## 3. Tipografia e Texto
Essas propriedades controlam o estilo de texto, fontes e espaçamento.

- **`font-family`**: Define a fonte do texto.
- **`font-size`**: Define o tamanho da fonte.
- **`font-weight`**: Define o peso da fonte (normal, bold, etc).
- **`font-style`**: Define o estilo da fonte (normal, itálico, etc).
- **`line-height`**: Define a altura da linha, controlando o espaçamento entre as linhas de texto.
- **`text-align`**: Alinha o texto (ex: `left`, `right`, `center`).
- **`text-decoration`**: Controla o estilo de decoração do texto (ex: `underline`, `line-through`).
- **`text-transform`**: Altera a capitalização do texto (`uppercase`, `lowercase`, `capitalize`).
- **`letter-spacing`**: Controla o espaçamento entre as letras do texto.
- **`word-spacing`**: Controla o espaçamento entre as palavras do texto.

## 4. Cor e Fundos
Estas propriedades controlam as cores de fundo e os efeitos visuais de um elemento.

- **`background-color`**: Define a cor de fundo de um elemento.
- **`background-image`**: Define uma imagem de fundo para o elemento.
- **`background-repeat`**: Controla se a imagem de fundo se repete ou não.
- **`background-size`**: Controla o tamanho da imagem de fundo.
- **`opacity`**: Controla a opacidade de um elemento (transparência).
- **`color`**: Define a cor do texto de um elemento.
- **`box-shadow`**: Adiciona uma sombra ao redor de um elemento.

## 5. Bordas e Sombreamento
Essas propriedades definem a aparência das bordas e sombreamento dos elementos.

- **`border-radius`**: Define bordas arredondadas para um elemento.
- **`border`**: Define as bordas de um elemento (espessura, estilo e cor).
- **`box-shadow`**: Adiciona sombras ao redor de um elemento.

## 6. Efeitos, Transições e Animações
Essas propriedades adicionam efeitos visuais ao site, como animações e transições suaves.

- **`transition`**: Define uma transição suave entre os estados de um elemento ao longo do tempo.
- **`transition-duration`**: Define a duração da transição.
- **`transition-property`**: Define quais propriedades vão ser animadas durante a transição.
- **`animation`**: Define uma animação CSS, permitindo a criação de movimentos e mudanças em elementos.
- **`animation-name`**: Define o nome da animação.
- **`animation-duration`**: Define a duração de uma animação.
- **`animation-timing-function`**: Define a curva de tempo da animação.

## 7. Outros Recursos
Aqui estão algumas outras propriedades úteis que podem ser usadas para estilizar elementos.

- **`visibility`**: Controla a visibilidade de um elemento (ex: `visible`, `hidden`).
- **`overflow`**: Controla o que acontece quando o conteúdo de um elemento ultrapassa o seu tamanho (ex: `visible`, `hidden`, `scroll`).
- **`filter`**: Aplica efeitos gráficos como desfoque e brilho a um elemento.
- **`cursor`**: Define o tipo de cursor exibido ao passar o mouse sobre um elemento.
- **`transform`**: Aplica transformações 2D ou 3D a um elemento (ex: rotação, escala, etc).
- **`transform-origin`**: Define o ponto de origem para transformações.
- **`backface-visibility`**: Controla a visibilidade da face traseira de um elemento durante transformações 3D.
- **`text-shadow`**: Adiciona sombras ao texto.

## 8. Propriedades Avançadas
Essas propriedades avançadas incluem o uso de variáveis e reset de propriedades.

- **`all`**: Restaura todas as propriedades de um elemento para seus valores iniciais.
- **`--*` (CSS Custom Properties)**: Define variáveis CSS, permitindo a reutilização de valores em todo o código.
- **`initial`**: Define uma propriedade com o valor inicial.

## Conclusão
Este documento serve como uma visão geral das principais propriedades do CSS. Você pode usar as fontes e sites mencionados para aprofundar seu conhecimento em cada uma dessas propriedades e aprender sobre novos padrões e recursos.

