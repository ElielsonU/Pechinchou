import styled, { useTheme } from "styled-components";
import { Generic } from "@/components/models";
import GetSale from "./GetSale";

const StyledMainInfos = styled.div`
    height: 190px;
    max-width: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .Title {
        max-width: 100%;
        width: 355px;
    }

    .Price {
        font-weight: 900;
        > * {
            display: block;
        }

        @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
            display: flex;
            align-items: center;
            gap: 10px;

            > h3 {
                display: flex;
                align-items: center;
                gap: 3px;
            }
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
        height: auto;
        gap: 15px;
    }
`

type Comment = {
    id: number,
    text: string,
    poster: string
}

type Sale = {
    id: number,
    name: string,
    description: string,
    value: number,
    sale: number,
    likes: number,
    posted: string,
    store: {
      img: string,
      name: string
    },
    img: string,
    categories: {
        main: string,
        sub: string
    },
    commentsQ: number
}


interface MainInfosProps {
    sale: Sale;
}

const MainInfos:React.FC<MainInfosProps> = ({
    sale
}) => {
    const theme = useTheme()

    return (
        <StyledMainInfos>
            <Generic font_size={theme.font_sizes.medium} font_weight="900" className="Title">
                {sale.name}
            </Generic>

            <div className="Price">
                <Generic as="s" color="gray">R$ {sale.value.toFixed(2)}</Generic>
                
                <Generic as="h3" color={theme.colors.c7} font_size={theme.font_sizes.medium}>
                    R$ <Generic font_size={theme.font_sizes.largest}>{sale.sale.toFixed(2)}</Generic>
                </Generic>  
            </div>

            <GetSale posted={sale.posted}/>
        </StyledMainInfos>
    )
}

export default MainInfos