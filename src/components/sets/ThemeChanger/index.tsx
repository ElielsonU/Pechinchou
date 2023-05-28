import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import Image from "next/image";

const StyledThemeChanger = styled.label`
    gap: 10px;
    display: flex;
    cursor: pointer;
    
        > input {
            cursor: pointer;
            margin-left: auto;
            margin-right: 0;
            appearance: none;
            width: 30px;
            height: 15px;
            border-radius: 8px;
            background-color: #dee0e0;
            position: relative;
            transition: background-color 500ms ease;
            
            ::before {
                transition: right 300ms ease-out;
                right: 15px;
                box-sizing: content-box;
                content: " ";
                display: inline-block;
                position: absolute;
                top: -1px;
                border-radius: 50%;
                background-color: #f2f4f6;
                border: 1px solid #707274;
                width: 15px;
                height: 15px;
            }

            :checked {
                background-color: ${({theme}) => theme.colors.c7};

                ::before {
                    right: 0;
                }
            }
        }

        > img {
            filter: brightness(${({theme}) => theme.filter.brightness});
        }
`

interface ThemeChangerProps {
    toggleTheme: Function;
}

const ThemeChanger: React.FC<ThemeChangerProps> = ({
    toggleTheme
}) => {
    const theme = useTheme()

    return (
        <StyledThemeChanger>
            <Image src="https://pechinchou.com.br/_next/static/media/IconTheme.d7f5eb15.svg" alt="sun" width={16} height={16}/>
            Modo noturno
            <input type="checkbox" onChange={() => toggleTheme()} checked={theme.name == "dark"}/>
        </StyledThemeChanger>
    )
}

export default ThemeChanger