import { Generic, Main } from "@/components/models"
import styled, { useTheme } from "styled-components"
import { DynamicAside } from "@/components/sets"
import { DynamicThemeChanger } from "@/components/sets"
import dynamic from "next/dynamic"

const loading = () => <div className="Loader"/>

const DynamicSubCategory = dynamic(() => import("./SubCategory"), {
    ssr: false,
    loading
})

const DynamicSaleCard = dynamic(() => import("./SaleCard") , {
    ssr: false,
    loading
})

const DynamicSaleCategory = dynamic(() => import("./SaleCategory"), {
    ssr: false,
    loading
})

const DynamicComments = dynamic(() => import("./Comments"), {
    ssr: false,
    loading
})

const DynamicWishList = dynamic(() => import("./WishList"), {
    ssr: false,
    loading
})

const DynamicRelatedProducts = dynamic(() => import("./RelatedProducts"), {
    ssr: false,
    loading
})

const DynamicSaleDescription = dynamic(() => import("./SaleDescription"), {
    ssr: false,
    loading
})

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
    commentsQ: number
}

const StyledSalePage = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;

    > * {
        border-radius: 12px;
        overflow: hidden;

        @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
            border-radius: 0 !important;
        }
    }

    #comments {
        overflow: visible;
    }

    > .Info {
        @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
            font-size: ${({theme}) => theme.font_sizes.tiny};
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        width: 100vw !important;
        gap: 30px;
    }
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
            <DynamicSaleCategory categories={sale.categories}/>

            <StyledSalePage>
                <DynamicSaleCard sale={sale} windowWidth={windowWidth}/>

                <Generic font_weight="900" font_size={theme.font_sizes.small} style={{textAlign: "center", width: "100%", display: "block"}} className="Info">O preço dos produtos podem variar de acordo com a disponibilidade da loja. As ofertas são por tempo limitado e determinado pelas lojas.</Generic>

                <DynamicSaleDescription description={sale.description}/>

                <DynamicWishList/>
 
                <DynamicRelatedProducts />

                {windowWidth<=theme.breakpoints.mobile&&windowWidth>0
                &&<DynamicSubCategory main={sale.categories.main}/>}
                
                <DynamicComments sale={sale}/>
            </StyledSalePage>
            
            {windowWidth>theme.breakpoints.tv&&<DynamicAside type="sale"/>}

            <DynamicThemeChanger toggleTheme={toggleTheme} hide/>
        </Main>
    )
}

export default SalePage