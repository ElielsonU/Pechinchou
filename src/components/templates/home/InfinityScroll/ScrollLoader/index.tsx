import styled from "styled-components";

const ScrollLoader = styled.div`
    @keyframes rotate {
        0% { rotate: 0deg; }
        100% { rotate: 360deg; }
    }

    justify-self: center;
    position: absolute;
    bottom: -50px;

    ::after {
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

export default ScrollLoader