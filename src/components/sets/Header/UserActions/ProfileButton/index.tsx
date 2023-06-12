import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import ProfileOptions from "./ProfileOptions";

const StyledProfileButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    gap: 10px;
    color: ${({theme}) => theme.colors.c6};
    text-align: left;
    position: relative;
    font-weight: 600;
    
    ::after {
        content: "";
        display: inline-block;
        border-style: solid;
        margin-left: 6px;
        border-width: 0 2px 2px 0;
        padding: 3px;
        border-image: initial;
        rotate: ${props => props.value?"225deg":"45deg"};
        transition: rotate 300ms ease;
        @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
            display: none;
        }
    }

    > img:first-of-type {
        border-radius: 100%;
        outline: 1px solid ${({theme}) => theme.colors.c7};
    }

    > div {
        strong {
            display: block;
        }

        span {
            font-size: ${({theme}) => theme.font_sizes.tiny};
        }

        @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
            display: none;
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
            padding: 0;
    }
`
type User = {
    id: number;
    username: string;
}

interface ProfileButtonProps {
    isFocusing: boolean;
    changeFocus: Function;
    user: User;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({
    isFocusing,
    changeFocus,
    user
}) => {
    const [profileFocusing, setProfileFocusing] = useState(false)
    const firstName = user?.username.split(" ")[0].split("-")[0].split(",")[0]

    const changeProfileFocus = () => {
        setProfileFocusing(!profileFocusing)
        changeFocus()
    }
    
    useEffect(() => {
        !isFocusing&&setProfileFocusing(false)
    }, [isFocusing])

    
    return (
        <StyledProfileButton value={Number(profileFocusing)} onClick={changeProfileFocus}> 
            <Image src="https://pechinchou.com.br/_next/static/media/defaultProductImage.6a1e22d2.svg" alt="UserIcon" width={33} height={33}/>
            <div>
                <strong>Olá, {firstName}</strong>
                <span>Meu perfil</span>
            </div>
            <ProfileOptions show={profileFocusing} user={user}/>
        </StyledProfileButton>
    )
}

export default ProfileButton