import styled, { useTheme } from "styled-components";
import { Generic } from "@/components/models";

const StyledFooter = styled.footer`
    height: max-content;
    max-width: 100%;
    padding-top: 20px;
    width: 100%;
    bottom: 0;
    left: 0;
    overflow: hidden;
    gap: 35px;
    background: rgb(39, 42, 44);
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    z-index: 13;
    position: fixed;

    > .Header {
        display: flex;
        width: 100%;
        -webkit-box-pack: justify;
        justify-content: center;
        gap: 200px;
        text-align: center;
        
        > strong > span {
            display: block;
        }
    }

    > .Welcome {
        display: flex;
        justify-content: center;
        -webkit-box-pack: justify;
        gap: 200px;
    }
`

const WelcomeText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const Footer:React.FC = () => {
    
    const theme = useTheme()

    return (
        <StyledFooter>
            <div className="Header">
                <Generic as={"strong"} font_size={theme.font_sizes.largest} font_weight="900" color={theme.colors.c6}>
                    +1 Milhão
                    <Generic font_size={theme.font_sizes.small} font_weight="900" color={theme.colors.c4}>De usuários</Generic>
                </Generic>

                <Generic as={"strong"} font_size={theme.font_sizes.largest} font_weight="900" color={theme.colors.c6}>
                    +300
                    <Generic font_size={theme.font_sizes.small} font_weight="900" color={theme.colors.c4}>Lojas Cadastradas</Generic>
                </Generic>
                
                <Generic as={"strong"} font_size={theme.font_sizes.largest} font_weight="900" color={theme.colors.c6}>
                    +100.000
                    <Generic font_size={theme.font_sizes.small} font_weight="900" color={theme.colors.c4}>Promoções postadas</Generic>
                </Generic>
            </div>

            <div className="Welcome">
                <WelcomeText>
                    <Generic>👋🏼 Bem vindo ao Pechinchou!</Generic>
                </WelcomeText>
            </div>

        </StyledFooter>
    )
}

export default Footer