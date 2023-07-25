import { RoundedButton } from "@/components/models";
import { useState, useEffect } from "react";
import Notifications from "./Notifications";
import Image from "next/image";

interface NotificationsButtonProps {
    isFocusing: boolean;
    changeFocus: Function;
}

const NotificationsButton:React.FC<NotificationsButtonProps> = ({
    isFocusing,
    changeFocus
}) => {
    
    const [notificationFocusing, setNotificationFocusing] = useState(false)

    useEffect(() => {
        if(!isFocusing) {
            setNotificationFocusing(false)
        }
    }, [isFocusing])

    const changeNotificationFocus = () => {
        setNotificationFocusing(!notificationFocusing)
        changeFocus()
    }

    return (
        <RoundedButton>
            <button onClick={changeNotificationFocus}>
                <Image src="https://pechinchou.com.br/_next/static/media/IconNotificationBlack.3b79f432.svg" alt="notifications" width={13} height={18}/>
            </button>

            <Notifications show={notificationFocusing}/>
        </RoundedButton>
    )
}

export default NotificationsButton