import styled, { useTheme } from "styled-components";
import Image from "next/image";
import { Generic, PLink } from "@/components/models";


const StyledOtherPagesSection = styled.section`
    display: flex;
    width: 1360px;
    max-width: 100%;
    justify-content: space-between;

    > .Links {
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 0;
        gap: 12px;

        > .Title {
            margin-bottom: 5px;
            display: block;
        }
    }
`

const FollowUs = styled.div`
    .Title {
        margin-bottom: 10px;
        display: block;
    }

    .Links {
        display: flex;
        gap: 10px;
        > a {
            display: block;
            width: 35px;
        }
    }
`

const OtherPagesSection:React.FC = () => {
    const theme = useTheme()

    return (
        <StyledOtherPagesSection>
            <ul className="Links">
                <Generic font_size={theme.font_sizes.medium} font_weight="900" className="Title">Sobre a Pechinchou</Generic>
                <li><a href="#">Nosso Time</a></li>
                <li><a href="#">Blog Pechinchou</a></li>
            </ul>
            
            <ul className="Links">
                <Generic font_size={theme.font_sizes.medium} font_weight="900" className="Title">Páginas Especiais</Generic>
                <li><a href="#">Dia das Mães</a></li>
                <li><a href="#">Dia dos Pais</a></li>
                <li><a href="#">Black Friday</a></li>
            </ul>
            
            <ul className="Links">
                <Generic font_size={theme.font_sizes.medium} font_weight="900" className="Title">Suporte</Generic>
                <li><a href="#">Fase Conosco</a></li>
                <li><a href="#">Termos de uso</a></li>
                <li><a href="#">Política de Privacidade</a></li>
            </ul>

            <FollowUs>
                <Generic font_size={theme.font_sizes.medium} font_weight="900" className="Title">Siga o Pechinchou</Generic>
                <div className="Links">
                    <PLink href="#">
                        <Image src="https://pechinchou.com.br/_next/static/media/IconInstagramFooter.7d2537b0.svg" alt="instagram" width={35} height={35}/>
                    </PLink>
                    
                    <PLink href="#">
                        <Image src="https://pechinchou.com.br/_next/static/media/IconWhatsappFooter.87b4ee95.svg" alt="whatsapp" width={35} height={35}/>
                    </PLink>
                    
                    <PLink href="#">
                        <Image src="https://pechinchou.com.br/_next/static/media/IconFacebookFooter.34697ece.svg" alt="facebook" width={35} height={35}/>
                    </PLink>

                    <PLink href="#">
                        <Image src="https://pechinchou.com.br/_next/static/media/IconTelegramFooter.27b68c5e.svg" alt="telegram" width={35} height={35}/>
                    </PLink>

                    <PLink href="#">
                        <Image src="https://pechinchou.com.br/_next/static/media/IconLinkedinFooter.77d1cc59.svg" alt="linkedin" width={35} height={35}/>
                    </PLink>

                    <PLink href="#">
                        <Image src="https://pechinchou.com.br/_next/static/media/IconYoutubeFooter.2d58b478.svg" alt="youtube" width={35} height={35}/>
                    </PLink>

                    <PLink href="#">
                        <Image src="https://pechinchou.com.br/_next/static/media/IconTwitterFooter.d294cc31.svg" alt="twitter" width={35} height={35}/>
                    </PLink>
                </div>
            </FollowUs>
        </StyledOtherPagesSection>
    )
}

export default OtherPagesSection