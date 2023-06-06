import styled, { useTheme } from "styled-components";
import { ThemeChanger } from "@/components/sets";
import { Generic } from "@/components/models";
import { useState, useEffect } from "react";
import Image from "next/image";

const StyledAsideScroll = styled.section`        
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        z-index: 1;
        transition: top 400ms ease;
        top: 0px;
        margin-top: 16px;
        
        .ToggleTheme {
            padding: 0;
            height: 58px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
        }
        
        > section {
            padding: 20px;
            margin: 0;
            background-color: ${({theme}) => theme.colors.c1};
            border-radius: 8px;
            text-align: center;
        }

        .SocialMediaAds {
            font-size: ${({theme}) => theme.font_sizes.small};
            
            a {
                background-color: rgb(37, 156, 37);
                width: 232px;
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                color: white;
                border-radius: 10px;
                cursor: pointer;
                transition: filter 0.2s ease 0s;

                :hover {
                    filter: grayscale(.3);
                }
                img {
                    margin-right: 10px;
                    vertical-align: middle;
                }
            }
        }
`

interface AsideScrollProps {
    toggleTheme: Function;
    scrollY: number;
}

const AsideScroll:React.FC<AsideScrollProps> = ({
    toggleTheme,
    scrollY
}) => {
    const theme = useTheme()

    return (
        <StyledAsideScroll id={`${scrollY > 1400? "Fix" : null}`}>
                <section className="ToggleTheme">
                    <ThemeChanger toggleTheme={toggleTheme}/>
                </section>
                
                <section className="SocialMediaAds">
                    <Generic as="strong" font_size={theme.font_sizes.medium}>Receba no WhatsApp</Generic>
                    <p>Acompanhe as melhores promoções da internet no seu WhatsApp</p>

                    <a href="#">
                        <Image src="https://pechinchou.com.br/_next/static/media/IconWhatsApp.093fa59b.svg" alt="WhatsApp" width={15} height={15}/>
                        Receber as melhores
                    </a>
                </section>
            </StyledAsideScroll>
    )
}

export default AsideScroll