import styled from "styled-components";
import { Generic, PLink } from "@/components/models";
import { useTheme } from "styled-components";
import SubmitButtons from "../SubmitButtons";
import { useState } from "react";
import Image from "next/image";
import { login } from "@/apiConnection";

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    position: relative;

    > * {
        position: relative;
    }

    input {
        margin-top: 5px;
        width: 100%;
        border: 1px solid gray;
        background-color: ${({theme}) => theme.colors.c2};
        color: ${({theme}) => theme.colors.c6};
        height: 40px;
        border-radius: 8px;
        padding: 0 13px;
        font-size: inherit;
        font-weight: 300;
        transition: scale 200ms linear;

        :focus {
            scale: 1.01;
            border-color: #db2831;
        }

        :valid {
            border-color: green;
        }
    }

    .ShowPassword {
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;

        > button {
            position: absolute;
            right: 10px;
            top: 17%;
        }

        input[type="checkbox"] {
            width: auto;
            height: auto;
            display: none;
        }

        > label {
            ::before {
                content: "";
                display: inline-block;
                width: 15px;
                margin-top: 5px;
                margin-right: 5px;
                vertical-align: text-bottom;
                height: 15px;
                background-color: transparent;
                border: 1px solid gray;
                border-radius: 3px;
            }

            :has(input:checked)::before {
                border-color: #db2831;
                background-color: #db2831;
                background-image: url(https://pechinchou.com.br/_next/static/media/CheckedWhite.a720020a.svg);
                background-size: 80%;
                background-repeat: no-repeat;
                background-position: 2px;
            }
        }
    }
`

const LoginForm:React.FC = () => {
    const theme = useTheme()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const changeEmail = (event: React.ChangeEvent) => {
        setEmail((event.target as HTMLInputElement).value)
    }

    const changePassword = (event: React.ChangeEvent) => {
        setPassword((event.target as HTMLInputElement).value)
    }

    const chageShowPassword:React.MouseEventHandler = (event) => {
        event.preventDefault()
        setShowPassword(!showPassword)
    }

    const submit:React.FormEventHandler = (event) => {
        event.preventDefault()
        login(email, password)
    }

    return (
        <StyledLoginForm onSubmit={submit}>
            <Generic as="label" font_size={theme.font_sizes.medium} font_weight="900">
                E-mail
                <input type="email" placeholder="example@example.com.br" value={email} onChange={changeEmail} required/>
            </Generic>
            
            <Generic as="label" font_size={theme.font_sizes.medium} font_weight="900">
                Senha
                <div className="ShowPassword">
                    <input type={showPassword?"text":"password"} placeholder="digite a senha" value={password} onChange={changePassword} required minLength={8}/>
                    <Generic as="label" font_size={theme.font_sizes.small}>
                        <input type="checkbox"/>
                        Lembre-me
                    </Generic>
                    
                    <PLink href="#" color="#5f7fdb" font_size={theme.font_sizes.small}>Esqueceu sua senha?</PLink>
                    
                    <button onClick={chageShowPassword} type="button">
                        <Image 
                        src={showPassword?"https://pechinchou.com.br/_next/static/media/eyeOpen.442183a1.svg":"https://pechinchou.com.br/_next/static/media/eyeClose.e44b1e40.svg"} 
                        alt="show password" width={25} height={25}/>
                    </button>
                </div>
            </Generic>

            <SubmitButtons />
        </StyledLoginForm>
    )
}

export default LoginForm