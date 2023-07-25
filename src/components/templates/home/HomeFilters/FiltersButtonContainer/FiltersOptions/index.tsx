import styled from "styled-components";
import { SliderButton } from "@/components/models";

interface FiltersButtonProps {
    focusing: boolean;
}

const StyledFiltersOptions = styled.div<FiltersButtonProps>`
    position: absolute;
    top: 56px;
    right: 8px;
    padding: 16px;
    display: ${(props) => props.focusing? "grid" : "none"};
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 280px;
    row-gap: 6px;
    align-items: center;
    background-color: ${({theme}) => theme.colors.c1};
    border-radius: 9px;
    z-index: 1000;

    > h5 {
        align-self: flex-start;
        font-size: ${({theme}) => theme.font_sizes.medium};
        margin: 0;
    }

    > span {
        font-weight: 300;
        font-size: ${({theme}) => theme.font_sizes.small};
        line-height: 17px;
    }

    #l1 {
        grid-row: 2;
    }

    .LayoutMenu {
        justify-self: flex-end;
        grid-column: 2/4;

        > input {
            margin: 0;
            border: 1px solid ${({theme}) => theme.colors.c6};
            appearance: none;
            width: 37px;
            height: 26px;
            transition: all 200ms ease;

            :checked {
                filter: none;
                background-color: ${({theme}) => theme.colors.c7};
                border-color: ${({theme}) => theme.colors.c7};

                ::before {
                    filter: none !important;
                }
            }

            :first-of-type {
                
                border-radius: 45% 0 0 45%;
                
                ::before {
                    background-repeat: no-repeat;
                    background-image: url(https://pechinchou.com.br/_next/static/media/IconGridLayoutPromoCard.a76ea04c.svg);
                    content: " ";
                    background-position: 50%;
                    width: 100%;
                    height: 100%;
                    display: inline-block;
                    filter: contrast(1%);
                }
            }

            :last-of-type {
                border-radius: 0 45% 45% 0;
                
                ::before {
                    background-repeat: no-repeat;
                    background-image: url(https://pechinchou.com.br/_next/static/media/IconRowLayoutPromoCard.0df15453.svg);
                    content: " ";
                    background-position: 45%;
                    width: 100%;
                    height: 100%;
                    display: inline-block;
                    filter: contrast(1%);
                }                
            }
        }
    }

    #l2 {
        grid-row: 3;
        :last-child {
            justify-self: self-end;
            grid-column: 2/4;
        }
}`

const FiltersOptions:React.FC<FiltersButtonProps> = ({
    focusing
}) => {
    return (
        <StyledFiltersOptions  focusing={focusing}>
            <h5>Opções</h5>

            <span id="l1">Modo de visualização</span>

            <div className="LayoutMenu" id="l1">
                <input type="radio" name="layout" defaultChecked/>
                <input type="radio" name="layout"/>
            </div>

            <span id="l2">Ocultar Encerradas</span>

            <SliderButton type="checkbox" id="l2" />
        </StyledFiltersOptions>
    )
}

export default FiltersOptions