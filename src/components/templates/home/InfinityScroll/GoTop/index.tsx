import styled from "styled-components";

const GoTop = styled.a`
    background-color: ${({theme}) => theme.colors.c7};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: fixed;
    right: 30px;
    bottom: 50px;
    z-index: 1;

    ::before {
        content: "";
        width: 8px;
        height: 8px;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        rotate: -135deg;
        position: absolute;
        right: calc(50% - 5px);
        top: calc(50% - 3px);
    }
`

export default GoTop