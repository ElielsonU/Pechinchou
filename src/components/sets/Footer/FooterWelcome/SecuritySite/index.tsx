import styled, { useTheme } from "styled-components";
import { Generic } from "@/components/models";
import Image from "next/image";
import React from "react";

const StyledSecuritySite = styled.div`
    a {
        display: block;
        background-color: ${({theme}) => theme.colors.c2};
        padding: 16px;
        margin-top: 10px;
        border-radius: 8px;
    }
`

const SecuritySite:React.FC = () => {
    const theme = useTheme()

    return (
        <StyledSecuritySite>
            <Generic as="h2" font_size={theme.font_sizes.medium} font_weight="900">Dados seguros</Generic>
            <a href="#"><Image src="https://pechinchou.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FgoogleBrowsing.2fcda71b.png&w=384&q=75" alt="google safe browsing" width={140} height={35}/></a>
        </StyledSecuritySite>
    )
}

export default SecuritySite