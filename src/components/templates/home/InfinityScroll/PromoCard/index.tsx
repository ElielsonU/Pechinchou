import styled from "styled-components";
import { Generic, PLink } from "@/components/models";
import { useTheme } from "styled-components";
import { useState } from "react";
import Link from "next/link";

const StyledPromoCard = styled.section`

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

    height: 382px;
    padding: 10px 14px;
    background-color: ${({theme}) => theme.colors.c1};
    position: relative;
    overflow: hidden;
    position: relative;
    justify-content: space-between;
    border-radius: 8px;
    flex-direction: column;
    display: flex;

    .Name {
        display: block;
        max-height: 36px;
        overflow: hidden;
    }

    .ProductImage {
        width: calc(100%);
        height: 160px;
        padding: 16px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 8px;
        align-self: center;
        transition: scale 300ms ease;

        :hover {
            scale: 1.03;
        }
        
        img:first-child {
            display: block;
            max-width: 100%;
            max-height: 100%;
            position: relative;
        }

        img:last-child {
            position: absolute;
            border-radius: 100%;
            width: 22px;
            height: 22px;
            min-width: 22px;
            bottom: 0px;
            right: 0px;
        }
    }

    .Coupon {
        height: 21px;
    }

    .Price {
        text-decoration: none;
        color: ${({theme}) => theme.colors.c14};
        font-size: ${({theme}) => theme.font_sizes.large};
        font-weight: 700;
        line-height: 20px;
        
        > .GoTo {
            display: inline-block;
            line-height: 12px;
            width: 22px;
            height: 22px;
            padding: 4px;
            text-align: center;
            background-color: ${({theme}) => theme.colors.c15};
            margin-left: 10px;
            border-radius: 5px;
            img {
                filter: ${({theme}) => theme.filter.whiteto};
            }
        }
    }

    .CardFooter {
        height: 40px;
        border-top: 1px solid ${({theme}) => theme.colors.c4};
        padding-top: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a > img {
            height: 12px;
            margin-right: 5px;
        }
    }

    .LikeButton {
        display: inline-block;
        padding: 8px 12px;
        border-radius: 8px;
        transition: background-color 200ms ease, color 200ms ease;
        background-color: ${({theme}) => theme.colors.c3};
        cursor: pointer;
        
        :has(input:checked) {
            background-color: ${({theme}) => theme.colors.c16};
            color: ${({theme}) => theme.colors.c14};
        }

        > input {
            width: 13px;
            height: 13px;
            background-size: 12.5px;
            background-repeat: no-repeat;
            background-image: url(https://pechinchou.com.br/assets/icons/IconLikeDarker.svg);
            appearance: none;
            margin: 0;
            margin-right: 7px;

            :checked {
                width: 13px;
                height: 13px;
                background-image: url(/icons/global/IconLiked.svg);
                background-size: 12.5px;
                background-repeat: no-repeat;
                animation: 1s ease 0s 1 normal forwards running animationIconLike;
            }
        }
    }
`

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

interface PromoCardProps {
    sale: Sale;
    alreadyLiked?: number;
}


const PromoCard: React.FC<PromoCardProps> = ({
    sale,
    alreadyLiked
}) => {
    const theme = useTheme()
    const [liked, setLiked] = useState(alreadyLiked?1:0)

    const changeLiked = () => {
        liked?setLiked(0):setLiked(1)
    }

    return (
        <StyledPromoCard>
            <Link href={`/sale/${sale.id}`} className="ProductImage">
                <img src={sale.img} alt={sale.name} />
                <img src={sale.store.img} alt={sale.store.name} />
            </Link>
            
            <Generic font_size={theme.font_sizes.tiny}>{sale.posted}</Generic>

            <Generic as="h3" className="Name">{sale.name}</Generic>
        
            <Generic className="Coupon"></Generic>

            <Generic 
            as="s" 
            font_size={theme.font_sizes.tiny}
            color="#a6aaad">R$ {sale.value.toFixed(2).replace(".", ",")}</Generic>

            <a href="#" className="Price">
                <Generic font_size={theme.font_sizes.medium}>R$ </Generic>
                {sale.sale.toFixed(2).replace(".", ",")}
                <Generic className="GoTo">
                    <img src="https://pechinchou.com.br/_next/static/media/IconGoToPromoRedDark.4fd14a75.svg" alt="go to" />
                </Generic>
            </a>

            <div className="CardFooter">
                <PLink href="#" font_size={theme.font_sizes.tiny}>
                    <img src="https://pechinchou.com.br/_next/static/media/IconComment.3f012400.svg" alt="comment" />
                    Dúvidas?
                </PLink>

                <label className="LikeButton">
                    <input type="checkbox" onChange={() => {changeLiked()}} checked={liked?true:false}/>
                    {sale.likes + liked}
                </label>
            </div>
        </StyledPromoCard>
    )
}

export default PromoCard