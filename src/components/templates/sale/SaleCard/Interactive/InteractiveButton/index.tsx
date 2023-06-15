import styled from "styled-components";

interface InteractiveButtonProps {
    background_color?: string;
    font_size?: string;
    font_weight?: string;
}

const InteractiveButton = styled.button<InteractiveButtonProps>`
    background-color: ${(props) => props.background_color};
    color: ${(props) => props.color};
    font-size: ${(props) => props.font_size};
    font-weight: ${(props) => props.font_weight};
    padding: 10px;
    border-radius: 5px;
    display: flex;
    gap: 5px;
    align-items: center;
`

export default InteractiveButton