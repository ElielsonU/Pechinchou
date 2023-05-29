import styled from "styled-components";

const StyledFilters = styled.section`
    display: flex;
    column-gap: 8px;
    align-items: center;
    padding: 8px;
    height: max-content;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.c1};
    white-space: nowrap;
    border-right: 60px solid ${({theme}) => theme.colors.c1};

    ::-webkit-scrollbar { 
        display: none;
    }

    .Filter {
        cursor: pointer;
        padding: 12px;
        font-size: ${({theme}) => theme.font_sizes.small};
        border-radius: 16px;
        transition: background-color 500ms ease;
        align-items: center;
        display: flex;
        gap: 10px;

        :hover {
            background-color: ${({theme}) => theme.colors.c3};
        }

        svg {
            width: 13px;
            height: 14px;
        }

        :has(input:checked) {
            font-weight: 700;

            svg {
                stroke-width: .1px;
            }
        }

        input {
            appearance: none;
            margin: 0;
            display: none;
        }
    }

    .Star {
        :has(input:checked) {
            background-color: #353a3d;
            color: white;
            svg {
                fill: white;
                stroke: white;
                stroke-width: 1.3px;
            }
        }
    }

    .Watch {
        :has(input:checked) {
            background-color: #fff5f5;
            color: ${({theme}) => theme.colors.c7};
            svg {
                fill: ${({theme}) => theme.colors.c7};
                stroke: ${({theme}) => theme.colors.c7};
        
                path:nth-child(2) {
                    stroke: white;
                }
            }
        }
    }

    .Like {
        :has(input:checked) {
            background-color: #f2f6ff;
            color: #5f7fdb;
            svg {
                fill: #5f7fdb;
                stroke: white;
        
                path:nth-child(2) {
                    stroke: white;
                }
            }
        }
    }
    
    .Bargain {
        :has(input:checked) {
            background-color: #f2f6ff;
            color: ${({theme}) => theme.colors.c8};
            svg {
                fill: ${({theme}) => theme.colors.c8};
                stroke: ${({theme}) => theme.colors.c8};
                stroke-width: 0px;
        
                path:nth-child(2) {
                    stroke: white;
                }
            }
        }
    }
    
    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
        overflow-y: hidden;
        overflow-x: scroll;
    }
`

const FiltersGallery = styled.div`
    padding: 16px 0;
    z-index: 1;
    background-color: ${({theme}) => theme.colors.c2};
    position: sticky;
    top: 60px;
`

const FiltersInfo = styled.span`

    position: relative;

    :hover {
        span {
            display: block;
        }
    }

    > span {
        padding: 10px;
        background-color: #707274;
        color: white;
        position: absolute;
        font-size: ${({theme}) => theme.font_sizes.tiny};
        white-space: break-spaces;
        top: 45px;
        right: -15px;
        width: 240px;
        border-radius: 5px;
        display: none;
        z-index: 1000;

        ::after {
            display: inline-block;
            content: "     ";
            transform: rotate(55deg) skew(20deg);
            background-color: #707274;
            position: absolute;
            top: -3px;
            right: 15px;
        }
    
        > h4 {
            margin-right: 3px;
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
        display: none;
    }
`

const FiltersButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    font-weight: 700;
    line-height: 16px;
    position: absolute;
    right: 8px;
`

interface FiltersButtonProps {
    focusing: boolean;
}

const FiltersButton = styled.button<FiltersButtonProps>`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.focusing?"white":"transparent"};
    border-radius: 5px;
    border: 1px solid ${({theme, focusing}) => focusing?theme.colors.c7:theme.colors.c6};
    cursor: pointer;
    transition: background-color 500ms ease;

    > img {
        vertical-align: middle;
        filter: contrast(0%) brightness(${({theme}) => theme.filter.brightness});
    }

    > div {
        position: fixed;
        cursor: default;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        display: ${(props) => props.focusing?"block":"none"};
    }

    > .RedCross {
        width: 20px;
        filter: none;
    }
`

const FiltersOptions = styled.div<FiltersButtonProps>`
    position: absolute;
    top: 56px;
    right: 16px;
    padding: 16px;
    display: ${(props) => props.focusing? "grid" : "none"};
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 280px;
    row-gap: 6px;
    align-items: center;
    background-color: ${({theme}) => theme.colors.c1};
    border-radius: 9px;
    z-index: 1000;

    h5 {
        align-self: flex-start;
        font-size: ${({theme}) => theme.font_sizes.medium};
        margin: 0;
    }

    > span {
        font-weight: 300;
        font-size: ${({theme}) => theme.font_sizes.small};
        line-height: 17px;
    }

    #l1 {
        grid-row: 2;
    }

    .LayoutMenu {
        justify-self: flex-end;
        grid-column: 2/4;

        > input {
            margin: 0;
            border: 1px solid ${({theme}) => theme.colors.c6};
            appearance: none;
            width: 37px;
            height: 26px;
            transition: all 200ms ease;

            :checked {
                filter: none;
                background-color: ${({theme}) => theme.colors.c7};
                border-color: ${({theme}) => theme.colors.c7};

                ::before {
                    filter: none !important;
                }
            }

            :first-of-type {
                
                border-radius: 45% 0 0 45%;
                
                ::before {
                    background-repeat: no-repeat;
                    background-image: url(https://pechinchou.com.br/_next/static/media/IconGridLayoutPromoCard.a76ea04c.svg);
                    content: " ";
                    background-position: 50%;
                    width: 100%;
                    height: 100%;
                    display: inline-block;
                    filter: contrast(1%);
                }
            }

            :last-of-type {
                border-radius: 0 45% 45% 0;
                
                ::before {
                    background-repeat: no-repeat;
                    background-image: url(https://pechinchou.com.br/_next/static/media/IconRowLayoutPromoCard.0df15453.svg);
                    content: " ";
                    background-position: 45%;
                    width: 100%;
                    height: 100%;
                    display: inline-block;
                    filter: contrast(1%);
                }                
            }
        }
    }

    #l2 {
        grid-row: 3;
        :last-child {
            justify-self: self-end;
            grid-column: 2/4;
        }
}`

const StyledInfinityScroll = styled.div`
    display: grid;
    overflow: hidden !important;
    grid-template-columns: repeat(4, calc(25% - 12px));
    grid-gap: 16px;
        
    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
        gap: 8px;
        grid-template-columns: repeat(3,calc(100% / 3 - 9px));
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        display: grid;
        grid-template-columns: calc(50% - 4px) calc(50% - 4px);
        overflow: hidden;
    }
`

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

    .ProductImage {
        width: calc(100%);
        height: 160px;
        padding: 16px;
        position: relative;
        display: inline-block;
        background-color: white;
        border-radius: 8px;
        align-self: center;
        transition: scale 300ms ease;

        :hover {
            scale: 1.03;
        }
        
        img:first-child {
            display: block;
            margin: 0 auto;
            height: 150px;
            max-height: 100%;
            max-width: 100%;
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

export {
    StyledFilters, 
    FiltersGallery, 
    FiltersInfo, 
    FiltersButton, 
    FiltersButtonContainer,
    FiltersOptions,
    StyledInfinityScroll,
    StyledPromoCard
}