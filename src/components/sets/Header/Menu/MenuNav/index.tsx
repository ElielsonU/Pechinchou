import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import ThemeChanger from "@/components/sets/ThemeChanger";
import { disconnect } from "@/apiConnection";

interface HiddenProps {
    show: boolean;
}

const StyledMenuNav = styled.nav<HiddenProps>`
    width: 260px;
    height: 100%;
    font-size: ${({theme}) => theme.font_sizes.medium};
    color: ${({theme}) => theme.colors.c6};
    z-index: 3;
    position: fixed;
    display: flex;
    overflow: hidden scroll;
    flex-direction: column;
    transition: left 400ms ease;
    left: ${(props) => props.show? "0" : "-260px"};
    border-radius: 0 10px 10px 0;
    top: 0;

    background-color: ${({theme}) => theme.colors.c1};
    padding: 30px 15px 30px 0;

    a {
        color: inherit;
        text-decoration: none;
    }
    
    > * {
        padding: 0 15px;
        display: flex;
        margin: 0;
        align-items: center;
    }

    >*:nth-child(n + 3) {
        gap: 10px;
        margin-top: 23px;
        height: 20px;
        
        > img {
            width: 16px;
            height: 16px;
            filter: brightness(${({theme}) => theme.filter.brightness});
        }
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .Cross {
        padding: 0;
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }

    hr {
        width: 210px;
        height: 0 !important;
        border: none;
        margin: 0 auto;
        border-bottom: 1px solid ${({theme}) => theme.colors.c2};
    }

    .Profile {
        font-weight: 900;
        
        > img {
            border-radius: 50%;
            margin-right: 10px;
        }
    }

    .Drawer {
        flex-wrap: wrap;
        grid-template-columns: 1fr 1fr 1fr;
        position: relative;
        cursor: pointer;
        
        input {
            cursor: pointer;
            position: absolute;
            right: 20px;
            top: 5px;
            appearance: none;
            margin: 0;
            width: 10px;
            border-bottom: 2px solid ${({theme}) => theme.colors.c4};
            border-right: 2px solid ${({theme}) => theme.colors.c4};
            transition: rotate 100ms ease;
            rotate: -45deg;
            height: 10px;

            :checked {
                rotate: 45deg;
            }
        }

    }

    label:has(input:checked) + ul {
        display: flex;
    }
    
    ul {
        font-size: ${({theme}) => theme.font_sizes.small};
        font-weight: 600;
        width: 215px;
        flex-direction: column;
        height: auto !important;
        align-items: start;
        align-self: center;
        border-radius: 8px;
        background-color: ${({theme}) => theme.colors.c2};
        list-style-type: none;
        display: none;
        padding: 15px;

        a {
            display: inline-block;
            max-width: 200px;
            overflow: hidden;
        }

        li {            
            
            white-space: nowrap;
            img {
                width: 22px;
                height: 24px;
                background-color: #dee0e0;
                border-radius: 4px;
                margin-right: 8px;
                padding: 6px 0;
                vertical-align: middle;
            }    
        }

        .Store img {
                padding: 0;
            }

        .All {
            margin-top: 10px;
            color: #5f7fdb;
        }
    }
`

type User = {
    id: number;
    username: string;
}

interface MenuNavProps extends HiddenProps {
    changeFocus: Function;
    toggleTheme: Function;
    user: User;
}

const MenuNav:React.FC<MenuNavProps> = ({
    show,
    changeFocus,
    toggleTheme,
    user
}) => {
    const at = user?.username.toLowerCase().replace(" ", "")

    return (
        <StyledMenuNav show={show}>
            <Image src="https://pechinchou.com.br/_next/static/media/IconCloseDrawerMenu.bfaf4948.svg" alt="cross" width={14} height={14} className="Cross" onClick={() => changeFocus()}/>
                <span className="Profile" >
                    <Image src="https://pechinchou.com.br/_next/static/media/DefaultUserImg.7c0b378f.svg" alt="user icon" width={32} height={32}/>
                    @{at}
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

                {user&&<Link href="#" className="Red" onClick={() => disconnect()}>Sair</Link>}
        </StyledMenuNav>
    )
}

export default MenuNav