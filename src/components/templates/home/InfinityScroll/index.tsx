import styled from "styled-components";
import { useState, useEffect } from "react";
import GoTop from "./GoTop";
import PromoCard from "./PromoCard";
import ScrollLoader from "./ScrollLoader";
import { getSales } from "@/apiConnection";

const StyledInfinityScroll = styled.div`
    display: grid;
    grid-template-columns: repeat(4, calc(25% - 8px));
    justify-content: space-between;
    row-gap: 13px;
    position: relative;
        
    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
        grid-template-columns: repeat(3,calc(100% / 3 - 4px));
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        width: 100%;
        grid-template-columns: repeat(2, calc(50% - 4px));
    }
`



interface InfinityScrollProps {
    scrollY: number;
}


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

const InfinityScroll:React.FC<InfinityScrollProps> = ({
    scrollY
}) => {
    const [sales, setSales] = useState<Array<Sale>>([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [likes, setLikes] = useState([3, 9, 4, 1, 2, 99, 20])

    useEffect(() => {
        const offsetHeight = document.body.offsetHeight - 50
        let actualYScroll = scrollY + window.innerHeight

        actualYScroll>=offsetHeight&&(async function () {
            setLoading(true)
            const responseSales = await getSales(page)
            if (responseSales.length) {
                setPage(page + 1)
                sales.push(...responseSales)
            }
            setLoading(false)
        })()
    }, [scrollY])

    return (
        <StyledInfinityScroll>
            {sales.map((item, index) => {
                if (item.id != 0) {
                    const alreadyLiked = likes.filter((value) => {
                        return index == value;
                    })[0]

                    return <PromoCard sale={item} key={index} alreadyLiked={alreadyLiked}/>
                }
            })}
            {loading&&<ScrollLoader />}
            {scrollY>1000&&<GoTop href="#"/>}
        </StyledInfinityScroll>
    )
}

export default InfinityScroll