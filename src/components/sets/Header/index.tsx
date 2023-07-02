import styled, { useTheme } from "styled-components";
import UserActions from "./UserActions";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

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
    
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        padding: 0 10px;
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

type User = {
    id: number;
    username: string;
}

interface HeaderProps {
    toggleTheme: Function;
    windowWidth: number;
    user: User;
    type: "sale" | "home";
}

const loading = () => <span className="Loader"/>

const DynamicMenu = dynamic(() => import("./Menu"), {
    ssr: false,
    loading
})

const DynamicNav = dynamic(() => import("./Nav"), {
    ssr: false,
    loading
})

const DynamicGoBackButton = dynamic(() => import("./GoBackButton"), {
    ssr: false,
    loading
})

const Header: React.FC<HeaderProps> = ({
    toggleTheme,
    windowWidth,
    user,
    type
}) => {
    const theme = useTheme()
    const [isFocusing, setIsFocusing] = useState(false)

    const changeFocus = () => setIsFocusing(!isFocusing)

    const outspaceClickHandler = () => changeFocus()

    return (
        <>
            <FakeSpace/>

            <StyledHeader>
                <section>
                    <BackgroundShadow show={isFocusing}/>

                    <OutSpace show={isFocusing} onClick={outspaceClickHandler}/>

                    <section>
                        {type == "home"&&windowWidth<=theme.breakpoints.tv&&windowWidth>0&&<DynamicMenu toggleTheme={toggleTheme} user={user}/>}

                        {type == "sale"&&windowWidth<=theme.breakpoints.tv&&windowWidth>0&&<DynamicGoBackButton />}

                        <Link href={"/"}>
                            <Image src={theme.images.logo} alt="pechinchou icon" width={132} height={32}/>
                        </Link>

                        {windowWidth>theme.breakpoints.tv&&<DynamicNav isFocusing={isFocusing} changeFocus={changeFocus}/>}
                    </section>

                    <UserActions isFocusing={isFocusing} changeFocus={changeFocus} user={user} windowWidth={windowWidth}/>
                </section>
            </StyledHeader>
        </>
    )
}

export default Header