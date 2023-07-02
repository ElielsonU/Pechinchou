import { Generic } from "@/components/models";
import styled from "styled-components";

const StyledSubCategory = styled.section`
    width: 100%;
    height: 120px;
    background-color: ${({theme}) => theme.colors.c1};
    border-radius: 10px;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .Slider {
        width: 100%;
        overflow-y: hidden;

        > div {
            display: flex;
            gap: 10px;
        }

        .Product {
            display: flex;
            align-items: center;
            gap: 10px;
            white-space: nowrap;
            
            .Image {
                border-radius: 12px;
                box-sizing: content-box;
                width: 40px;
                height: 40px;
                background-color: ${({theme}) => theme.colors.c1};
                position: relative;
                border: 1px solid ${({theme}) => theme.colors.c5};

                ::before {
                    content: "";
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background-color: ${({theme}) => theme.colors.c5};
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    border-radius: 10px;
                }
            }
        }

        ::-webkit-scrollbar {
            display: none;
        }
    }
`

interface SubCategoryProps {
    main: string;
}

const SubCategory:React.FC<SubCategoryProps> = ({
    main
}) => {
    const productsQ = Array(90).fill(undefined)

    return (
        <StyledSubCategory>
            <Generic><Generic as="strong" font_weight="900">{main}</Generic> subcategorias relacionadas</Generic>
            <section className="Slider">
                <div>
                    {productsQ.map((item, index) => {
                        return (
                            <a href="#" className="Product" key={index}>
                                <div className="Image"/>
                                Produto {index + 1}
                            </a>
                        )
                    })}
                </div>
            </section>
        </StyledSubCategory>
    )
}

export default SubCategory