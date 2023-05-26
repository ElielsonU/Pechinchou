import styled from "styled-components";

const StyledMenu = styled.section`
    border-radius: 100%;
    position: static;
    cursor: pointer;
    width: 36px;
    height: 36px;
    display: none;
    color: ${({theme}) => theme.colors.c6};
    border: 1px solid;
    background-image: url(https://pechinchou.com.br/_next/static/media/ButtonMenuHeaderWhite.389dabe9.svg);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 18px;
    filter: brightness(${({theme}) => theme.filter.brightness});

    @media (max-width: ${({theme}) => theme.breakpoints.tv}px) {
        display: block;
    }
`

interface HiddenProps {
    show: boolean;
}

const MenuNav = styled.nav<HiddenProps>`
    width: 260px;
    height: 100%;
    font-size: ${({theme}) => theme.font_sizes.medium};
    color: ${({theme}) => theme.colors.c6};
    z-index: 3;
    position: fixed;
    display: flex;
    overflow: hidden scroll;
    flex-direction: column;
    transition: left 400ms ease;
    left: ${(props) => props.show? "0" : "-260px"};
    border-radius: 0 10px 10px 0;
    top: 0;

    background-color: ${({theme}) => theme.colors.c1};
    padding: 30px 15px 30px 0;

    a {
        color: inherit;
        text-decoration: none;
    }
    
    > * {
        padding: 0 15px;
        display: flex;
        margin: 0;
        align-items: center;
    }

    >*:nth-child(n + 3) {
        gap: 10px;
        margin-top: 23px;
        height: 20px;
        
        > img {
            width: 16px;
            height: 16px;
            filter: brightness(${({theme}) => theme.filter.brightness});
        }
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .Cross {
        padding: 0;
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }

    hr {
        width: 210px;
        height: 0 !important;
        border: none;
        margin: 0 auto;
        border-bottom: 1px solid ${({theme}) => theme.colors.c2};
    }

    .Profile {
        font-weight: 900;
        
        > img {
            border-radius: 50%;
            margin-right: 10px;
        }
    }

    .Drawer {
        flex-wrap: wrap;
        grid-template-columns: 1fr 1fr 1fr;
        position: relative;
        cursor: pointer;
        
        input {
            cursor: pointer;
            position: absolute;
            right: 20px;
            top: 5px;
            appearance: none;
            margin: 0;
            width: 10px;
            border-bottom: 2px solid ${({theme}) => theme.colors.c4};
            border-right: 2px solid ${({theme}) => theme.colors.c4};
            transition: rotate 100ms ease;
            rotate: -45deg;
            height: 10px;

            :checked {
                rotate: 45deg;
            }
        }

    }

    label:has(input:checked) + ul {
        display: flex;
    }
    
    ul {
        font-size: ${({theme}) => theme.font_sizes.small};
        font-weight: 600;
        width: 215px;
        flex-direction: column;
        height: auto !important;
        align-items: start;
        align-self: center;
        border-radius: 8px;
        background-color: ${({theme}) => theme.colors.c2};
        list-style-type: none;
        display: none;
        padding: 15px;

        a {
            display: inline-block;
            max-width: 200px;
            overflow: hidden;
        }

        li {            
            
            white-space: nowrap;
            img {
                width: 22px;
                height: 24px;
                background-color: #dee0e0;
                border-radius: 4px;
                margin-right: 8px;
                padding: 6px 0;
                vertical-align: middle;
            }    
        }

        .Store img {
                padding: 0;
            }

        .All {
            margin-top: 10px;
            color: #5f7fdb;
        }
    }
`

const MenuShadow = styled.div<HiddenProps>`
    position: fixed;
    background-color: ${({theme}) => theme.colors.c5};
    width: 100%;
    height: 100%;
    
    display: ${(props) => props.show?"block" : "none"};
    transition: opacity 400ms ease;
    z-index: 2;
    opacity: ${(props) => props.show?"1" : "0"};
    bottom: 0;
    left: 0;
`

export { StyledMenu, MenuNav, MenuShadow }