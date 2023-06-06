import styled from "styled-components"
import Footer from "../Footer"
import { useState } from "react"
import AsideScroll from "./AsideScroll"
import AdsCoupons from "./AdsCoupons"
import ShowFooter from "./ShowFooter"
import AdsPosts from "./AdsPosts"

const StyledAside = styled.aside`
    color: ${({theme}) => theme.colors.c6};
    width: 320px;
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
    }
`

interface AsideProps{
    toggleTheme: Function;
    scrollY: number;
}

const Aside:React.FC<AsideProps> = ({
    toggleTheme,
    scrollY
}) => {
    const [visibleFooter, setVisibleFooter] = useState(false)

    const changeFooterVisiblity = () => {
        setVisibleFooter(!visibleFooter)
    }

    return (
        <>
            <StyledAside>
                <AsideScroll toggleTheme={toggleTheme} scrollY={scrollY}/>

                <AdsCoupons />

                <AdsPosts />

                <ShowFooter onClick={changeFooterVisiblity}>
                    exibir rodapé
                </ShowFooter>
            </StyledAside>
            <Footer hidden={true} visible={visibleFooter} changeVisibility={changeFooterVisiblity}/>
        </>
    )
}

export default Aside