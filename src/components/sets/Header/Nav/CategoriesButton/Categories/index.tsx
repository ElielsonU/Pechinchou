import styled from "styled-components";
import CategoriesList from "./CategoriesList/Index";
import Link from "next/link";
import Image from "next/image";

interface CategoriesProps {
    show: boolean,
}

const StyledCategories = styled.div<CategoriesProps>`
    position: absolute;
    transition: all 300ms linear;
    height: ${props => props.show?"320px":"0"};
    overflow: hidden;
    width: 100%;
    z-index: 1000;
    top: 68px;

    section {
        background-color: ${({theme}) => theme.colors.c1};
        display: flex;
        font-weight: 700;
        font-size: ${({theme}) => theme.font_sizes.small};
        align-items: center;
        justify-content: space-between;
        row-gap: 5px;
        flex-wrap: wrap;
        border-radius: 12px;
        width: 794px;
        height: 320px;
        padding: 24px;
        z-index: 10;
    }

    section > div {
        font-size: ${({theme}) => theme.font_sizes.medium};
        justify-content: space-between;
        display: flex;
        width: 100%;
    }

    section > div:first-of-type img {
        margin-right: 5px;
            vertical-align: middle;
    }

    .image {
        filter: none;
    }

    div > a:first-of-type {
        grid-column: 6;
        font-size: ${({theme}) => theme.font_sizes.tiny};
        text-decoration: none;
        color: ${({theme}) => theme.colors.c9};
        border: 1px solid ${({theme}) => theme.colors.c10};
        border-radius: 3px;
        padding: 8px;
        font-weight: 900;
        transition: all 200ms linear 0s;

        :hover {
            background-color: ${({theme}) => theme.colors.c10};
        }
    }
`



const Categories:React.FC<CategoriesProps> = ({
    show
}) => {
    return (
        <StyledCategories show={show}>
            <section>
                <div>
                    <div>
                        <Image src={"https://pechinchou.com.br/_next/static/media/IconCategoryDropdownNew.9a67f950.svg"} alt="categories" width={15} height={15}/>
                        <h3>Categorias</h3> 
                    </div>
                    <Link href="#">Ver todas</Link>
                </div>
                <div>
                    <Image src="/imgs/header/products.webp" alt="products" width={230} height={240} className="image"/>
                    <CategoriesList />
                </div>
            </section>
        </StyledCategories>
    )
}

export default Categories