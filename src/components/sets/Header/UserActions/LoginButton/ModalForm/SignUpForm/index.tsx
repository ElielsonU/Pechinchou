import { Generic } from "@/components/models";
import styled, { useTheme } from "styled-components";
import SubmitButtons from "../SubmitButtons";
import React, { useState } from "react";
import Image from "next/image";
import { signup, testemail } from "@/apiConnection";

const StyledSignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
    position: relative;

    input {
        display: flex;
        align-items: center;
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
        font-size: ${({theme}) => theme.font_sizes.medium};
        position: relative;
        display: flex;
        align-items: center;

        > button {
            position: absolute;
            margin-top: 5px;
            background-color: ${({theme}) => theme.colors.c2};
            height: 38px;
            border-radius: 10px;
            right: 1px;
        }
    }

    a {
        color: #5f7fdb;
    }
`

interface SignUpFormProps {
    changeAllFocus: Function;
}

const SignUpForm:React.FC<SignUpFormProps> = ({
    changeAllFocus
}) => {
    const theme = useTheme()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [showConfirmedPassword, setShowConfirmedPassword] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [confimedEmail, setConfirmedEmail] = useState<string>()

    const trySignUp = (event: React.FormEvent) => {
        event.preventDefault()
        
        if (!confimedEmail) {
            testemail(email)
                .then(exists => {
                    if (exists) {
                        alert("email alredy exists")
                        return 0
                    }
                    
                    setConfirmedEmail(email)
                    changeAllFocus()
                })

            return 0
        }

        signup(email, password, username)
            .then()

    }

    const changeEmail = (event: React.ChangeEvent) => {
        setEmail((event.target as HTMLInputElement).value)
    }

    const changeUsername = (event: React.ChangeEvent) => {
        setUsername((event.target as HTMLInputElement).value)
    }

    const changePassword = (event: React.ChangeEvent) => {
        setPassword((event.target as HTMLInputElement).value)
    }

    const changeConfirmedPassword = (event: React.ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value;

        if (value.length>=8&&value!=password) {
            (event.target as HTMLInputElement).setCustomValidity("as senhas não coincidem")
            return 0
        }

        (event.target as HTMLInputElement).setCustomValidity("")
    }

    const changeShowConfirmedPassword = () => {
        setShowConfirmedPassword(!showConfirmedPassword)
    }

    const changeShowPassword:React.MouseEventHandler = (event) => {
        setShowPassword(!showPassword)
    }


    return (
        <StyledSignUpForm onSubmit={trySignUp}>
            {confimedEmail
                ?<>
                    <input type="hidden" />
                    <Generic as="label" font_size={theme.font_sizes.medium} font_weight="900">
                        Nome
                        <input type="text" placeholder="digite seu nome" onChange={changeUsername} value={username} required/>
                    </Generic>

                    <Generic as="label" font_size={theme.font_sizes.medium} font_weight="900">
                            Senha
                        <div className="ShowPassword">
                            <input type={showPassword?"text":"password"} placeholder="digite a senha" onChange={changePassword} value={password} required minLength={8}/>

                            <button onClick={changeShowPassword} type="button">
                                <Image 
                                src={showPassword?"https://pechinchou.com.br/_next/static/media/eyeOpen.442183a1.svg":"https://pechinchou.com.br/_next/static/media/eyeClose.e44b1e40.svg"} 
                                alt="show password" width={25} height={25}/>
                            </button>
                        </div>
                    </Generic>

                    <Generic as="label" font_size={theme.font_sizes.medium} font_weight="900">
                        Confirmar senha
                        <div className="ShowPassword">
                            <input type={showConfirmedPassword?"text":"password"} placeholder="confirme a senha" onChange={changeConfirmedPassword} required minLength={8}/>
                            
                            <button onClick={changeShowConfirmedPassword} type="button">
                                <Image 
                                src={showConfirmedPassword?"https://pechinchou.com.br/_next/static/media/eyeOpen.442183a1.svg":"https://pechinchou.com.br/_next/static/media/eyeClose.e44b1e40.svg"} 
                                alt="show password" width={25} height={25}/>
                            </button>
                        </div>
                    </Generic>
                </>
                :<>
                    <Generic as="label" font_size={theme.font_sizes.medium} font_weight="900">
                        E-mail
                        <input type="email" placeholder="example@example.com.br" onChange={changeEmail} value={email} required/>
                    </Generic>
                    
                    <Generic font_size={theme.font_sizes.medium}>
                        Ao clicar abaixo, concordo com os <a href="#">Termos de Uso</a> e li a <a href="#">Declaração de Privacidade</a>.
                    </Generic>
                </>}

            <SubmitButtons />
        </StyledSignUpForm>
    )
}

export default SignUpForm