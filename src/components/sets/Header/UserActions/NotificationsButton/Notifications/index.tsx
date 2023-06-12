import styled from "styled-components";
import Image from "next/image";
import { PLink } from "@/components/models";

interface HiddenProps {
    show: boolean;
}

const StyledNotifications = styled.div<HiddenProps>`
    z-index: 1;
    width: 330px;
    overflow: auto;
    position: absolute;
    flex-wrap: wrap;
    top: 50px;
    right: 0;
    display: ${(props) => props.show ? "flex" : "none"};
    max-height: 485px;
    background-color: ${({theme}) => theme.colors.c1};
    border-radius: 8px;

    > label {
        transition: all 500ms ease;
        width: 50%;
        display: inline-block;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 10px;
        border-bottom: 3px solid ${({theme}) => theme.colors.c2};
        color: ${({theme}) => theme.colors.c6};
        font-size: ${({theme}) => theme.font_sizes.small};
        font-weight: 700;

        :has(input:checked) {
            color: ${({theme}) => theme.colors.c7};
            border-bottom: 3px solid;
        }
    }

    input {
        display: none;
    }

    > div:first-of-type {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 20px 10px 12px 10px;

        > h4 {
            color: ${({theme}) => theme.colors.c6};
            margin: 0;
            font-size: ${({theme}) => theme.font_sizes.medium};
        }
    }

    > div:last-of-type {
        height: 90px;
        padding: 10px 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        width: 100%;
        background-color: ${({theme}) => theme.colors.c12};
        align-items: center;
        color: ${({theme}) => theme.colors.c6};
        font-size: ${({theme}) => theme.font_sizes.tiny};
        cursor: pointer;

        :active {
            filter: grayscale(30%);
        }

        > img {
            grid-row: 1/4;
            align-self: center;
            justify-self: center;
            border-radius: 10px;
        }

        strong {
            ::before {
                display: inline-block;
                background-size: 100%;
                background-image: url(https://pechinchou.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogoPechinchou.575a0d8e.png&w=128&q=75);
                width: 20px;
                content: " ";
                height: 20px;
                border-radius: 50px;
                vertical-align: middle;
                margin-right: 10px;
            }
            font-weight: 700;
            grid-column: 2/5;
        }

        p {
            margin: 0;
            grid-row: 2/4;
            grid-column: 2/5;
            padding-right: 40px;
            font-weight: 500;
            line-height: 12px;
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        display: none;
    }
`

const Notifications:React.FC<HiddenProps> = ({
    show
}) => {
    return (
        <StyledNotifications show={show}>
            <label>Geral <input type="radio" name="valor" defaultChecked/></label>

            <label>Conversas <input type="radio" name="valor"/></label>

            <div>
                <h4>Novas</h4>
                <PLink href="/" color={"#5f7fdb"}>Marcar tudo como lido</PLink>
            </div>

            <div>
                <Image src={"https://pechinchou.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogoPechinchou.575a0d8e.png&w=128&q=75"} alt="Pechinchou icon" width={60} height={60}/>
                
                <strong>Bem-vindo ao Pechinchou!</strong>
                
                <p>
                    Aproveite os melhores cupons de desconto do mercado e promoções das maiores lojas do Brasil.
                </p>
            </div>
        </StyledNotifications>
    )
}

export default Notifications