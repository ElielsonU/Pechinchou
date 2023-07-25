import styled, { useTheme } from "styled-components";
import MainInfos from "./MainInfos";
import Interactive from "./Interactive";
import dynamic from "next/dynamic";

const DynamicInteractiveHeader = dynamic(() => import("./InteractiveHeader"), {
    ssr: false,
    loading: () => <div className="Loader"/>
})

const StyledSaleCard = styled.section`
    position: relative;
    width: 100%;
    height: 300px;
    background: ${({theme}) => theme.colors.c1};
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 50px;
    padding: 16px 24px;

    > .Image {
        background-color: white;
        padding: 6px;
        cursor: zoom-in;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        display: flex;
        border-radius: 6px;
        transition: scale 500ms ease;
        width: 190px;
        height: 190px;

        > img {
            max-width: 100%;
            max-height: 100%;
        }

        :hover {
            scale: 1.08;
        }

        @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
            width: 220px;
            height: 220px;
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
        justify-content: center;
        gap: 30px;
        height: auto;
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

interface SaleCardProps {
    sale: Sale;
    windowWidth: number;
}

const SaleCard:React.FC<SaleCardProps> = ({
    sale,
    windowWidth
}) => {
    const theme = useTheme()

    return (
        <StyledSaleCard>
            {windowWidth <= theme.breakpoints.tablet && windowWidth > 0 
            &&<DynamicInteractiveHeader store={sale.store}/>} 

            <div className="Image">
                <img src={sale.img} alt={sale.name}/>
            </div>

            <MainInfos sale={sale}/>

            <Interactive sale={sale}/>
        </StyledSaleCard>
    )
}

export default SaleCard