import { Generic } from "@/components/models";
import Image from "next/image";
import styled from "styled-components";
import SwiperProduct from "./SwiperProduct";

const StyledRelatedProducts = styled.section`
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 200px;
    padding: 0 15px;
    background: ${({theme}) => theme.colors.c1};
    position: relative;

    > .Title {
        display: flex;
        gap: 8px;
        align-items: center;

        .Filtered {
            filter: invert(${({theme}) => theme.filter.invert});
        }
    }
`

const RelatedProducts:React.FC = () => {
    return (
        <StyledRelatedProducts>
            <div className="Title">
                <Generic as="h3">Você também pode curtir</Generic>
                <Generic>Produtos relacionados</Generic>
                <Image src="https://pechinchou.com.br/_next/static/media/IconInfoRecentText.fb1585db.svg" alt="info" width={13} height={13} className="Filtered"/>
            </div>

            <SwiperProduct />

            
        </StyledRelatedProducts>
    )
}

export default RelatedProducts