import React, { useState } from "react";
import styled from "styled-components";
import MenuShadow from "./MenuShadow";
import MenuNav from "./MenuNav";

const StyledMenu = styled.section`
    border-radius: 100%;
    position: static;
    cursor: pointer;
    width: 36px;
    height: 36px;
    display: none;
    color: ${({theme}) => theme.colors.c6};
    border: 1px solid;
    background-image: url(https://pechinchou.com.br/_next/static/media/ButtonMenuHeaderWhite.389dabe9.svg);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 18px;
    filter: brightness(${({theme}) => theme.filter.brightness});
    
    @media (max-width: ${({theme}) => theme.breakpoints.tv}px) {
        display: block;
    }
`

type User = {
    id: number;
    username: string;
}

interface MenuProps {
    toggleTheme: Function;
    user: User;
}

const Menu: React.FC<MenuProps> = ({
    toggleTheme,
    user
}) => {
    const [isMenuFocusing, setIsMenuFocusing] = useState(false)

    const changeMenuFocus = () => {
        setIsMenuFocusing(!isMenuFocusing)
    }

    return (
        <div>
            <StyledMenu onClick={changeMenuFocus}/>
            <MenuNav show={isMenuFocusing} changeFocus={changeMenuFocus} toggleTheme={toggleTheme} user={user}/>
            <MenuShadow show={isMenuFocusing} changeFocus={changeMenuFocus}/>
        </div>
    )
}

export default Menu