import styled from "styled-components";

const Main = styled.main`
    display: flex;
    margin-top: 5px;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 72px;
    position: relative;
    margin: 0 auto;
    width: calc(100% - 48px);
    max-width: 1336px;
    flex-wrap: wrap;

    > section {
        color: ${({theme}) => theme.colors.c6};
        width: calc(100% - 315px);
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tv}px) {
        justify-content: center;
        > section {
            width: 100%;
        }
    }
`

export default Main