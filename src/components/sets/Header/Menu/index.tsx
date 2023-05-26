import { StyledMenu, MenuNav, MenuShadow } from "./styled";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeChanger from "../../ThemeChanger";

interface MenuProps {
    toggleTheme: Function;
}

const Menu: React.FC<MenuProps> = ({
    toggleTheme
}) => {
    const [isMenuFocusing, setIsMenuFocusing] = useState(false)

    const changeMenuFocus = () => {
        setIsMenuFocusing(!isMenuFocusing)
    }

    return (
        <>
            <StyledMenu onClick={changeMenuFocus}/>
            <MenuNav show={isMenuFocusing}>
                <Image src="https://pechinchou.com.br/_next/static/media/IconCloseDrawerMenu.bfaf4948.svg" alt="cross" width={14} height={14} className="Cross" onClick={changeMenuFocus}/>
                <span className="Profile" >
                    <Image src="https://pechinchou.com.br/_next/static/media/DefaultUserImg.7c0b378f.svg" alt="user icon" width={32} height={32}/>
                    @user
                </span>

                <hr />
                
                <ThemeChanger toggleTheme={toggleTheme}/>

                <Link href="#"><img src="https://pechinchou.com.br/_next/static/media/IconStarWhite.1f0e0720.svg" alt="star" />Destaques</Link>
                
                <Link href="#"><img src="https://pechinchou.com.br/assets/icons/IconForum.svg" alt="fórum" />Avaliações</Link>
                
                <Link href="#"><img src="https://pechinchou.com.br/assets/icons/IconBlog.svg" alt="blog" />Blog</Link>

                <label className="Drawer">
                    <img src="https://pechinchou.com.br/_next/static/media/iconCategoryDropdown.9714cb15.svg" alt="category" />
                    <span>Categorias</span>
                    <input type="checkbox"/>
                </label>
                <ul>
                    <li>
                        <Link href="#">
                            <img src="https://pechinchou.com.br/assets/icons/IconEletrodomesticos.svg"/>
                            Eletrodomésticos
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="#">
                            <img src="https://pechinchou.com.br/assets/icons/IconEletronicos.svg"/>
                            Eletrônicos
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="#">
                            <img src="https://pechinchou.com.br/assets/icons/IconUtilidades.svg"/>
                            Utilidades Domésticas
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="#">
                            <img src="https://pechinchou.com.br/assets/icons/IconTelefonia.svg"/>
                            Telefonia
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="#">
                            <img src="https://pechinchou.com.br/assets/icons/IconInformatica.svg"/>
                            Informática
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="#">
                            <img src="https://pechinchou.com.br/assets/icons/IconModa.svg"/>
                            Moda, Beleza e Perfumaria
                        </Link>
                    </li>

                    <li className="All">
                        <Link href="#">
                            ver todas as categorias...
                        </Link>
                    </li>
                </ul>
                
                <label className="Drawer">
                    <img src="https://pechinchou.com.br/_next/static/media/IconStoreMenuWhite.c873d6b4.svg" alt="category" />
                    <span>Lojas</span>
                    <input type="checkbox"/>
                </label>
                <ul >
                    <li className="Store">
                        <Link href="#">
                            <img src="https://pechinchou.com.br/_next/image?url=%2Fassets%2Ficons%2FLogoStores%2FLogoAmazon.png&w=32&q=75"/>
                            Amazon
                        </Link>
                    </li>

                    <li className="Store">
                        <Link href="#">
                            <img src="https://pechinchou.com.br/_next/image?url=%2Fassets%2Ficons%2FLogoStores%2FLogoAmericanas.png&w=32&q=75"/>
                            Americanas
                        </Link>
                    </li>

                    <li className="Store">
                        <Link href="#">
                            <img src="https://pechinchou.com.br/_next/image?url=%2Fassets%2Ficons%2FLogoStores%2FLogoMagalu.png&w=32&q=75"/>
                            Magazine Luiza
                        </Link>
                    </li>

                    <li className="Store">
                        <Link href="#">
                            <img src="https://pechinchou.com.br/_next/image?url=%2Fassets%2Ficons%2FLogoStores%2FLogoShoptime.png&w=32&q=75"/>
                            ShopTime
                        </Link>
                    </li>

                    <li className="Store">
                        <Link href="#">
                            <img src="https://pechinchou.com.br/_next/image?url=%2Fassets%2Ficons%2FLogoStores%2FLogoNetshoes.png&w=32&q=75"/>
                            Netshoes
                        </Link>
                    </li>

                    <li className="Store">
                        <Link href="#">
                            <img src="https://pechinchou.com.br/_next/image?url=%2Fassets%2Ficons%2FLogoStores%2FLogoCasasBahia.png&w=32&q=75"/>
                            Casas Bahia
                        </Link>
                    </li>

                    <li className="All">
                        <Link href="#">
                            ver todas as lojas...
                        </Link>
                    </li>
                </ul>

                <hr />

                <Link href="#"><img src="https://pechinchou.com.br/assets/icons/IconForum.svg" alt="fórum" />Fale com o chat</Link>

                <hr />

                <Link href="#"><img src="https://pechinchou.com.br/assets/icons/IconUser.svg" alt="user" />Meu perfil</Link>
                
                <hr />
                
                <Link href="#">Política de privacidade</Link>
                            
                <Link href="#">Termos de uso</Link>

                <Link href="#" className="Red">Sair</Link>
            </MenuNav>
            <MenuShadow show={isMenuFocusing} onClick={changeMenuFocus}/>
        </>
    )
}

export default Menu