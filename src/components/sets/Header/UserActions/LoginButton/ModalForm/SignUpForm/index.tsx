import { Generic } from "@/components/models";
import styled, { useTheme } from "styled-components";
import SubmitButtons from "../SubmitButtons";

const StyledSignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
    position: relative;

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

    a {
        color: #5f7fdb;
    }
`

const SignUpForm:React.FC = () => {
    const theme = useTheme()

    return (
        <StyledSignUpForm onSubmit={(event) => event.preventDefault()}>
            <Generic as="label" font_size={theme.font_sizes.medium} font_weight="900">
                E-mail
                <input type="email" placeholder="example@example.com.br" required/>
            </Generic>
            
            <Generic font_size={theme.font_sizes.medium}>
                Ao clicar abaixo, concordo com os <a href="#">Termos de Uso</a> e li a <a href="#">Declaração de Privacidade</a>.
            </Generic>

            <SubmitButtons />
        </StyledSignUpForm>
    )
}

export default SignUpForm