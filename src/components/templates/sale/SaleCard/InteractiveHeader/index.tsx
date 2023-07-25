import styled from "styled-components";
import StoreInfo from "../Interactive/StoreInfo";
import { PLink } from "@/components/models";
import Image from "next/image";

const StyledInteractiveHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

interface InteractiveHeaderProps {
    store: {
        img: string,
        name: string
    }
}

const InteractiveHeader:React.FC<InteractiveHeaderProps> = ({
    store
}) => {

    return (
        <StyledInteractiveHeader>
            <StoreInfo store={store}/>
            
            <PLink href="#">
                <Image src="https://pechinchou.com.br/_next/static/media/IconWhatsappMainInfoPromo.1c5a7755.svg" alt="whatsapp" width={30} height={20}/>
            </PLink>
        </StyledInteractiveHeader>
    )
}

export default InteractiveHeader