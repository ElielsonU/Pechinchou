import { useState, useEffect } from "react";
import MoreSearched from "./MoreSearched";
import styled from "styled-components";

interface StyledSearchBarProps {
    typing?: boolean;
    isFocusing: boolean;
    mobile?: boolean;
}

const StyledSearchBar = styled.form<StyledSearchBarProps>`
    padding: 5px 35px 5px 10px;
    display: flex;
    gap: 8px;
    border-radius: 24px;
    background-color: ${({theme}) => theme.colors.c3};
    color: ${({theme}) => theme.colors.c11};
    border: 1px solid ;
    align-items: center;
    position: relative;
    transition: border-color 400ms ease;
    z-index: ${(props) => props.isFocusing? "1" : "0"};
    flex: 1;

    > * {
        border: none;
        outline: none;
        font-size: ${({theme}) => theme.font_sizes.small};
    }
    
    input {
        color: ${({theme}) => theme.colors.c6};
        padding: 0;
        flex: 1;
        ::placeholder {
            color: ${({theme}) => theme.colors.c6};
            opacity: 0.7;
        }
    }


    &:has(input:focus) {
        border-color: black;
    }
    
     > button {
        vertical-align: text-top;
        width: 16px;
        height: 16px;
        background-size: 100%;
        background-position: 0px;
        background-repeat: no-repeat;
        
        :first-of-type {
            background-image: url(https://pechinchou.com.br/_next/static/media/SearchMagnifyingWhiteNew.84e76bf5.svg);
            filter: brightness(${({theme}) => theme.filter.brightness});
        }

        :last-of-type {
            position: absolute;
            right: 15px;
            display: ${props => props.typing?"block":"none"};
            background-image: url(https://pechinchou.com.br/_next/static/media/IconCloseRed.6ad10067.svg);
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
        display: ${props => props.mobile?"flex":"none"};
        height: ${props => props.mobile?"38px":"auto"};
    }
`

interface SearchBarProps extends StyledSearchBarProps {
    changeFocus: Function;
}

const SearchBar:React.FC<SearchBarProps> = ({
    isFocusing,
    changeFocus,
    mobile
}) => {
    const [search, setSearch] = useState("")
    const [searchBarFocusing, setSearchBarFocusing] = useState(false)

    const changeSearchBarFocus = () => {
        setSearchBarFocusing(true)
        !isFocusing&&changeFocus()
    }

    const searchHandler = (event: React.ChangeEvent) => {
        setSearch((event.target as HTMLInputElement).value)
    }

    const clearSearch = (event: React.MouseEvent) => {
        event.preventDefault()
        setSearch("")
    }

    useEffect(() => {
        if(!isFocusing) {
            setSearchBarFocusing(false)
        }
    }, [isFocusing])

    return (
        <StyledSearchBar typing={Boolean(search)} isFocusing={searchBarFocusing} mobile={mobile}>
            <button/>
            
            <input placeholder="Buscar Promoção" value={search} onChange={searchHandler} onFocus={changeSearchBarFocus}/>

            <button onClick={clearSearch}/>
            
            <MoreSearched show={searchBarFocusing}/>
        </StyledSearchBar>
    )
}

export default SearchBar