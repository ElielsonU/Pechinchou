import styled, { useTheme } from "styled-components";
import Image from "next/image";
import { Generic } from "@/components/models";
import { disconnect } from "@/apiConnection";

interface HiddenProps {
    show: boolean;
}

const StyledProfileOptions = styled.section<HiddenProps>`
    width: 220px;
    border-radius: 15px;
    padding: 15px;
    background-color: ${({theme}) => theme.colors.c1};
    position: absolute;
    overflow: hidden;
    top: 53px;
    right: 0;
    z-index: 1;
    display: ${props => props.show?"flex": "none"};
    flex-direction: column;

    h3 {
        margin: 0; 
    }

    a {
        color: inherit;
        text-decoration: none;
        font-weight: 500;
    }

    > div {
        img:first-of-type {
            border-radius: 100%;
        }
        
        :first-of-type {
            align-content: flex-start;
            justify-content: space-between;
            column-gap: 10px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: 35px; 
            margin-bottom: 10px;
        }
    }

    > a {
        padding: 0 6px;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        gap: 10px;

        > img {
            filter: invert(${({theme}) => theme.filter.invert});
        }

        :hover {
            opacity: 1;
            background-color: ${({theme}) => theme.colors.c2};
        }
    }

    .red { 
        color: ${({theme}) => theme.colors.c7};
    }
`

type User = {
    id: number;
    username: string;
}

interface ProfileOptionsProps extends HiddenProps {
    user: User;
}

const ProfileOptions: React.FC<ProfileOptionsProps> = ({
    show,
    user
}) => {
    const theme = useTheme()
    const at = user?.username?.toLowerCase().replaceAll(" ", "")

    return (
        <StyledProfileOptions show={show}>
            <div>
                <Image src="https://pechinchou.com.br/_next/static/media/defaultProductImage.6a1e22d2.svg" alt="UserIcon" width={35} height={35}/>
                <h3>{user?.username}</h3>
                <Generic as="a" href="#" font_size={theme.font_sizes.tiny}>@{at}</Generic>
            </div>
            <a href="#"> <Image src="/icons/global/gear.svg" alt="UserIcon" width={20} height={20}/> Configurações</a>
            <a href="#">Fale conosco</a>
            <a href="#">Política de privacidade</a>
            <a href="#">Termos de uso</a>
            <a href="#" className="red" onClick={() => disconnect()}>Sair</a>
        </StyledProfileOptions>
    )
}

export default ProfileOptions