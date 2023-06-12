import styled from "styled-components";
import { moresearched } from "@/content";

interface HiddenProps {
    show: boolean;
}

const StyledMoreSearched = styled.section<HiddenProps>`
    color: ${({theme}) => theme.colors.c6};
    width: 100%;
    height: ${(props) => props.show?"auto" : "0"};
    overflow: hidden;
    padding: ${(props) => props.show?"16px" : "0 16px"};
    display: flex;
    flex-direction: column;
    font-size: ${({theme}) => theme.font_sizes.medium};
    font-weight: 500;
    gap: 8px;
    top: 50px;
    border-radius: 8px;
    margin-left: -12px;
    transition: all 200ms ease;
    background-color: ${({theme}) => theme.colors.c1};
    position: absolute;

    > button {
        height: 44px;
        padding: 0 10px;
        width: 100%;
        font-weight: 700;
        font-size: ${({theme}) => theme.font_sizes.small};
        text-align: left;
        align-items: center;
        gap: 10px;
        display: flex;
        border: 1px solid ${({theme}) => theme.colors.c2};
        background-color: transparent;
        border-radius: 8px;
        color: ${({theme}) => theme.colors.c6};
        
        :hover {
            background-color: ${({theme}) => theme.colors.c3};
        }

        div {
            width: 1px;
            height: 22px;
            background-color: ${({theme}) => theme.colors.c2};
        }
    }
`

const MoreSearched:React.FC<HiddenProps> = ({
    show
}) => {
    return (
        <StyledMoreSearched show={show} onClick={() => focus()}>
            Mais Buscados
            {moresearched.map((item, index) => {
                return (
                    <button key={index}>
                        <img src={item.image} alt={item.title} width={30}/>
                        <div/>
                        {item.title}
                    </button>
                )
            })}
        </StyledMoreSearched>
    )
}

export default MoreSearched