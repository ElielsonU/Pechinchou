import styled, { useTheme } from "styled-components";
import UserActions from "./UserActions";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import Nav from "./Nav";
import { useState } from "react";

const StyledHeader = styled.header`
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    width: 100%;
    background-color: ${({theme}) => theme.colors.c1};
    padding: 0 27px;
    outline: 1px solid ${({theme}) => theme.colors.c3};
    z-index: 1000;

    > section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        width: 100%;
        max-width: 1336px;
        height: 60px;

        img {
            vertical-align: text-bottom;
        }
    
        > section:first-of-type {
            display: flex;
            gap: 50px;
            align-items: center;
    
            @media (max-width: ${({theme}) => theme.breakpoints.tv}px) {
                gap: 15px;
            }
        }
    
        a:hover {
            opacity: 0.7;
        }
    }
    
    

`

interface HiddenProps {
    show: boolean;
}

const BackgroundShadow = styled.div<HiddenProps>`
    z-index: -100;
    position: fixed;
    width: 100%;
    height: calc(100% - 61px);
    background-color: ${({theme}) => theme.colors.c5};
    z-index: 0;
    transition: 500ms ease opacity;
    opacity: ${props => props.show?"1":"0"};
    display: ${props => props.show?"block":"none"};
    bottom: 0;
    right: 0;
`

const OutSpace = styled.div<HiddenProps>`
    display: ${props => props.show?"block":"none"};
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    right: 0;
`

const FakeSpace = styled.div`
    height: 60px;
    width: 100%;
`

interface HeaderProps {
    toggleTheme: Function;
}

const Header: React.FC<HeaderProps> = ({
    toggleTheme
}) => {
    const theme = useTheme()
    const [isFocusing, setIsFocusing] = useState(false)

    const changeFocus = () => {
        setIsFocusing(!isFocusing)
    }

    const handler = () => {
        changeFocus()
    }

    return (
        <>
            <FakeSpace/>
            <StyledHeader>
                <section>
                    <BackgroundShadow show={isFocusing}/>
                    <OutSpace show={isFocusing} onClick={handler}/>
                    <section>
                        <Menu toggleTheme={toggleTheme}/>
                        <Link href={"/"}>
                            <Image src={theme.images.logo} alt="pechinchou icon" width={132} height={32}/>
                        </Link>
                        <Nav isFocusing={isFocusing} changeFocus={changeFocus}/>
                    </section>
                    <UserActions isFocusing={isFocusing} changeFocus={changeFocus}/>
                </section>
            </StyledHeader>
        </>
    )
}

export default Header