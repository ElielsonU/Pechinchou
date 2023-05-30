import styled from "styled-components";

const StyledUserActions = styled.section`
    display: flex;
    gap: 10px;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
        flex-grow: 1;
        justify-content: end;
    }
`

interface SearchBarProps {
    typing: boolean;
    isFocusing: boolean;
    mobile?: boolean;
}

const SearchBar = styled.form<SearchBarProps>`
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
        background-color: transparent;
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

interface HiddenProps {
    show: boolean;
}

const MoreSearched = styled.section<HiddenProps>`
    color: ${({theme}) => theme.colors.c6};
    width: 100%;
    height: ${(props) => props.show?"auto" : "0"};
    overflow: hidden;
    padding: ${(props) => props.show?"16px" : "0 16px"};
    display: flex;
    flex-direction: column;
    font-size: ${({theme}) => theme.font_sizes.medium};
    font-weight: 500;
    gap: 8px;
    top: 50px;
    border-radius: 8px;
    margin-left: -12px;
    transition: all 200ms ease;
    background-color: ${({theme}) => theme.colors.c1};
    position: absolute;

    > button {
        height: 44px;
        padding: 0 10px;
        width: 100%;
        font-weight: 700;
        font-size: ${({theme}) => theme.font_sizes.small};
        text-align: left;
        align-items: center;
        gap: 10px;
        display: flex;
        border: 1px solid ${({theme}) => theme.colors.c2};
        background-color: transparent;
        border-radius: 8px;
        color: ${({theme}) => theme.colors.c6};
        
        :hover {
            background-color: ${({theme}) => theme.colors.c3};
        }

        div {
            width: 1px;
            height: 22px;
            background-color: ${({theme}) => theme.colors.c2};
        }
    }
`

const MobileSearch = styled.section<HiddenProps>`
    width: 100%;
    height: 60px;
    position: fixed;
    gap: 20px;
    
    top: 0;
    left: 0;
    padding: 0 15px;
    align-items: center;
    background-color: ${({theme}) => theme.colors.c1};
    z-index: 2;
    display: ${props => props.show?"flex":"none"};
`

interface RoundedButtonProps {
    mobile?: boolean;
}

const RoundedButton = styled.div<RoundedButtonProps>`
    display: ${props => props.mobile?"none":"inline-block"};
    position: relative;

    > button {
        height: 36px;
        width: 36px;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.colors.c6};
        background-color: transparent;

        :active {
            opacity: 0.7;
        }
        
        img {
            filter: brightness(${({theme}) => theme.filter.brightness});
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
        display: block;
    }
`

interface NotificationsProps {
    show: boolean;
}

const Notifications = styled.div<NotificationsProps>`
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

const ProfileButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    gap: 10px;
    color: ${({theme}) => theme.colors.c6};
    text-align: left;
    position: relative;
    font-weight: 600;
    
    ::after {
        content: "";
        display: inline-block;
        border-style: solid;
        margin-left: 6px;
        border-width: 0 2px 2px 0;
        padding: 3px;
        border-image: initial;
        rotate: ${props => props.value?"225deg":"45deg"};
        transition: rotate 300ms ease;
        @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
            display: none;
        }
    }

    > img:first-of-type {
        border-radius: 100%;
        outline: 1px solid ${({theme}) => theme.colors.c7};
    }

    > div {
        strong {
            display: block;
        }

        span {
            font-size: ${({theme}) => theme.font_sizes.tiny};
        }

        @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
            display: none;
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
            padding: 0;
    }
`

interface ProfileOptionsProps {
    show: boolean;
}

const ProfileOptions = styled.section<ProfileOptionsProps>`
    width: 220px;
    border-radius: 15px;
    padding: 15px;
    background-color: ${({theme}) => theme.colors.c1};
    position: absolute;
    top: 53px;
    right: 0;
    z-index: 1;
    display: ${props => props.show?"flex": "none"};
    flex-direction: column;

    h3 {
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
        font-weight: 500;
    }

    > div {
        img:first-of-type {
            border-radius: 100%;
        }
        
        :first-of-type {
            align-content: flex-start;
            justify-content: space-between;
            column-gap: 10px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: 35px; 
            margin-bottom: 10px;
             
            a {
                font-size: ${({theme}) => theme.font_sizes.tiny};
            }
        }
    }

    > a {
        padding: 0 6px;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        gap: 10px;

        > img {
            filter: invert(${({theme}) => theme.filter.invert});
        }

        :hover {
            opacity: 1;
            background-color: ${({theme}) => theme.colors.c2};
        }
    }

    .red { 
        color: ${({theme}) => theme.colors.c7};
    }
`

export { 
    StyledUserActions, 
    SearchBar, 
    MoreSearched, 
    MobileSearch,
    RoundedButton, 
    Notifications, 
    ProfileButton,
    ProfileOptions,
}