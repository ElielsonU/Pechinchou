import { Generic } from "@/components/models";
import styled, { useTheme } from "styled-components";
import Image from "next/image";

const StyledDownload = styled.div`
    display: flex;
    flex-direction: column;
`

const StoresContainer = styled.div`
    width: 320px;
    background-color: ${({theme}) => theme.colors.c2};
    padding: 16px;
    border-radius: 8px;
    font-family: "DM Sans";
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
`

const Store = styled.a`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 10px;
    
    img {
        grid-row: 1/3;
    }

    > :nth-child(n + 2) {
        grid-column: 2/6;
    }
    
    #stars {
        display: flex;
        justify-content: space-between;
    }
`

const AppDownload:React.FC = () => {
    const theme = useTheme()

    return (
        <StyledDownload>
            <Generic as="h2" font_size={theme.font_sizes.medium} font_weight="900">Estamos entre os melhores</Generic>

            <StoresContainer>
                <Store href="#">
                    <Image src="https://pechinchou.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImageStoreApple.73b4c615.png&w=256&q=75" alt="apple store" width={115} height={40}></Image>
                    <Generic id="stars" font_size={theme.font_sizes.medium} font_weight="700">4,9<Image src="https://pechinchou.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImageStars.bf5c992e.png&w=384&q=75" alt="stars" width={132} height={20}/></Generic>
                    <Generic font_size={theme.font_sizes.tiny}>+2,34 mil avaliações</Generic>
                </Store>

                <Store href="#">
                    <Image src="https://pechinchou.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImageStorePlay.30c0db3f.png&w=256&q=75" alt="apple store" width={115} height={40}></Image>
                    <Generic id="stars" font_size={theme.font_sizes.medium} font_weight="700">4,7<Image src="https://pechinchou.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImageStars.bf5c992e.png&w=384&q=75" alt="stars" width={132} height={20}/></Generic>
                    <Generic font_size={theme.font_sizes.tiny}>+3,56 mil avaliações</Generic>
                </Store>
            </StoresContainer>
        </StyledDownload>
    )
}

export default AppDownload