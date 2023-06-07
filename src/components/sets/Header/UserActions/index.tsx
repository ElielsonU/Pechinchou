import { 
    StyledUserActions, 
    SearchBar, 
    MoreSearched, 
    MobileSearch,
    RoundedButton, 
    Notifications,
    ProfileButton,
    ProfileOptions,
} from "./styled"
import { moresearched } from "@/content";
import React, { useState, useEffect } from "react"
import Image from "next/image";
import { PLink } from "@/components/models";

type User = {
    id: number;
    username: string;
}

interface UserActionsProps {
    isFocusing: boolean;
    changeFocus: Function;
    user: User;
}

const UserActions: React.FC<UserActionsProps> = ({
    isFocusing,
    changeFocus,
    user
}) => {
    const [search, setSearch] = useState("")
    const [searchBarFocusing, setSearchBarFocusing] = useState(false)
    const [notificationFocusing, setNotificationFocusing] = useState(false)
    const [profileFocusing, setProfileFocusing] = useState(false)
    const [mobileSearchFocusing, setMobileSearchFocusing] = useState(false)
    const firstName = user.username.split(" ")[0].split("-")[0].split(",")[0]
    const at = user.username.toLowerCase().replace(" ", "")

    useEffect(() => {
        if(!isFocusing) {
            setSearchBarFocusing(false)
            setNotificationFocusing(false)
            setProfileFocusing(false)
            setMobileSearchFocusing(false)
        }
    }, [isFocusing])

    const changeSearchBarFocus = () => {
        setSearchBarFocusing(!searchBarFocusing)
        if (!isFocusing) {
            changeFocus()
        }
    }

    const searchHandler = (event: React.ChangeEvent) => {
        setSearch((event.target as HTMLInputElement).value)
    }

    const clearSearch = (event: React.MouseEvent) => {
        event.preventDefault()
        setSearch("")
    }

    const changeNotificationFocus = () => {
        setNotificationFocusing(!notificationFocusing)
        changeFocus()
    }

    const changeProfileFocus = () => {
        setProfileFocusing(!profileFocusing)
        changeFocus()
    }

    const changeMobileSearchFocus = () => {
        setMobileSearchFocusing(!mobileSearchFocusing)
        changeFocus()
    }

    return (
        <StyledUserActions>

            <SearchBar typing={Boolean(search)} onFocus={changeSearchBarFocus} isFocusing={searchBarFocusing}>
                <button/>
                
                <input placeholder="Buscar Promoção" value={search} onChange={searchHandler}/>

                <button onClick={clearSearch}/>
                
                <MoreSearched show={searchBarFocusing} onClick={() => focus()}>
                    Mais Buscados
                    {moresearched.map((item, index) => {
                        return (
                            <button key={index}>
                                <img src={item.image} alt={item.title} width={30}/>
                                <div/>
                                {item.title}
                            </button>
                        )
                    })}
                </MoreSearched>
            </SearchBar>

            <RoundedButton mobile>
                <button onClick={changeMobileSearchFocus}>
                    <Image src="https://pechinchou.com.br/_next/static/media/SearchMagnifyingWhite.28ad8761.svg" alt="notification button" width={20} height={20}/>
                </button>
                <MobileSearch show={mobileSearchFocusing}>
                    <RoundedButton>
                        <button onClick={changeMobileSearchFocus}>
                            <Image src="https://pechinchou.com.br/_next/static/media/IconBackNew.1d29d562.svg" alt="notification button" width={24} height={24}/>
                        </button>
                    </RoundedButton>

                    <SearchBar typing={Boolean(search)} onFocus={changeSearchBarFocus} isFocusing={searchBarFocusing} mobile>
                        <button/>
                        
                        <input placeholder="Buscar Promoção" value={search} onChange={searchHandler}/>

                        <button onClick={clearSearch}/>
                        <MoreSearched show={searchBarFocusing} onClick={() => focus()}>
                            Mais Buscados
                            {moresearched.map((item, index) => {
                                return (
                                    <button key={index}>
                                        <img src={item.image} alt={item.title} width={30}/>
                                        <div/>
                                        {item.title}
                                    </button>
                                )
                            })}
                        </MoreSearched>
                    </SearchBar>
                </MobileSearch>
            </RoundedButton>
            
            <RoundedButton>
                <button onClick={changeNotificationFocus}>
                    <Image src="https://pechinchou.com.br/_next/static/media/IconNotificationBlack.3b79f432.svg" alt="notification button" width={13} height={18}/>
                </button>

                <Notifications show={notificationFocusing}>
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
                </Notifications>
            </RoundedButton>

            <ProfileButton value={Number(profileFocusing)} onClick={changeProfileFocus} >
                    <Image src="https://pechinchou.com.br/_next/static/media/defaultProductImage.6a1e22d2.svg" alt="UserIcon" width={33} height={33}/>
                    <div>
                        <strong>Olá, {firstName}</strong>
                        <span>Meu perfil</span>
                    </div>
                    <ProfileOptions show={profileFocusing}>
                        <div>
                            <Image src="https://pechinchou.com.br/_next/static/media/defaultProductImage.6a1e22d2.svg" alt="UserIcon" width={35} height={35}/>
                            <h3>{user.username}</h3>
                            <a href="#">@{at}</a>
                        </div>
                        <a href="#"> <Image src="/icons/global/gear.svg" alt="UserIcon" width={20} height={20}/> Configurações</a>
                        <a href="#">Fale conosco</a>
                        <a href="#">Política de privacidade</a>
                        <a href="#">Termos de uso</a>
                        <a href="#" className="red">Sair</a>
                    </ProfileOptions>
            </ProfileButton>
        </StyledUserActions>
    )
}

export default UserActions