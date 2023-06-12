import styled, { useTheme } from "styled-components";
import React from "react";
import { PLink } from "@/components/models";
import Shops from "./Shops";
import CategoryButton from "./CategoriesButton";

interface NavProps {
    isFocusing: boolean;
    changeFocus: Function;
}

const StyledNav = styled.nav`
    display: flex;
    align-items: flex-end;
    vertical-align: text-bottom;
    gap: 20px;

    img {
        filter: brightness(${({theme}) => theme.filter.brightness});
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tv}px) {
        display: none;
    }
`

const Nav: React.FC<NavProps> = ({
    isFocusing,
    changeFocus
}) => {
    const theme = useTheme()

    return (
        <StyledNav>
            <CategoryButton changeFocus={changeFocus} isFocusing={isFocusing}/>

            <Shops/>
            
            <PLink href="#" color={theme.colors.c6}>Avaliações</PLink>
            <PLink href="#" color={theme.colors.c6}>Blog</PLink>
        </StyledNav>
    )
}

export default Nav