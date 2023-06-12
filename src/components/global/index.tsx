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
        border: 0;
        background-color: transparent;
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

    .Loader {
        @keyframes rotate {
            0% { rotate: 0deg; }
            100% { rotate: 360deg; }
        }
        
        content: "";
        background-color: white;
        box-sizing: content-box;
        border-top: 4px solid ${({theme}) => theme.colors.c2};
        border-right: 4px solid ${({theme}) => theme.colors.c2};
        border-bottom: 4px solid ${({theme}) => theme.colors.c2};
        border-left: 4px solid ${({theme}) => theme.colors.c7};    
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        animation: infinite linear rotate 500ms;
    }
`

export default GlobalStyle