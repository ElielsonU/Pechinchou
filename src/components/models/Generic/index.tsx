import styled from "styled-components";

interface GenericProps {
    display?: string;
    bgcolor?: string;
    font_size?: string;
    font_weight?: string;
}

const Generic = styled.span<GenericProps>`
    display: ${props => props.display};
    color: ${props => props.color};
    background-color: ${props => props.bgcolor};
    font-size: ${props => props.font_size};
    font-weight: ${props => props.font_weight};
`

export default Generic