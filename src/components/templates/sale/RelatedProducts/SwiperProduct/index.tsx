import { Generic } from "@/components/models";
import styled, { useTheme } from "styled-components";

const StyledSwiperProduct = styled.section`
    width: 100%;
    height: 140px;
    display: flex;
    overflow-y: hidden;
    scrollbar-width: none;
    
    ::-webkit-scrollbar {
        display: none;
    }
    
    .Slider {
        display: flex;
        gap: 10px;
    }

    .Product {
        display: block;
        width: 125px;
        overflow: hidden;
        font-weight: 900;
        display: flex;
        gap: 5px;
        flex-direction: column;

        > .Image {
            height: 95px;
            width: 100%;
            background-color: gray;
        }
    }   
`

const SwiperProduct:React.FC = () => {
    const qProducts = Array(20).fill(undefined)
    const theme = useTheme()

    return (
        <StyledSwiperProduct>
            <div className="Slider">
                {qProducts.map((item, index) => (
                    <a className="Product" href="#" key={index}>
                        <div className="Image"/>
                        <Generic>Produto {index + 1}</Generic>
                        <Generic font_size={theme.font_sizes.medium}>R$ 99.99</Generic>
                    </a>
                ))}
            </div>
        </StyledSwiperProduct>
    )
}

export default SwiperProduct