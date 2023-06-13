import Image from "next/image";
import styled from "styled-components";
import MainInfos from "./MainInfos";

const StyledSaleCard = styled.section`
    position: relative;
    width: 100%;
    height: 300px;
    background: ${({theme}) => theme.colors.c1};
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 50px;
    padding: 16px 24px;

    > .Image {
        background-color: #fff;
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
    }

`

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
    comments: []
}

interface SaleCardProps {
    sale: Sale;
}

const SaleCard:React.FC<SaleCardProps> = ({
    sale
}) => {
    return (
        <StyledSaleCard>
            <div className="Image">
                <img src={sale.img} alt={sale.name}/>
            </div>

            <MainInfos sale={sale}/>
        </StyledSaleCard>
    )
}

export default SaleCard