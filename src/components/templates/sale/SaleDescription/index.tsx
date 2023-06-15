import { Generic } from "@/components/models";
import styled, { useTheme } from "styled-components";

const StyledSaleDescription = styled.section`
    max-height: 2000px;
    padding: 16px 24px;
    width: 100%;
    border-radius: 12px;
    background: ${({theme}) => theme.colors.c1};
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: max-height 0.2s ease 0s;

    > .Description {
        display: flex;
        flex-direction: column;
        position: relative;
        
        
        > .ProductDescription {
            display: block;
            position: relative;
            
            :last-of-type {
                height: 400px;
                width: 400px;
            }

            > ul {
                margin: 0;
            }
        }

        .built-description {
            display: flex;
            align-items: center;
            gap: 5px;

            :nth-of-type(2) {
                > .ProductDescription {
                    width: 20px;
                    height: 20px;

                }
            }
        }
    }
`

interface SaleDescriptionProps {
    description: string;
}

const SaleDescription:React.FC<SaleDescriptionProps> = ({
    description
}) => {
    const theme = useTheme()

    return (
        <StyledSaleDescription>
            <Generic as="h3" font_size={theme.font_sizes.small}>Descrição da promoção</Generic>
            
            <div className="Description" dangerouslySetInnerHTML={{__html: description||""}}/>
        </StyledSaleDescription>
    )
}

export default SaleDescription