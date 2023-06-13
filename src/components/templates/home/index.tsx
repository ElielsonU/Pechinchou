import React, { useState, useEffect } from "react"
import { Main } from "@/components/models"
import { useTheme } from "styled-components"
import { DynamicAside } from "@/components/sets"
import Filters from "./HomeFilters"
import InfinityScroll from "./InfinityScroll"

interface HomePageProps {
    toggleTheme: Function;
    windowWidth: number;
}

const HomePage:React.FC<HomePageProps> = ({
    toggleTheme,
    windowWidth
}) => {
    const theme = useTheme()

    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            setScrollY(window.scrollY)
        })
    }, [])
    
    return (
        <Main>
            <section>
                <Filters />
                <InfinityScroll scrollY={scrollY}/>
            </section>

            {windowWidth>theme.breakpoints.tv&&<DynamicAside toggleTheme={toggleTheme} scrollY={scrollY} type="home"/>}
        </Main>
    )
} 

export default HomePage