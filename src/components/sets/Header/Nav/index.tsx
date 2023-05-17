import styled, { useTheme } from "styled-components";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { categories } from "@/content";
import { PLink } from "@/components/models";
import { StyledNav, Categories, CategoriesList, CategoryButton, Shops } from "./styled";

interface NavProps {
    isFocusing: boolean;
    changeFocus: Function;
}

const Nav: React.FC<NavProps> = ({
    isFocusing,
    changeFocus
}) => {
    const [showCategories, setShowCategories] = useState(false)
    const theme = useTheme()

    const CategoryHandler = () => {
        changeFocus()
        setShowCategories(!showCategories)
    }

    useEffect(() => {
        !isFocusing&&setShowCategories(false)
    }, [isFocusing])


    return (
        <StyledNav>
            <CategoryButton value={Number(showCategories)} onClick={CategoryHandler}>
                <Image src={"https://pechinchou.com.br/_next/static/media/IconCategoryDropdownNew.9a67f950.svg"} alt="categories" width={14} height={14}/>
                Categorias
                <Image src={"https://pechinchou.com.br/_next/static/media/Arrow.31151b04.svg"} alt="categories" width={13} height={13} />
                <Categories show={showCategories}>
                    <section>
                        <div>
                            <div>
                                <Image src={"https://pechinchou.com.br/_next/static/media/IconCategoryDropdownNew.9a67f950.svg"} alt="categories" width={15} height={15}/>
                                <h3>Categorias</h3> 
                            </div>
                            <Link href="https://pechinchou.com.br/categorias" target="_blank">Ver todas</Link>
                        </div>
                        <div>
                            <Image src="/imgs/header/products.webp" alt="products" width={230} height={240} className="image"/>
                            <CategoriesList>
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
                            </CategoriesList>
                        </div>
                    </section>
                </Categories>
            </CategoryButton>
            <Shops href="#">Lojas</Shops>
            <PLink href="#" color={theme.colors.c6}>Avaliações</PLink>
            <PLink href="#" color={theme.colors.c6}>Blog</PLink>
        </StyledNav>
    )
}

export default Nav