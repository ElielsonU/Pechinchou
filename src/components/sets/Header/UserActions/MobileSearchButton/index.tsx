import { RoundedButton } from "@/components/models"
import Image from "next/image"
import MobileSearch from "./MobileSearch"
import { useEffect, useState } from "react"

interface MobileSearchButtonProps {
    changeFocus: Function;
    isFocusing: boolean;
}

const MobileSearchButton:React.FC<MobileSearchButtonProps> = ({
    changeFocus,
    isFocusing
}) => {
    const [mobileSearchFocusing, setMobileSearchFocusing] = useState(false)

    useEffect(() => {
        !isFocusing&&setMobileSearchFocusing(false)
    }, [isFocusing])
    
    const changeMobileSearchFocus = () => {
        setMobileSearchFocusing(!mobileSearchFocusing)
        changeFocus()
    }

    return (
        <RoundedButton mobile>
            <button onClick={changeMobileSearchFocus}>
                <Image src="https://pechinchou.com.br/_next/static/media/SearchMagnifyingWhite.28ad8761.svg" alt="search" width={20} height={20}/>
            </button>
            <MobileSearch show={mobileSearchFocusing} onClick={changeMobileSearchFocus} isFocusing={isFocusing} changeFocus={changeFocus}/>
        </RoundedButton>
    )
}

export default MobileSearchButton