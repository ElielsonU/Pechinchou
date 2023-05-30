import styled from "styled-components";
import WelcomeText from "./WelcomeText";
import AppDownload from "./AppDownload";
import SecuritySite from "./SecuritySite";

const StyledWelcome = styled.section`
    display: flex;
    justify-content: center;
    justify-content: space-between;
    width: 1362px;
    padding: 0 10px;
    max-width: 100%;
`

const FooterWelcome:React.FC = () => {
    return (
        <StyledWelcome>
            <WelcomeText/>
            <AppDownload/>
            <SecuritySite/>
        </StyledWelcome>
    )
}

export default FooterWelcome