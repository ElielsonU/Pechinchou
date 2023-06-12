import React from "react";
import styled from "styled-components";

const StyledTypeChanger = styled.div`
    display: flex;
    width: 280px;
    position: relative;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.colors.c2};
    height: 40px;
    color: #fff;
    border-radius: 50px;
    
    .Type {
        z-index: 1001;
        display: inline-block;
        font-size: ${({theme}) => theme.font_sizes.medium};
        font-weight: 900;
        transition: opacity 500ms ease;
        cursor: pointer;
        opacity: 0.7;
    }
    
    input:checked + .Type {
        opacity: 1;
    }

    .Slider {
        content: "";
        display: block;
        width: 46%;
        height: 100%;
        border-radius: 50px;
        left: 54%;
        z-index: 1000;
        position: absolute;
        background-color: ${({theme}) => theme.colors.c7};
        transition: all 500ms ease;

        :has(+ input:checked) {
            width: 56%;
            left: 0;
        }
    }

    input {
        display: none;
    }
`

interface TypeChangerProps {
    changer: Function;
}

const TypeChanger:React.FC<TypeChangerProps> = ({
    changer
}) => {
    
    const onClick = (event: React.MouseEvent) => {
        changer((event.target as HTMLInputElement).value)
    }

    return (
        <StyledTypeChanger>
            <div className="Slider"/>

            <input type="radio" name="login" id="signup" onClick={onClick} defaultChecked value="signup"/>
            <label className="Type" htmlFor="signup">
                Cadastrar
            </label>
            
            <input type="radio" name="login" id="login" value="login" onClick={onClick}/>
            <label className="Type" htmlFor="login">
                Entrar
            </label>
        </StyledTypeChanger>
    )
}

export default TypeChanger