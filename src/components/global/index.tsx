import { createGlobalStyle } from "styled-components";
import { theme } from "@/theme"

interface GlobalStyleProps {
    theme: typeof theme,
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    :root {
        font-size: 14px;
    }

    * {
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;
    }

    *:focus {
        outline: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        display: inline;
        font-size: inherit;
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
    
    body {
        margin: 0;
        font-family: 'DM Sans', sans-serif;
        background-color: ${({theme}) => theme.colors.c2};
        color: ${({theme}) => theme.colors.c3};
    }

    button {
        cursor: pointer;
    }

    .Red {
        color: ${({theme}) => theme.colors.c7} !important;
    }
`

export default GlobalStyle