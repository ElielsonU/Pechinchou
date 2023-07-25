import styled, { useTheme } from "styled-components";
import { Generic } from "@/components/models";
import Image from "next/image";
import React from "react";

const StyledWelcomeText = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    max-width: 100%;

    @media (max-width: ${({theme}) => theme.breakpoints.tv}px) {
        width: 100%;
    }
`

const WelcomeText: React.FC = () => {
    const theme = useTheme()

    return (
        <StyledWelcomeText>
            <Generic as={"h2"} font_size={theme.font_sizes.medium}>👋🏼 Bem vindo ao Pechinchou!</Generic>
            <Generic as={"p"} font_size={theme.font_sizes.small} color={theme.colors.c6}>
                Mais de 1 milhão de usuários como você já se juntaram à nossa comunidade. São mais de 100 mil ofertas verificadas. Juntos, compartilhamos nossas experiências e agradecemos para nossas compras.
            </Generic>
            <Image src="https://pechinchou.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FimageTeam.9d2f95e8.png&w=3840&q=75" width={300} height={40} alt="image"/>
        </StyledWelcomeText>
    )
}

export default WelcomeText