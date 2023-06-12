import styled from "styled-components";
import { categories } from "@/content";
import Image from "next/image";
import Link from "next/link";

const StyledCategoriesList = styled.ul`
    list-style-type: none;
    display: grid;
    grid-auto-flow: column;
    justify-items: start;
    align-items: flex-end;
    height: 230px;
    width: 440px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    padding: 0;
    margin: 0;

    li > div {
        display: inline-flex;
        padding: 6px 5px;
        background-color: ${({theme}) => theme.colors.c2};
        border-radius: 3px;
        margin-right: 8px;
    }
    
    li img {
        filter: opacity(${({theme}) => theme.filter.opacity}) brightness(${({theme}) => theme.filter.brightness});
    }

    li > a {
        font-weight: 300;
        font-size: ${({theme}) => theme.font_sizes.small};
        text-decoration: none;
        color: ${({theme}) => theme.colors.c6};
        vertical-align: text-top;

        :hover {
            opacity: 1;
            text-decoration: underline;
        }
    }
`

const CategoriesList:React.FC = () => {
    return (
        <StyledCategoriesList>
            {categories.map((item, index) => {
                return (
                    <li key={index}>
                        <div>
                            <Image src={item.image} alt="Paper roll" width={13} height={13}/>
                        </div>
                        <Link href="#">{item.content}</Link>
                    </li>
                )
            })}
        </StyledCategoriesList>
    )
}

export default CategoriesList