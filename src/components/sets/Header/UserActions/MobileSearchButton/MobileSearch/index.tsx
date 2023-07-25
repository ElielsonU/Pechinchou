import styled from "styled-components";
import { RoundedButton } from "@/components/models";
import SearchBar from "../../SearchBar";
import Image from "next/image";

interface HiddenProps {
    show: boolean;
}

const StyledMobileSearch = styled.section<HiddenProps>`
    width: 100%;
    height: 60px;
    position: fixed;
    gap: 20px;
    top: 0;
    left: 0;
    padding: 0 15px;
    align-items: center;
    background-color: ${({theme}) => theme.colors.c1};
    z-index: 2;
    display: ${props => props.show?"flex":"none"};
`

interface MobileSearchProps extends HiddenProps {
    changeFocus: Function;
    isFocusing: boolean;
    onClick: React.MouseEventHandler;
}

const MobileSearch:React.FC<MobileSearchProps> = ({
    show,
    changeFocus,
    isFocusing,
    onClick
}) => {
    return (
        <StyledMobileSearch show={show}>
                <RoundedButton>
                    <button onClick={onClick}>
                        <Image src="https://pechinchou.com.br/_next/static/media/IconBackNew.1d29d562.svg" alt="notification button" width={24} height={24}/>
                    </button>
                </RoundedButton>

                <SearchBar changeFocus={changeFocus} isFocusing={isFocusing} mobile/>
        </StyledMobileSearch>
    )
}

export default MobileSearch