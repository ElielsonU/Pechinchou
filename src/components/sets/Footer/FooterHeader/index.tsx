import styled, { useTheme } from "styled-components";
import { Generic } from "@/components/models";

const StyledFooterHeader = styled.section`
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
    justify-content: center;
    gap: 200px;
    text-align: center;
    font-size: ${({theme}) => theme.font_sizes.largest};

    > strong > span {
        display: block;
        font-size: 0.5em;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tv}px) {
        justify-content: space-around;
        font-size: ${({theme}) => theme.font_sizes.medium};
        gap: 0;
    }
`

const FooterHeader: React.FC = () => {
    const theme = useTheme()

    return (
        <StyledFooterHeader>
            <Generic as={"strong"} font_weight="900">
                +1 Milhão
                <Generic font_weight="900" color={theme.colors.c4}>De usuários</Generic>
            </Generic>

            <Generic as={"strong"} font_weight="900">
                +300
                <Generic font_weight="900" color={theme.colors.c4}>Lojas Cadastradas</Generic>
            </Generic>
            
            <Generic as={"strong"} font_weight="900">
                +100.000
                <Generic font_weight="900" color={theme.colors.c4}>Promoções postadas</Generic>
            </Generic>
        </StyledFooterHeader>
    )
}

export default FooterHeader