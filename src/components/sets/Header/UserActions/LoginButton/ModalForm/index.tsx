import styled, { useTheme } from "styled-components";
import Image from "next/image";
import { Generic } from "@/components/models";
import TypeChanger from "./TypeChanger";
import { useEffect, useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

interface StyledModalFormProps {
    show: boolean;
    allFocus: boolean;
}

const StyledModalForm = styled.div<StyledModalFormProps>`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    color: ${({theme}) => theme.colors.c6};
    display: ${props => props.show?"flex":"none"};
    align-items: center;
    justify-content: center;
    z-index: 2;

    > .Modal {
        background-color: ${({theme}) => theme.colors.c1};
        width: 450px;
        max-width: 95%;
        padding: 58px 32px 32px;
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: ${(props) => props.allFocus?"100vh":"600px"};
        max-height: 100%;
        border-radius: ${(props) => props.allFocus?"0":"12px"};
        z-index: 1002;
        
        > .Title {
            text-align: center;
            display: inline-block;
            width: 350px;
            max-width: 100%;
            
            > p {
                margin: 0;
                opacity: 0.8;
            }
        }
        
        > .Cross {
            background: url(https://pechinchou.com.br/_next/static/media/IconCloseDrawerMenu.bfaf4948.svg);
            position: absolute;
            width: 14px;
            height: 14px;
            right: 25px;
            top: 35px;
        }

        @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
            padding: 35px 20px 20px;

            .Cross {
                top: 25px;
            }
        }
    }

    > .DarkBackground {
        background-color: ${({theme}) => theme.colors.c5};
        position: fixed;
        height: calc(100% + 200px);
        width: 100%;
        right: 0;
        top: 0;
    }
`

interface ModalFormProps {
    show: boolean;
    closeForm: React.MouseEventHandler;
}

const ModalForm:React.FC<ModalFormProps> = ({
    show,
    closeForm
}) => {
    const theme = useTheme()
    const [allFocus, setAllFocus] = useState<boolean>(false)

    const changeAllFocus = () => {
        setAllFocus(!allFocus)
    }

    const [type, setType] = useState("signup")

    useEffect(() => setAllFocus(false), [type])

    return (
        <StyledModalForm show={show} allFocus={allFocus}>
            <section className="Modal">
                <Image src="https://pechinchou.com.br/_next/static/media/LogoP.c6bcb3bb.svg" alt="pechinchou" width={34} height={34}/>
                
                <Generic as="h3" font_size={theme.font_sizes.large} className="Title">
                    Junte-se a comunidade
                    <Generic as="p" font_size={theme.font_sizes.medium} color={theme.colors.c6}>Milhares de pessoas compartilhado promoções todos os dias!</Generic>
                </Generic>

                <TypeChanger changer={setType}/>
                
                {type=="signup"?<SignUpForm changeAllFocus={changeAllFocus} />:<LoginForm />}

                <button className="Cross" onClick={closeForm}/>
            </section>

            <div className={`${show&&"DarkBackground"}`} onClick={closeForm}/>
        </StyledModalForm>
    )
}

export default ModalForm