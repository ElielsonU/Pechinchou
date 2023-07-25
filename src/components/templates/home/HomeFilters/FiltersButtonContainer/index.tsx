import styled from "styled-components";
import { useState } from "react";
import FiltersButton from "./FiltersButton";
import FiltersOptions from "./FiltersOptions";

const StyledFiltersButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    font-weight: 700;
    line-height: 16px;
    position: absolute;
    right: 8px;
`

const FiltersButtonContainer:React.FC = () => {
    const [filtersButtonFocusing, setFiltersButtonFocusing] = useState(false)

    const ChangeFiltersButtonFocus = () => {
        setFiltersButtonFocusing(!filtersButtonFocusing)
    }

    return (
        <StyledFiltersButtonContainer>
            <FiltersButton focusing={filtersButtonFocusing} changeFocus={ChangeFiltersButtonFocus}/>

            <FiltersOptions focusing={filtersButtonFocusing}/>
        </StyledFiltersButtonContainer>
    )
}

export default FiltersButtonContainer