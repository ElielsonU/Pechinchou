import styled from "styled-components";
import { useState, useEffect } from "react";
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

const InfinityScroll:React.FC<InfinityScrollProps> = ({
    scrollY
}) => {
    const [sales, setSales] = useState([{
        id: 0,
        name: "",
        description: "",
        value: 0,
        sale: 0,
        likes: 0,
        img: "",
        posted: "",
        store: {
            img: "",
            name: ""
        },
        comments: []
    }])
    
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [likes, setLikes] = useState([3, 9, 4, 1, 2, 99, 20])

    useEffect(() => {
        (async function () {
            const responseSales = await getSales(page)
            setSales(responseSales)
            setPage(page + 1)
            setLoading(false)
        })()
    }, [])

    useEffect(() => {
        const offsetHeight = document.body.offsetHeight - 50
        const actualYScroll = scrollY + window.innerHeight

        actualYScroll >= offsetHeight&&(async function () {
            setLoading(true)
            const responseSales = await getSales(page)
            if (responseSales[0]) {
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
        </StyledInfinityScroll>
    )
}

export default InfinityScroll