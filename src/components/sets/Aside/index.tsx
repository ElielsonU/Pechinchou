import styled from "styled-components"
import { DynamicFooter } from ".."
import { useState } from "react"
import AsideScroll from "./AsideScroll"
import AdsCoupons from "./AdsCoupons"
import ShowFooter from "./ShowFooter"
import AdsPosts from "./AdsPosts"

const StyledAside = styled.aside`
    color: ${({theme}) => theme.colors.c6};
    width: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    row-gap: 32px;
    align-self: stretch;

    @media (max-width: ${({theme}) => theme.breakpoints.tv}px) {
        display: none;
    }

    #Fix {
        position: fixed;
        top: 60px;
        width: 300px;
    }
`

interface AsideProps {
    toggleTheme?: Function;
    scrollY?: number;
    type: "home" | "sale";
}

const Aside:React.FC<AsideProps> = ({
    toggleTheme,
    scrollY,
    type
}) => {
    const [visibleFooter, setVisibleFooter] = useState(false)

    const changeFooterVisiblity = () => {
        setVisibleFooter(!visibleFooter)
    }

    return (
        <>
            <StyledAside>
                <AsideScroll toggleTheme={toggleTheme} scrollY={scrollY||0} />

                <AdsCoupons />

                <AdsPosts />

                {type=="home"
                &&<ShowFooter onClick={changeFooterVisiblity}>
                    exibir rodapé
                </ShowFooter>}
            </StyledAside>
            
            {type=="home"&&<DynamicFooter hidden={true} visible={visibleFooter} changeVisibility={changeFooterVisiblity}/>}
        </>
    )
}

export default Aside