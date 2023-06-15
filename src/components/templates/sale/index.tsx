import { Generic, Main } from "@/components/models"
import styled, { useTheme } from "styled-components"
import { DynamicAside } from "@/components/sets"
import { DynamicThemeChanger } from "@/components/sets"
import SaleCard from "./SaleCard"
import SaleCategory from "./SaleCategory"
import SaleDescription from "./SaleDescription"
import WishList from "./WishList"
import RelatedProducts from "./RelatedProducts"
import PostComments from "./Comments/PostComments"
import Comments from "./Comments"

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

const StyledSalePage = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

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

            <StyledSalePage>
                <SaleCard sale={sale}/>

                <Generic font_weight="900" font_size={theme.font_sizes.small} style={{textAlign: "center", width: "100%", display: "block"}}>O preço dos produtos podem variar de acordo com a disponibilidade da loja. As ofertas são por tempo limitado e determinado pelas lojas.</Generic>

                <SaleDescription description={sale.description}/>

                <WishList/>

                <RelatedProducts />

                <Comments sale={sale}/>
            </StyledSalePage>
            
            {windowWidth>theme.breakpoints.tv&&<DynamicAside type="sale"/>}
        

            <DynamicThemeChanger toggleTheme={toggleTheme} hide/>
        </Main>
    )
}

export default SalePage