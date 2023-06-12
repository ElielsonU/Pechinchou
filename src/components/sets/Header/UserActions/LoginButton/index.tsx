import { Generic } from "@/components/models";
import styled from "styled-components";
import ModalForm from "./ModalForm";
import { useState } from "react";

const StyledLoginButton = styled.div`
    > .Button {        
        box-sizing: content-box;
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({theme}) => theme.colors.c6};
        font-weight: 600;
        padding: 8px 25px;
        background-color: ${({theme}) => theme.colors.c7};
        border: 1px solid #bf0e1d;
        cursor: pointer;
        overflow: hidden;
        
        :hover {
            filter: brightness(90%);
        }
        
        > span {
            content: "caralho";
            display: inline-block;
            overflow: hidden;
            color: white;

            ::after {
                content: "ou Cadastre-se";
            }
        }
    
        @media (max-width: ${({theme}) => theme.breakpoints.tv}px) {
            white-space: nowrap;
            font-size: ${({theme}) => theme.font_sizes.medium};
            padding: 6px 18px;
    
            > span {
                ::after {
                    content: "";
                }
            }
        }
    }
`

const LoginButton:React.FC = () => {

    const [showForm, setShowForm] = useState(false)

    const changeShowForm = () => setShowForm(!showForm)

    return (
        <StyledLoginButton>
            <button className="Button" onClick={changeShowForm}>
                <Generic>Entre </Generic>
            </button>

            <ModalForm show={showForm} closeForm={changeShowForm}/>
        </StyledLoginButton>
    )
}

export default LoginButton