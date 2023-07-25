import styled from "styled-components";

interface RoundedButtonProps {
    mobile?: boolean;
}

const RoundedButton = styled.div<RoundedButtonProps>`
    display: ${props => props.mobile?"none":"inline-block"};
    position: relative;

    > button {
        height: 36px;
        width: 36px;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.colors.c6};
        background-color: transparent;

        :active {
            opacity: 0.7;
        }
        
        img {
            filter: brightness(${({theme}) => theme.filter.brightness});
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
        display: block;
    }
`

export default RoundedButton