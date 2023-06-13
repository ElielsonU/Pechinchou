import { RoundedButton } from "@/components/models";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";

const GoBackButton:React.FC = () => {
    const theme = useTheme()
    const router = useRouter()

    const goBack = () => router.back()

    return (
        <RoundedButton color={theme.colors.c6}>
            <button onClick={goBack}>
                <Image src="https://pechinchou.com.br/_next/static/media/IconBackDark.05c7a02a.svg" alt="arrow" width={20} height={20}/>
            </button>
        </RoundedButton>
    )
}

export default GoBackButton