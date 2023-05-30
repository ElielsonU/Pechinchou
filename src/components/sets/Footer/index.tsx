import styled from "styled-components";
import FooterWelcome from "./FooterWelcome";
import FooterHeader from "./FooterHeader";
import OtherPagesSection from "./OtherPagesSection";
import Image from "next/image";
import { Generic } from "@/components/models";
import { useState } from "react";

interface FooterProps {
    hidden?: boolean;
    visible?: boolean;
    changeVisibility?: React.MouseEventHandler;
}

const StyledFooter = styled.footer<FooterProps>`
    height: max-content;
    max-width: 100%;
    padding: 20px 0 30px;
    width: 100%;
    bottom: 0;
    left: 0;
    overflow: hidden;
    color: ${({theme}) => theme.colors.c6};
    background: ${({theme}) => theme.colors.c1};
    display: ${(props) => !props.hidden || props.visible ? "flex" : "none"};
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 35px;
    z-index: 1005;
    position: fixed;

    .Hidden {
        display: none;
    }

    .Copyright {
        display: block;
        text-align: center;
    }

    .Cross {
        background-color: transparent;
        border: 0;
        position: absolute;
        right: 10px;
        top: 20px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tv}px) {
        display: none;
    }
`

interface BackgroundShadowProps {
    visible?: boolean;
}

const BackgroundShadow = styled.div<BackgroundShadowProps>`
    display: ${(props) => props.visible ? "block" : "none"};
    height: 100vh;
    width: 100vw;
    right: 0;
    z-index: 1000;
    max-width: 100vw;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    cursor: pointer;
    top: 0px;

    @media (max-width: ${({theme}) => theme.breakpoints.tv}px) {
        display: none;
    }
`

const Footer:React.FC<FooterProps> = ({
    hidden,
    visible,
    changeVisibility
}) => {

    return (
        <>
            <StyledFooter hidden={hidden} visible={visible}>
                <FooterHeader />
                <FooterWelcome />
                <OtherPagesSection />
                <Generic>
                    L R Intermediação e Agenciamento LDTA - 43.690.532/0001-00 R. São João, 371 - São Benedito, Pau dos Ferros - RN.
                    <Generic className="Copyright">© Pechinchou 2014-2023</Generic>
                </Generic>
                {hidden?
                <button className="Cross" onClick={changeVisibility}>
                    <Image src="https://pechinchou.com.br/_next/static/media/iconClose.c4302c0e.svg" alt="cross" width={18} height={18}/>
                </button> 
                :<></>}
            </StyledFooter>

            {hidden
            ?<BackgroundShadow visible={visible} onClick={changeVisibility}/>
            :null}
        </>
    )
}

export default Footer