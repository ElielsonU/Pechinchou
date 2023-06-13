import styled from "styled-components";
import Categories from "./Categories";
import { useState, useEffect } from "react";
import Image from "next/image";

const StyledCategoryButton = styled.button`
    gap: 8px;
    display: flex;
    background-color: transparent;
    align-items: center;
    color: ${({theme}) => theme.colors.c6};
    border: 0;
    padding: 0;
    font-weight: 500;
    
    .Arrow {
        transition: rotate 500ms;
        rotate: ${props => props.value?"180deg":0};
    }
`

interface CategoryButtonProps {
    changeFocus: Function;
    isFocusing: boolean;
}

const CategoryButton:React.FC<CategoryButtonProps> = ({
    changeFocus,
    isFocusing
}) => {
    const [showCategories, setShowCategories] = useState(false)

    const CategoryHandler = () => {
        changeFocus()
        setShowCategories(!showCategories)
    }

    useEffect(() => {
        !isFocusing&&setShowCategories(false)
    }, [isFocusing])

    return (
        <StyledCategoryButton onClick={CategoryHandler} value={Number(showCategories)}>
            <Image src="https://pechinchou.com.br/_next/static/media/IconCategoryDropdownNew.9a67f950.svg" alt="categories" width={15} height={15}/>
            Categorias
            <Image src="https://pechinchou.com.br/_next/static/media/Arrow.31151b04.svg" alt="arrow" width={13} height={13} className="Arrow"/>
            <Categories show={showCategories}/>
        </StyledCategoryButton>
    )
}

export default CategoryButton