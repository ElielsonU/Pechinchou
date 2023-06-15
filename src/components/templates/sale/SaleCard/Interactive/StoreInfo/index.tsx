import { Generic } from "@/components/models";
import Image from "next/image";
import styled from "styled-components";

const StyledStoreInfo = styled.a`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 32px;
    justify-content: space-between;
    font-size: ${({theme}) => theme.font_sizes.tiny};
    column-gap: 5px;

    > * {
        display: block;
    }

    > .Image {
        border-radius: 50%;
    }
`

interface StoreInfoProps {
    store: {
        img: string,
        name: string
    }
}

const StoreInfo:React.FC<StoreInfoProps> = ({
    store
}) => {
    return (
        <StyledStoreInfo>
            <Image src={store.img} alt={store.name} width={32} height={32} className="Image"/>
            <Generic>Promoção da loja:</Generic>
            <Generic font_weight="700">{store.name}</Generic>
        </StyledStoreInfo>
    )
}

export default StoreInfo