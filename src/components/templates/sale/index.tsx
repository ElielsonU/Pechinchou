import { Main } from "@/components/models"
import { useTheme } from "styled-components"
import { DynamicAside } from "@/components/sets"
import { DynamicThemeChanger } from "@/components/sets"
import SaleCard from "./SaleCard"
import SaleCategory from "./SaleCategory"

type Sale = {
    id: number,
    name: string,
    description: string,
    value: number,
    sale: number,
    likes: number,
    posted: string,
    store: {
      img: string,
      name: string
    },
    img: string,
    categories: {
        main: string,
        sub: string
    },
    comments: []
}

interface SalePageProps {
    windowWidth: number,
    toggleTheme: Function,
    sale: Sale
}

const SalePage:React.FC<SalePageProps> = ({
    windowWidth,
    toggleTheme,
    sale
}) => {
    const theme = useTheme()

    return (
        <Main>
            <SaleCategory categories={sale.categories}/>

            <section>
                <SaleCard sale={sale}/>
            </section>
            
            {windowWidth>theme.breakpoints.tv&&<DynamicAside type="sale"/>}
            
            <DynamicThemeChanger toggleTheme={toggleTheme} hide/>
        </Main>
    )
}

export default SalePage