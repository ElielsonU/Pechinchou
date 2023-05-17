import styled from "styled-components";


const StyledNav = styled.nav`
    display: flex;
    gap: 20px;
    img {
        filter: brightness(${({theme}) => theme.filter.brightness});
    }

    @media (max-width: ${({theme}) => theme.breakpoints.desktop}px) {
        display: none;
    }
`

const CategoryButton = styled.button`
    gap: 8px;
    display: flex;
    background-color: transparent;
    align-items: center;
    color: ${({theme}) => theme.colors.c6};
    border: 0;
    padding: 0;
    font-weight: 500;

    > img:last-of-type {
        transition: 500ms rotate;
        rotate: ${(props) => props.value?"180deg":"0deg"};
    }
`

interface CategoriesProps {
    show: boolean,
}

const Categories = styled.div<CategoriesProps>`
    position: absolute;
    transition: all 300ms linear;
    height: ${props => props.show?"320px":"0"};
    overflow: hidden;
    width: 100%;
    z-index: 1000;
    top: 68px;

    section {
        background-color: ${({theme}) => theme.colors.c1};
        display: flex;
        font-weight: 700;
        font-size: ${({theme}) => theme.font_sizes.small};
        align-items: center;
        justify-content: space-between;
        row-gap: 5px;
        flex-wrap: wrap;
        border-radius: 12px;
        width: 794px;
        height: 320px;
        padding: 24px;
        z-index: 10;
    }

    section > div {
        font-size: ${({theme}) => theme.font_sizes.medium};
        justify-content: space-between;
        display: flex;
        width: 100%;
    }

    section > div:first-of-type img {
        margin-right: 5px;
            vertical-align: middle;
    }

    .image {
        filter: none;
    }

    div > a:first-of-type {
        grid-column: 6;
        font-size: ${({theme}) => theme.font_sizes.tiny};
        text-decoration: none;
        color: ${({theme}) => theme.colors.c9};
        border: 1px solid ${({theme}) => theme.colors.c10};
        border-radius: 3px;
        padding: 8px;
        font-weight: 900;
        transition: all 200ms linear 0s;

        :hover {
            background-color: ${({theme}) => theme.colors.c10};
        }
    }
`

const CategoriesList = styled.ul`
    list-style-type: none;
    display: grid;
    grid-auto-flow: column;
    justify-items: start;
    align-items: flex-end;
    height: 230px;
    width: 440px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    padding: 0;
    margin: 0;

    li > div {
        display: inline-flex;
        padding: 6px 5px;
        background-color: ${({theme}) => theme.colors.c2};
        border-radius: 3px;
        margin-right: 8px;
    }
    
    li img {
        filter: opacity(${({theme}) => theme.filter.opacity}) brightness(${({theme}) => theme.filter.brightness});
    }

    li > a {
        font-weight: 300;
        font-size: ${({theme}) => theme.font_sizes.small};
        text-decoration: none;
        color: ${({theme}) => theme.colors.c6};
        vertical-align: text-top;

        :hover {
            opacity: 1;
            text-decoration: underline;
        }
    }
`

const Shops = styled.a`
    color: ${({theme}) => theme.colors.c6};
    font-weight: 500;
    text-decoration: none;

    :hover {
        cursor: pointer;
    }

    ::before {
        vertical-align: text-bottom;
        display: inline-block;
        content: "";
        width: 25px;
        height: 20px;
        background-repeat: no-repeat;
        background-image: url(https://pechinchou.com.br/_next/static/media/IconHeaderStore.b64032a3.svg);
        filter: brightness(${({theme}) => theme.filter.brightness});
        background-position: 0%;
    }
`

export {
    StyledNav,
    Categories,
    CategoriesList,
    CategoryButton,
    Shops
}