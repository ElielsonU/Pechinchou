import styled from "styled-components";

interface HiddenProps {
    show: boolean;
}

const StyledMenuShadow = styled.div<HiddenProps>`
    position: fixed;
    background-color: ${({theme}) => theme.colors.c5};
    width: 100%;
    height: 100%;
    
    display: ${(props) => props.show?"block" : "none"};
    transition: opacity 400ms ease;
    z-index: 2;
    opacity: ${(props) => props.show?"1" : "0"};
    bottom: 0;
    left: 0;
`

interface MenuShadowProps extends HiddenProps{
    changeFocus: Function;
}

const MenuShadow:React.FC<MenuShadowProps> = ({
    changeFocus,
    show
}) => {
    return (
        <StyledMenuShadow show={show} onClick={() => changeFocus()}/>
    )
}

export default MenuShadow