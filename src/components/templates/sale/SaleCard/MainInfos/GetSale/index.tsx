import { Generic } from "@/components/models";
import styled from "styled-components";

const StyledGetSale = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;

    > .By {
        height: 32px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: ${({theme}) => theme.font_sizes.tiny};
        column-gap: 5px;

        > .Image {
            background-color: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }  
    }

    > .ToStore {
        color: ${({theme}) => theme.colors.c6};
        padding: 5px 50px;
        border-radius: 50px;
        background-color: ${({theme}) => theme.colors.c7};
        position: relative;
        font-weight: 900;
        transition: scale 200ms linear;

        ::after {
                    content: "";
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    background-image: url(https://pechinchou.com.br/_next/static/media/IconGoToPromoWhite.1a3834bb.svg);
                    position: absolute;
                    bottom: 10px;
                    right: 20px;
                }
        
        :hover {
            scale: 1.03;
            filter: brightness(90%);
        }
    }
`

interface GetSaleProps {
    posted: string;
}

const GetSale:React.FC<GetSaleProps> = ({
    posted
}) => {
    return (
        <StyledGetSale>
            <div className="By">
                <div className="Image"/>
                <Generic>Elielson</Generic>
                <Generic>postado {posted}</Generic>
            </div>

            <button className="ToStore">Pegar Promoção</button>
        </StyledGetSale>
    )
}

export default GetSale