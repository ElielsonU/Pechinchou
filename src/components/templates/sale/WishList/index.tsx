import { Generic } from "@/components/models";
import styled, { useTheme } from "styled-components";
import TermsList from "./TermsList";

const StyledWishList = styled.section`
    position: relative;
    width: 100%;
    border-radius: 4px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const WishList:React.FC = () => {
    const theme = useTheme()

    return (
        <StyledWishList>
            <Generic as="h3" font_size={theme.font_sizes.medium}>Crie um alerta de desejos</Generic>
            
            <Generic>Baixe o app e adicione um temro na lista de desejos</Generic>

            <TermsList />
        </StyledWishList>
    )
}

export default WishList