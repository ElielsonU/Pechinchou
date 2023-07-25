import { Generic } from "@/components/models";
import styled from "styled-components";

const StyledSaleCategory = styled.span`
    width: 100%;
    padding: 16px 0;
    color: ${({theme}) => theme.colors.c6};
`

type Categories = {
    main: string;
    sub: string
}

interface SaleCategoryProps {
    categories: Categories
}

const SaleCategory:React.FC<SaleCategoryProps> = ({
    categories
}) => {
    return (
        <StyledSaleCategory>
            {categories.main} <Generic font_weight="900">{">"} {categories.sub}</Generic>
        </StyledSaleCategory>
    )
}

export default SaleCategory