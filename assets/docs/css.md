<h1>Documentação do CSS - Projeto Portfólio</h1>



<h2>1. Regras CSS utilizadas</h2>



### 🎨 **Espaçamento e Tamanho**

| **Propriedade**            | **Descrição**                                          | **Opções**                                                   | **Exemplo de Uso**                  |
| -------------------------- | ------------------------------------------------------ | ------------------------------------------------------------ | ----------------------------------- |
| `margin`                   | Espaço **externo** entre o elemento e outros ao redor. | **1:** todos os lados<br />**2:** top/bottom – right/left<br />**3:** top – right/left – bottom<br />**4:** top – right – bottom – left | `margin: 1rem 2rem 3rem 4rem;`      |
| `padding`                  | Espaço **interno** entre o conteúdo e as bordas.       | **1:** todos os lados<br />**2:** top/bottom – right/left<br />**3:** top – right/left – bottom<br />**4:** top – right – bottom – left | `padding: 0.5rem 1rem 1.5rem 2rem;` |
| `width` / `height`         | Define tamanho do elemento.                            | `auto`, `100%`, `px`, `rem`, `vh`, `vw`.                     | `width: 100%; height: 5rem;`        |
| `max-width` / `min-height` | Define limites máximo e mínimo.                        | `none`, `70rem`, `100vh`.                                    | `max-width: 70rem;`                 |
| `gap`                      | Espaço entre elementos (flex/grid).                    | Valores em `px`, `rem`, `%`.                                 | `gap: 1.5rem;`                      |

<br />

### 🧩 **Layout e Estrutura**

| **Propriedade**               | **Descrição**                                         | **Opções**                                           | **Exemplo de Uso**                |
| ----------------------------- | ----------------------------------------------------- | ---------------------------------------------------- | --------------------------------- |
| `display`                     | Define como o elemento é exibido.                     | `block`, `inline`, `flex`, `grid`, `none`.           | `display: flex;`                  |
| `flex-direction`              | Define direção dos itens flex.                        | `row`, `column`, `row-reverse`.                      | `flex-direction: column;`         |
| `justify-content`             | Alinha itens no eixo principal.                       | `flex-start`, `center`, `space-between`.             | `justify-content: space-between;` |
| `align-items`                 | Alinha itens no eixo transversal.                     | `flex-start`, `center`, `stretch`.                   | `align-items: center;`            |
| `align-content`               | Alinha múltiplas linhas no container flex.            | `center`, `space-between`.                           | `align-content: center;`          |
| `grid-template-columns`       | Define número e tamanho das colunas.                  | `1fr`, `repeat(n, 1fr)`, `auto`.                     | `grid-template-columns: 1fr 1fr;` |
| `position`                    | Controla o posicionamento.                            | `static`, `relative`, `absolute`, `fixed`, `sticky`. | `position: sticky;`               |
| `top / right / bottom / left` | Define deslocamento posicional.                       | Valores em `px`, `%`, `auto`.                        | `top: 0; left: 0;`                |
| `z-index`                     | Ordem de empilhamento (camadas).                      | Números inteiros.                                    | `z-index: 1000;`                  |
| `overflow`                    | Comportamento do conteúdo excedente.                  | `visible`, `hidden`, `scroll`, `auto`.               | `overflow: hidden;`               |
| `scroll-behavior`             | Controle da rolagem.                                  | `auto`, `smooth`.                                    | `scroll-behavior: smooth;`        |
| `inset`                       | Define deslocamento top/right/bottom/left de uma vez. | **1–4 valores** (mesma regra do `margin`).           | `inset: 0 1rem 2rem 3rem;`        |

<br />

### 🧱 **Bordas e Sombras**

| **Propriedade** | **Descrição**                      | **Opções**                                                   | **Exemplo de Uso**                          |
| --------------- | ---------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| `border`        | Cria bordas no elemento.           | Pode ter `border-width`, `border-style`, `border-color`.**Atalhos:** `border-top`, `border-bottom`, etc. | `border: 0.125rem solid var(--purple-500);` |
| `border-radius` | Arredonda cantos.                  | **1:** todos os cantos<br />**2:** top-left/bottom-right – top-right/bottom-left<br />**3:** top-left – top-right/bottom-left - bottom-right<br />**4:** top-left – top-right – bottom-right – bottom-left | `border-radius: 1rem 2rem 0 0;`             |
| `box-shadow`    | Cria sombras internas ou externas. | **Sintaxe:** `offset-x offset-y blur-radius spread-radius color inset`**Exemplo:** `0 0.25rem 0.75rem rgba(0,0,0,0.3)` | `box-shadow: var(--shadow-md);`             |

**Detalhamento técnico do `box-shadow`:**

| **Parte**       | **Função**                     | **Aceita Negativo?** | **Exemplo**                         |
| --------------- | ------------------------------ | -------------------- | ----------------------------------- |
| `offset-x`      | Move a sombra horizontalmente. | ✅                    | `5px` → direita / `-5px` → esquerda |
| `offset-y`      | Move a sombra verticalmente.   | ✅                    | `5px` → abaixo / `-5px` → acima     |
| `blur-radius`   | Intensidade do desfoque.       | ❌                    | `10px` → sombra difusa              |
| `spread-radius` | Expande ou contrai o tamanho.  | ✅                    | `3px` → maior / `-2px` → menor      |
| `color`         | Cor da sombra.                 | —                    | `rgba(0,0,0,0.3)`                   |
| `inset`         | Faz a sombra interna.          | —                    | `inset 0 2px 6px #00000033`         |

<br />

### 🎨 **Fundo e Cores**

| **Propriedade**       | **Função / Descrição**           | **Opções / Valores**                              | **Exemplo de Uso**                                         |
| --------------------- | -------------------------------- | ------------------------------------------------- | ---------------------------------------------------------- |
| `background-color`    | Define cor de fundo.             | Hex, RGB, HSL, `var()`.                           | `background-color: var(--white);`                          |
| `background`          | Combina cor, imagem e gradiente. | Pode conter várias propriedades em um só comando. | `background: linear-gradient(to right, #6b36c8, #4c2177);` |
| `background-image`    | Define imagem de fundo.          | `url()`, `linear-gradient()`.                     | `background-image: url('banner.jpg');`                     |
| `background-repeat`   | Define repetição da imagem.      | `repeat`, `no-repeat`, `repeat-x`, `repeat-y`.    | `background-repeat: no-repeat;`                            |
| `background-position` | Alinhamento da imagem.           | `center`, `top`, `bottom`, `left`, `right`, `%`.  | `background-position: center;`                             |
| `background-size`     | Tamanho da imagem.               | `cover`, `contain`, `auto`, `%`, `px`.            | `background-size: cover;`                                  |
| `color`               | Define a cor do texto.           | Hex, RGB, HSL, `var(--cor)`.                      | `color: var(--purple-500);`                                |

<br />

### ✍️ **Texto e Tipografia**

| **Propriedade**   | **Função / Descrição**            | **Opções / Valores**                             | **Exemplo de Uso**                    |
| ----------------- | --------------------------------- | ------------------------------------------------ | ------------------------------------- |
| `font-family`     | Define a fonte usada.             | `'Poppins'`, `Arial`, `sans-serif`, `monospace`. | `font-family: 'Poppins', sans-serif;` |
| `font-size`       | Tamanho da fonte.                 | `px`, `rem`, `%`, `larger`, `smaller`.           | `font-size: 1rem;`                    |
| `font-weight`     | Espessura do texto.               | `100–900`, `bold`, `normal`.                     | `font-weight: 700;`                   |
| `line-height`     | Altura da linha.                  | `1.5`, `1.8rem`, `normal`.                       | `line-height: 1.8rem;`                |
| `text-align`      | Alinhamento horizontal.           | `left`, `center`, `right`, `justify`.            | `text-align: center;`                 |
| `text-decoration` | Sublinhado e outros efeitos.      | `none`, `underline`, `line-through`.             | `text-decoration: none;`              |
| `list-style`      | Tipo de marcador de lista.        | `none`, `disc`, `circle`, `square`.              | `list-style: none;`                   |
| `cursor`          | Tipo de cursor ao passar o mouse. | `pointer`, `text`, `not-allowed`, `default`.     | `cursor: pointer;`                    |

<br />

### 🎞 **6. Efeitos e Animações**

| **Propriedade** | **Função / Descrição**                         | **Opções / Valores**                                         | **Exemplo de Uso**                                       |
| --------------- | ---------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `transition`    | Transição suave entre estados.                 | `property duration timing-function delay`.                   | `transition: all 0.3s ease;`                             |
| `transform`     | Transforma o elemento (mover, girar, escalar). | `translate()`, `rotate()`, `scale()`, `skew()`.              | `transform: translateY(-0.25rem);`                       |
| `animation`     | Executa uma animação definida em `@keyframes`. | `name duration timing iteration direction`.                  | `animation: float 3s ease-in-out infinite;`              |
| `@keyframes`    | Define os estágios da animação.                | `0%`, `50%`, `100%` ou `from`, `to`.                         | `@keyframes float {50% {transform: translateY(-1rem);}}` |
| `filter`        | Efeitos visuais em imagens/SVGs.               | `brightness()`, `invert()`, `saturate()`, `sepia()`, `hue-rotate()`. | `filter: brightness(0) invert(100%);`                    |

<br />

### 📱 **Responsividade**

| **Propriedade / Regra** | **Função / Descrição**                                  | **Exemplo de Uso**                             |
| ----------------------- | ------------------------------------------------------- | ---------------------------------------------- |
| `@media`                | Aplica regras condicionais com base no tamanho da tela. | `@media screen and (max-width: 60rem) { ... }` |

<br />

<h2>2. Classes Criadas em styles.css</h2>



### ✅ **Classes e Seletores CSS**

| **Classe / Seletor**                        | **Função / Descrição**                                       | **Usada em**                       | **Exemplo de uso no HTML**                                   |
| ------------------------------------------- | ------------------------------------------------------------ | ---------------------------------- | ------------------------------------------------------------ |
| `.botao`                                    | Botão principal, com fundo roxo e texto branco.              | Links e botões de ação.            | `<a class="botao">Saiba mais</a>`                            |
| `.botao-outline`                            | Botão com borda roxa e fundo transparente (versão alternativa). | Links secundários.                 | `<button class="botao-outline">Contato</button>`             |
| `.menu_container`                           | Contêiner fixo do menu superior (sticky).                    | `<header>` ou `<nav>`.             | `<nav class="menu_container">...</nav>`                      |
| `.menu_content`                             | Organiza os itens do menu com `flex`, centralizando conteúdo. | Dentro do menu.                    | `<div class="menu_content">...</div>`                        |
| `.menu_list`                                | Lista de navegação horizontal, sem marcadores.               | `<ul>` do menu.                    | `<ul class="menu_list"><li><a href="#">Home</a></li></ul>`   |
| `#titulo a`                                 | Define estilo do link principal (marca ou logo).             | Link do título no menu.            | `<h1 id="titulo"><a href="#">MeuSite</a></h1>`               |
| `.hero_container`                           | Seção inicial (hero), divide texto e imagem lado a lado.     | `<section>` principal.             | `<section class="hero_container">...</section>`              |
| `.hero_content`                             | Área de texto dentro da hero (título, subtítulo e botões).   | Dentro do hero.                    | `<div class="hero_content"><h1>Olá</h1></div>`               |
| `.hero_buttons`                             | Agrupa os botões do topo com espaçamento entre eles.         | Dentro da hero.                    | `<div class="hero_buttons">...</div>`                        |
| `.hero_image`                               | Área destinada à ilustração principal.                       | Dentro da hero.                    | `<div class="hero_image"><img src="img.svg"></div>`          |
| `.ilustracao`                               | Define largura máxima e bordas arredondadas na imagem.       | Imagem principal.                  | `<img class="ilustracao" src="banner.svg">`                  |
| `.float-animation`                          | Aplica animação de “flutuar” à imagem da hero.               | Imagens decorativas.               | `<img class="ilustracao float-animation">`                   |
| `.about_container`                          | Seção "Sobre", com layout flexível e fundo cinza claro.      | `<section>` sobre o autor/projeto. | `<section class="about_container">...</section>`             |
| `.about_image`                              | Define tamanho fixo da imagem de perfil.                     | Dentro da seção “Sobre”.           | `<div class="about_image"><img src="perfil.jpg"></div>`      |
| `.about_content`                            | Texto da seção “Sobre” (título e descrição).                 | Ao lado da imagem.                 | `<div class="about_content"><h2>Sobre mim</h2></div>`        |
| `.about_stats`                              | Linha com botões e estatísticas.                             | Dentro da “about_content”.         | `<div class="about_stats">...</div>`                         |
| `.stats-wrapper`                            | Agrupa os números e rótulos das estatísticas.                | Dentro de `.about_stats`.          | `<div class="stats-wrapper"><div class="stat-item">...</div></div>` |
| `.stat-item`                                | Cada bloco de número e rótulo.                               | Dentro do `.stats-wrapper`.        | `<div class="stat-item"><p class="stat-number">5+</p></div>` |
| `.stat-number`                              | Valor numérico de destaque.                                  | Dentro de `.stat-item`.            | `<p class="stat-number">10+</p>`                             |
| `.stat-label`                               | Texto pequeno abaixo do número.                              | Dentro de `.stat-item`.            | `<p class="stat-label">Projetos</p>`                         |
| `.contact_container`                        | Seção de contato, organizada em duas colunas (grid).         | `<section>` de contato.            | `<section class="contact_container">...</section>`           |
| `.contact_info`                             | Bloco textual do contato (título e descrição).               | Dentro do contato.                 | `<div class="contact_info"><h4>Fale comigo</h4></div>`       |
| `.social_container`                         | Agrupa os ícones sociais lado a lado.                        | Dentro do contato.                 | `<div class="social_container">...</div>`                    |
| `.social_icon`                              | Define tamanho, borda e efeito hover nos ícones.             | Links de redes sociais.            | `<a class="social_icon" href="#"><img src="icon.svg"></a>`   |
| `.sucess_container`                         | Layout da página de sucesso (centralizado verticalmente).    | Página “sucesso.html”.             | `<section class="sucess_container">...</section>`            |
| `.sucess_content`                           | Bloco central com texto e ícone.                             | Dentro da `sucess_container`.      | `<div class="sucess_content"><h1>Enviado!</h1></div>`        |
| `.sucess_icon`                              | Círculo com ícone de sucesso animado.                        | Dentro da `sucess_content`.        | `<div class="sucess_icon"><svg>...</svg></div>`              |
| `.sucess_icon svg`                          | Define tamanho e cor do ícone SVG.                           | Ícone de sucesso.                  | `<svg>...</svg>`                                             |
| `.sucess_illustration`                      | Aplica filtro de cor à ilustração da página de sucesso.      | Imagem decorativa.                 | `<img class="sucess_illustration" src="ok.svg">`             |
| `.sucess_content h1` / `.sucess_content h4` | Títulos e subtítulos da mensagem final.                      | Dentro de `.sucess_content`.       | `<h1>Mensagem enviada!</h1>`                                 |
| `footer`                                    | Rodapé da página, com fundo em gradiente roxo.               | `<footer>` global.                 | `<footer>© 2025</footer>`                                    |
| `form`                                      | Define o layout da área de formulário.                       | `<form>` de contato.               | `<form><input></form>`                                       |
| `form label`                                | Estilo dos rótulos dos campos.                               | Dentro do form.                    | `<label for="nome">Nome</label>`                             |
| `form input`, `form textarea`               | Estilo dos campos de texto.                                  | Dentro do form.                    | `<input type="text">`, `<textarea></textarea>`               |
| `form input:focus`, `form textarea:focus`   | Destaque roxo quando o campo está em foco.                   | Campos ativos.                     | —                                                            |
| `form span`                                 | Mensagem de erro ou alerta abaixo dos campos.                | Após inputs.                       | `<span>Campo obrigatório</span>`                             |

<br />

### ✅ **Regras Especiais e Estruturais**

| **Regra / Seletor**                | **Função**                                               | **Descrição**                           |
| ---------------------------------- | -------------------------------------------------------- | --------------------------------------- |
| `@keyframes float`                 | Define animação de flutuação para imagens.               | Move o elemento suavemente no eixo Y.   |
| `@keyframes scaleIn`               | Anima o ícone de sucesso aparecendo em escala.           | Efeito “zoom in” ao carregar.           |
| `@media screen and (max-width: …)` | Regras de responsividade para tablets e smartphones.     | Adapta tamanhos, espaçamentos e layout. |
| `:hover`                           | Estado de interação do usuário (mouse sobre o elemento). | Usado em botões, links e ícones.        |
| `:focus`                           | Estado ativo de campos de formulário.                    | Destaca o campo selecionado.            |
| `:root`                            | Contém variáveis globais de cor e sombra.                | Facilita manutenção e consistência.     |


