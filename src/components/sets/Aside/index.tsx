import styled from "styled-components"
import ThemeChanger from "../ThemeChanger"
import Image from "next/image"

const StyledAside = styled.aside`
    width: 340px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    row-gap: 16px;
    align-self: stretch;

    @media (max-width: ${({theme}) => theme.breakpoints.tv}px) {
        display: none;
    }
`

const AsideScroll = styled.section`        
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        z-index: 1;
        margin-top: 20px;
        color: ${({theme}) => theme.colors.c6};
        
        .ToggleTheme {
            padding: 20px 90px;
        }
        
        > section {
            padding: 20px 40px;
            margin: 0;
            background-color: ${({theme}) => theme.colors.c1};
            border-radius: 8px;
            text-align: center;
        }

        .SocialMediaAds {
            font-size: ${({theme}) => theme.font_sizes.small};
            
            > strong {
                font-size: ${({theme}) => theme.font_sizes.medium};
            }
            
            a {
                background-color: rgb(37, 156, 37);
                width: 232px;
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
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

interface AsideProps {
    toggleTheme: Function;
}

const Aside:React.FC<AsideProps> = ({
    toggleTheme
}) => {
    return (
        <StyledAside>
            <AsideScroll>
                <section className="ToggleTheme">
                    <ThemeChanger toggleTheme={toggleTheme}/>
                </section>
                
                <section className="SocialMediaAds">
                    <strong>Receba no WhatsApp</strong>
                    <p>Acompanhe as melhores promoções da internet no seu WhatsApp</p>

                    <a href="#">
                        <Image src="https://pechinchou.com.br/_next/static/media/IconWhatsApp.093fa59b.svg" alt="WhatsApp" width={15} height={15}/>
                        Receber as melhores
                    </a>
                </section>

            </AsideScroll>
        </StyledAside>
    )
}

export default Aside