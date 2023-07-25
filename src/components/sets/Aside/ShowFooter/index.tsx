import styled from "styled-components"

const ShowFooter = styled.button`
    font-size: ${({theme}) => theme.font_sizes.medium};
    text-transform: capitalize;
    background-color: transparent;
    border: none;
    color: inherit;

    ::after {
        content: "";
        margin-left: 14px;
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-bottom: 3px;
        rotate: 45deg;
        border-bottom: 2px solid;
        border-right: 2px solid;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tv}px) {
        display: none;
    }
`

export default ShowFooter