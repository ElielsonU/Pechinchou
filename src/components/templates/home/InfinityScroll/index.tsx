import styled from "styled-components";
import { useState, useEffect } from "react";
import PromoCard from "./PromoCard";
import { getSales } from "@/apiConnection";

const StyledInfinityScroll = styled.div`
    display: grid;
    overflow: hidden !important;
    grid-template-columns: repeat(4, calc(25% - 12px));
    grid-gap: 16px;
        
    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
        gap: 8px;
        grid-template-columns: repeat(3,calc(100% / 3 - 9px));
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        display: grid;
        grid-template-columns: calc(50% - 4px) calc(50% - 4px);
        overflow: hidden;
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

    useEffect(() => {
        (async function () {
            const responseSales = await getSales(page)
            setSales(responseSales)
            setPage(page + 1)
        })()
    }, [])

    useEffect(() => {
        const offsetHeight = document.body.offsetHeight - 50
        const actualYScroll = scrollY + window.innerHeight

        actualYScroll >= offsetHeight&&(async function () {
            const responseSales = await getSales(page)
            setPage(page + 1)
            sales.push(...responseSales)
        })()
    }, [scrollY])

    return (
        <StyledInfinityScroll>
            {sales.map((item, index) => {
                return <PromoCard sale={item} key={index} alreadyLiked={0}/>
            })}
        </StyledInfinityScroll>
    )
}

export default InfinityScroll