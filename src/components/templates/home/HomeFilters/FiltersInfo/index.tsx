import styled from "styled-components";
import { useState } from "react";
import { filtersInfos } from "@/content/home";

const StyledFiltersInfo = styled.span`
    position: relative;

    :hover {
        span {
            display: block;
        }
    }

    > span {
        padding: 10px;
        background-color: #707274;
        color: white;
        position: absolute;
        font-size: ${({theme}) => theme.font_sizes.tiny};
        white-space: break-spaces;
        top: 45px;
        right: -15px;
        width: 240px;
        border-radius: 5px;
        display: none;
        z-index: 1000;

        ::after {
            display: inline-block;
            content: "     ";
            transform: rotate(55deg) skew(20deg);
            background-color: #707274;
            position: absolute;
            top: -3px;
            right: 15px;
        }
    
        > h4 {
            margin-right: 3px;
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
        display: none;
    }
`

interface FiltersInfoProps {
    choiced: number;
}

const FiltersInfo:React.FC<FiltersInfoProps> = ({
    choiced
}) => {
    const [showInfo, setShowInfo] = useState(false)

    const ChangeShowInfo = () => {
        setShowInfo(!showInfo)
    }

    return (
        <StyledFiltersInfo >
            <img 
            src="https://pechinchou.com.br/_next/static/media/NewIconInfo.610bae56.svg" 
            alt="info" 
            onMouseOver={ChangeShowInfo}
            onMouseOut={ChangeShowInfo}             
            width={12}/>
            <span>
                <h4>{filtersInfos[choiced].title}:</h4>
                {filtersInfos[choiced].description}
            </span>
        </StyledFiltersInfo>
    )
}

export default FiltersInfo