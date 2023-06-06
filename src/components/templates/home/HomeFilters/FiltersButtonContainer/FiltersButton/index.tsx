import styled from "styled-components";

interface FiltersButtonProps {
    focusing: boolean;
    changeFocus?: React.MouseEventHandler;
}

const StyledFiltersButton = styled.button<FiltersButtonProps>`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.focusing?"white":"transparent"};
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.colors.c6};
    cursor: pointer;
    transition: background-color 500ms ease;

    > img {
        vertical-align: middle;
        filter: contrast(0%) brightness(${({theme}) => theme.filter.brightness});
    }

    > div {
        position: fixed;
        cursor: default;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        display: ${(props) => props.focusing?"block":"none"};
    }

    > .RedCross {
        width: 20px;
        filter: none;
    }
`

const FiltersButton:React.FC<FiltersButtonProps> = ({
    focusing,
    changeFocus
}) => {

    return (
        <StyledFiltersButton focusing={focusing} onClick={changeFocus}>
            <img src={focusing?"https://pechinchou.com.br/_next/static/media/NewIconCloseDrawerMenu.e3f10a3a.svg":`https://pechinchou.com.br/_next/static/media/IconConfigLayoutCardsDark.ea7bb7aa.svg`} 
            alt="filter" 
            className={focusing?"RedCross": " "}/>
            <div/>
        </StyledFiltersButton>
    )
}

export default FiltersButton