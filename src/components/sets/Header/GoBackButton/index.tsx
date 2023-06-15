import { RoundedButton } from "@/components/models";
import Image from "next/image";
import { useRouter } from "next/router";
import styled, { useTheme } from "styled-components";

const StyledGoBackButton = styled.button`
    .Filtered {
        filter: invert(${({theme}) => theme.filter.invert});
    }
`

const GoBackButton:React.FC = () => {
    const theme = useTheme()
    const router = useRouter()

    const goBack = () => router.back()

    return (
        <RoundedButton color={theme.colors.c6}>
            <button onClick={goBack}>
                <Image src="https://pechinchou.com.br/_next/static/media/IconBackNew.1d29d562.svg" alt="arrow" width={20} height={20} className="Filtered"/>
            </button>
        </RoundedButton>
    )
}

export default GoBackButton