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

    .DarkMode {
        gap: 10px;
        > input {
            margin-left: auto;
            margin-right: 0;
            appearance: none;
            cursor: pointer;
            width: 30px;
            height: 15px;
            border-radius: 8px;
            background-color: #dee0e0;
            position: relative;
            transition: background-color 500ms ease;
            
            ::before {
                transition: right 300ms ease-out;
                right: 15px;
                box-sizing: content-box;
                content: " ";
                display: inline-block;
                position: absolute;
                top: -1px;
                border-radius: 50%;
                background-color: #f2f4f6;
                border: 1px solid #707274;
                width: 15px;
                height: 15px;
            }

            :checked {
                background-color: ${({theme}) => theme.colors.c7};
                ::before {
                    right: 0;
                }
            }
        }

        >img {
            filter: brightness(${({theme}) => theme.filter.brightness});
        }
    }

    .Red {
        color: ${({theme}) => theme.colors.c7} !important;
    }
`

export default GlobalStyle