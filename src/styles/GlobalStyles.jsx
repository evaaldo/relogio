import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@200;300;400;500;600;700;800;900&display=swap');

    :root {
        --preto: #000;
        --branco: #fff;
        --fundo: #F15412;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--fundo);
        height: 100vh;
        max-width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Chivo Mono', monospace;
    }

`

export default GlobalStyle
