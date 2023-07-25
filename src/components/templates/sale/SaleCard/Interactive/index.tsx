import styled, { useTheme } from "styled-components";
import InteractiveButton from "./InteractiveButton";
import Image from "next/image";
import StoreInfo from "./StoreInfo";
import { Generic } from "@/components/models";
import { useState } from "react";

const StyledInteractive = styled.section`
    display: flex;
    gap: 10px;
    width: 100%;
    row-gap: 15px;
    height: 32px;
    font-size: ${({theme}) => theme.font_sizes.small};
    color: ${({theme}) => theme.colors.c6};

    .Filtered {
        filter: invert(${({theme}) => theme.filter.invert}) ;
    }

    > .Right {
        flex-grow: 1;
        justify-content: end;
        align-items: center;
        gap: 7px;
        display: flex;
    }

    > .LikeButton {
        @keyframes animationIconLike {
            0% {
                transform: rotateZ(0deg);
            }

            25% {
                transform: rotateZ(20deg) scale(0.7) translateX(-8px);
            }

            50%, 75% {
                transform: rotateZ(-17deg) scale(1.2);
            }

            100% {
                transform: rotateZ(0deg);
            }
        }

        > input {
            display: none;
        }

        > .Icon {
            background-image: url(https://pechinchou.com.br/assets/icons/IconLikeDarker.svg);
            background-size: 100%;
            background-repeat: no-repeat;
            width: 12px;
            height: 14px;
        }

        :has(input:checked) {
            background-color: ${({theme}) => theme.colors.c12};
            > .Icon {
                background-image: url(https://pechinchou.com.br/assets/icons/IconLiked.svg);
                background-size: 12.5px;
                background-repeat: no-repeat;
                animation: 1s ease 0s 1 normal forwards running animationIconLike;
            }
        }
    }

    > .By {
        height: 32px;
        display: none;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: start;
        justify-content: space-between;
        font-size: ${({theme}) => theme.font_sizes.tiny};
        column-gap: 5px;
        width: 100%;

        > .Image {
            background-color: gray;
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }  

        @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
            display: flex;
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
        flex-wrap: wrap;
        height: auto;
        justify-content: center;

        .TvOnly {
            display: none;
        }
    }
`

type Comment = {
    id: number,
    text: string,
    poster: string
}

type Sale = {
    id: number,
    name: string,
    description: string,
    value: number,
    sale: number,
    likes: number,
    posted: string,
    store: {
      img: string,
      name: string
    },
    img: string,
    categories: {
        main: string,
        sub: string
    },
    commentsQ: number
}

interface InteractiveProps {
    sale: Sale
}

const Interactive:React.FC<InteractiveProps> = ({
    sale
}) => {
    const theme = useTheme()
    const [likedNow, setLikedNow] = useState(0) 

    return (
        <StyledInteractive>
            <InteractiveButton background_color={theme.colors.c3} color="inherit" font_weight="900">
                <Image src="https://pechinchou.com.br/_next/static/media/IconReport.6d5a9c0f.svg" alt="report" width={15} height={15} className="Filtered"/>
                Reportar
            </InteractiveButton>
            
            <InteractiveButton background_color="#abebab33" color="#3bc14d" font_weight="900" className="TvOnly">
                <Image src="https://pechinchou.com.br/_next/static/media/IconWhatsappShare.4304243a.svg" alt="compartilhar" width={24} height={16}/>
                Compartilhar
            </InteractiveButton>

            <StoreInfo store={sale.store} className="TvOnly"/>

            <Generic className="Right" as="a" href="#comments" >
                <Image src="https://pechinchou.com.br/_next/static/media/IconComment.3f012400.svg" alt="balloon" width={14} height={14} className="Filtered"/>
                {sale.commentsQ}
            </Generic>

            <InteractiveButton as="label" background_color={theme.colors.c3} color="inherit" font_weight="900" className="LikeButton">
                <input type="checkbox" onChange={() => {setLikedNow(Number(!likedNow))}}/>
                <div className="Icon"/>
                Curtir ({sale.likes + likedNow})
            </InteractiveButton>

            <div className="By">
                <div className="Image"/>
                <Generic>Elielson</Generic>
                <Generic>postado {sale.posted}</Generic>
            </div>
        </StyledInteractive>
    )
}

export default Interactive