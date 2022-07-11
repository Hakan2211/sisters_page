import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    :root{
        --primary:#ffa21f;
        --primary-light:#ffc170;
        --primary-dark:#e08300;

        --secondary:#c45131;
        --secondary-light:#d6765c;
        --secondary-dark:#933d25;

        --tertiary:#2fc6b7;
        --tertiary-light:#bdefec;
        --tertiary-dark:#239589;

        --black:#041010;
        --white:#000000;
        --grey:#a3a3a3;
        --grey-light:#d6d6d6;
        --grey-dark:#666666;

        --borderRound: 12px;

        --font-primary:"Quicksand"


    }

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

`

export default GlobalStyles
