import styled from "styled-components"
import ThemeChanger from "../ThemeChanger"


const StyledAside = styled.aside`
    width: 290px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    row-gap: 16px;
    align-self: stretch;

    @media (max-width: ${({theme}) => theme.breakpoints.tv}px) {
        display: none;
    }
`

const AsideScroll = styled.section`        
        width: 290px;
        transition: all 0.4s ease 0s;
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        z-index: 1;
        margin-top: 20px;
`

const Aside:React.FC = () => {
    return (
        <StyledAside>
            <AsideScroll>
                <ThemeChanger toggleTheme={() => {}}/>
            </AsideScroll>
        </StyledAside>
    )
}

export default Aside