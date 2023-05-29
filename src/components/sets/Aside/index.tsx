import styled, { useTheme } from "styled-components"
import ThemeChanger from "../ThemeChanger"
import Footer from "../Footer"
import Image from "next/image"
import { useEffect, useState } from "react"

import { Generic } from "@/components/models"

const StyledAside = styled.aside`
    color: ${({theme}) => theme.colors.c6};
    width: 320px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    row-gap: 32px;
    align-self: stretch;

    @media (max-width: ${({theme}) => theme.breakpoints.tv}px) {
        display: none;
    }

    #Fix {
        position: fixed;
        top: 60px;
    }
`

const AsideScroll = styled.section`        
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
            width: 320px;
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

const AdsCoupons = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    .Header {
        padding: 10px 15px;
        border-radius: 12px;
        background-color: ${({theme}) => theme.colors.c1};
        align-items: center;
        display: flex;

        .Icon {
            background-color: ${({theme}) => theme.colors.c13};
            box-sizing: content-box;
            display: inline-block;
            padding: 8px;
            border-radius: 8px;
            margin-right: 10px;
            line-height: 10px;
            
            > img {
                width: 14px;
                height: 14px;
                filter: invert(${({theme}) => theme.filter.invert});
            }
        }
    }

    .Coupon {
        overflow: hidden;
        width: 100%;
        box-sizing: border-box;
        height: 101px;
        cursor: pointer;
        background: ${({theme}) => theme.colors.c1};
        border-radius: 6px;
        padding-left: 20px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        transition: scale 0.1s ease 0s;
        position: relative;
        text-align: left;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: repeat(3, 1fr);
        border: 0;

        :hover {
            scale: 1.025;
            background-color: ${({theme}) => theme.colors.c3};
        }

        ::before {
            content: "";
            width: 1px;
            height: 140px;
            box-sizing: border-box;
            position: absolute;
            left: -3px;
            top: -10px;
            border-left: 6px dashed ${({theme}) => theme.colors.c2};
        }

        ::after {
            content: "";
            z-index: 1px;
            width: 50px;
            height: 56px;
            box-sizing: border-box;
            position: absolute;
            right: -35px;
            border-radius: 100%;
            background-color: ${({theme}) => theme.colors.c2};
        }

        .Store {
            width: 50px;
            grid-row: 1/4;
            margin-right: 20px;
            border-radius: 8px;
            border: 1px solid ${({theme}) => theme.colors.c6};
        }

        #Up {
            align-self: flex-end;
        }

        #Down {
            align-self: flex-start;
            white-space: nowrap;
        }
    }
`

const AdsPosts = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;

    .Header {
        width: 100%;
        height: 44px;
        border-radius: 8px;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px 15px;
        display: flex;
        -webkit-box-pack: justify;
        gap: 10px;
        position: relative;
        background: ${({theme}) => theme.colors.c1};
        
        .Icon {
            background-color: ${({theme}) => theme.colors.c2};
            box-sizing: content-box;
            padding: 8px;
            width: 12px;
            height: 12px;
            border-radius: 8px;
        }
    
        .All {
            flex: 1;
            text-align: right;
        }
    }


    .Post {
        height: 92px;
        width: 100%;
        border-radius: 8px;
        padding: 16px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        -webkit-box-align: center;
        align-items: center;
        background: ${({theme}) => theme.colors.c1};
        cursor: pointer;
        position: relative;
        column-gap: 20px;
        row-gap: 5px;

        :hover {
            background-color: ${({theme}) => theme.colors.c13};
        }

        .PostImage {
            width: 60px;
            height: 60px;
            grid-row: 1/4;
        }

        .Title {
            grid-row: 1/3;
        }

        > :nth-child(n + 2) {
            grid-column: 2/5;
        }
    }
`

const ShowFooter = styled.button`
    font-size: ${({theme}) => theme.font_sizes.medium};
    text-transform: capitalize;
    background-color: transparent;
    border: none;
    color: inherit;

    ::after {
        content: "";
        margin-left: 14px;
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-bottom: 3px;
        rotate: 45deg;
        border-bottom: 2px solid;
        border-right: 2px solid;
    }
`

interface AsideProps{
    toggleTheme: Function;
}

const Aside:React.FC<AsideProps> = ({
    toggleTheme
}) => {
    const theme = useTheme()
    const [scrollY, setScrollY] = useState(0)

    if (typeof document != "undefined") {
        document.addEventListener("scroll", () => {
            setScrollY(window.scrollY)
        })
    }

    return (
        <>
            <StyledAside>
                <AsideScroll id={`${scrollY > 1400? "Fix" : null}`}>
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
                </AsideScroll>

                <AdsCoupons>
                    <div className="Header">
                        <div className="Icon">
                            <img src="https://pechinchou.com.br/_next/static/media/IconCouponAds.9ddd1649.svg" alt="Coupouns" width={14} />
                        </div>
                        <Generic as={"h5"} font_size={theme.font_sizes.small} font_weight="500">
                            Cupons de descontos
                        </Generic>
                    </div>

                    <button className="Coupon">
                        <img src="https://pechinchou.com.br/_next/image?url=https%3A%2F%2Fadmin.pechinchou.com.br%2Fmedia%2Fimg%2Fstore%2F03%2F03%2FMagalu0.png.jpg&w=1200&q=75" alt="Magazine Luiza" className="Store"/>
                        <Generic color="#82888c" id="Up">Cupom Magazine Luiza</Generic>
                        <Generic color={theme.colors.c6} font_size={theme.font_sizes.medium} font_weight="900">R$ 20 Acima de R$ 999</Generic>
                        <Generic color="#82888c" id="Down">Categoria Eletrodomésticos</Generic>
                    </button>
                    
                    <button className="Coupon">
                        <img src="https://pechinchou.com.br/_next/image?url=https%3A%2F%2Fadmin.pechinchou.com.br%2Fmedia%2Fimg%2Fstore%2F03%2F03%2FCasas_bahia.png.jpg&w=1200&q=75" alt="Casas Bahia" className="Store"/>
                        <Generic color="#82888c" id="Up">Cupom Casas Bahia</Generic>
                        <Generic color={theme.colors.c6} font_size={theme.font_sizes.medium} font_weight="900">Até 20% OFF</Generic>
                        <Generic color="#82888c" id="Down">Categoria Eletrodomésticos</Generic>
                    </button>
                    
                    <button className="Coupon">
                        <img src="https://pechinchou.com.br/_next/image?url=https%3A%2F%2Fadmin.pechinchou.com.br%2Fmedia%2Fimg%2Fstore%2F11%2F06%2FRectangle_413_19.png&w=1200&q=75" alt="Natura" className="Store"/>
                        <Generic color="#82888c" id="Up">Cupom Natura</Generic>
                        <Generic color={theme.colors.c6} font_size={theme.font_sizes.medium} font_weight="900">10% OFF</Generic>
                        <Generic color="#82888c" id="Down">Categoria Moda, Beleza e Perfumaria</Generic>
                    </button>
                </AdsCoupons>

                <AdsPosts>
                    <div className="Header">
                        <img src="https://pechinchou.com.br/_next/static/media/IconPosts.1d2d1489.svg" alt="posts" className="Icon"/>
                        <Generic font_size={theme.font_sizes.medium} color={theme.colors.c6}>Os melhores posts</Generic>
                        <Generic as={"a"} href="#" color={"#5f7fdb"} className="All">ver todos</Generic>
                    </div>

                    <a href="#" className="Post">
                        <img src="https://pechinchou.com.br/_next/image?url=https%3A%2F%2Fadmin.pechinchou.com.br%2Fmedia%2FBlog.png&w=1200&q=75" alt="TV" className="PostImage"/>
                        <Generic className="Title" font_size={theme.font_sizes.medium}>O que saber antes de comprar uma TV?</Generic>
                        <Generic color="#5f7fdb">Ir para a publicação</Generic>
                    </a>
                    
                    <a href="#" className="Post">
                        <img src="https://pechinchou.com.br/_next/image?url=https%3A%2F%2Fadmin.pechinchou.com.br%2Fmedia%2FBlog2.png&w=3840&q=75" alt="Air Fryer" className="PostImage"/>
                        <Generic className="Title" font_size={theme.font_sizes.medium}>Air Fryer em promoção?</Generic>
                        <Generic color="#5f7fdb">Ir para a publicação</Generic>
                    </a>
                    
                    <a href="#" className="Post">
                        <img src="https://pechinchou.com.br/_next/image?url=https%3A%2F%2Fadmin.pechinchou.com.br%2Fmedia%2F1-774x1024.jpg.png&w=3840&q=75" alt="TV" className="PostImage"/>
                        <Generic className="Title" font_size={theme.font_sizes.medium}>10 Celulares Mais Vendidos</Generic>
                        <Generic color="#5f7fdb">Ir para a publicação</Generic>
                    </a>
                </AdsPosts>

                <ShowFooter>
                    exibir rodapé
                </ShowFooter>
            </StyledAside>
            <Footer />
        </>
    )
}

export default Aside