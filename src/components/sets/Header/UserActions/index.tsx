import React from "react"
import styled, { useTheme } from "styled-components";
import dynamic from "next/dynamic";

const loading = () => <span className="Loader"></span>

const DynamicLoginButton = dynamic(() => import("./LoginButton"), {
    ssr: false,
    loading
})

const DynamicProfileButton = dynamic(() => import("./ProfileButton"), {
    ssr: false,
    loading
})

const DynamicMobileSearchButton = dynamic(() => import("./MobileSearchButton"), {
    ssr: false,
    loading
})

const DynamicSearchBar = dynamic(() => import("./SearchBar"), {
    ssr: false,
    loading
})

const DynamicNotificationsButton = dynamic(() => import("./NotificationsButton"), {
    ssr: false,
    loading
})

const StyledUserActions = styled.section`
    display: flex;
    gap: 10px;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
        flex-grow: 1;
        justify-content: end;
    }
`

type User = {
    id: number;
    username: string;
}

interface UserActionsProps {
    isFocusing: boolean;
    changeFocus: Function;
    windowWidth: number;
    user: User;
}


const UserActions: React.FC<UserActionsProps> = ({
    isFocusing,
    changeFocus,
    windowWidth,
    user,
}) => {
    const theme = useTheme()

    return (
        <StyledUserActions>
            {windowWidth > theme.breakpoints.tablet&&<DynamicSearchBar changeFocus={changeFocus} isFocusing={isFocusing}/>}

            {windowWidth <= theme.breakpoints.tablet && windowWidth > 0&&<DynamicMobileSearchButton changeFocus={changeFocus} isFocusing={isFocusing}/>}
            
            {user&&<DynamicNotificationsButton changeFocus={changeFocus} isFocusing={isFocusing}/>}

            {user?<DynamicProfileButton changeFocus={changeFocus} user={user} isFocusing={isFocusing}/>
            :<DynamicLoginButton/>}
        </StyledUserActions>
    )
}

export default UserActions