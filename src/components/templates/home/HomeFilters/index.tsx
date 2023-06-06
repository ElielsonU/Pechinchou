import styled from "styled-components";
import FiltersGallery from "./FiltersGallery";
import { useState } from "react";
import FiltersInfo from "./FiltersInfo";
import FiltersButtonContainer from "./FiltersButtonContainer";


const StyledFilters = styled.section`
    display: flex;
    column-gap: 8px;
    align-items: center;
    padding: 8px;
    height: max-content;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.c1};
    white-space: nowrap;
    border-right: 60px solid ${({theme}) => theme.colors.c1};

    ::-webkit-scrollbar { 
        display: none;
    }

    .Filter {
        cursor: pointer;
        padding: 12px;
        font-size: ${({theme}) => theme.font_sizes.small};
        border-radius: 16px;
        transition: background-color 500ms ease;
        align-items: center;
        display: flex;
        gap: 10px;

        :hover {
            background-color: ${({theme}) => theme.colors.c3};
        }

        svg {
            width: 13px;
            height: 14px;
        }

        :has(input:checked) {
            font-weight: 700;

            svg {
                stroke-width: .1px;
            }
        }

        input {
            appearance: none;
            margin: 0;
            display: none;
        }
    }

    .Star {
        :has(input:checked) {
            background-color: #353a3d;
            color: white;
            svg {
                fill: white;
                stroke: white;
                stroke-width: 1.3px;
            }
        }
    }

    .Watch {
        :has(input:checked) {
            background-color: #fff5f5;
            color: ${({theme}) => theme.colors.c7};
            svg {
                fill: ${({theme}) => theme.colors.c7};
                stroke: ${({theme}) => theme.colors.c7};
        
                path:nth-child(2) {
                    stroke: white;
                }
            }
        }
    }

    .Like {
        :has(input:checked) {
            background-color: #f2f6ff;
            color: #5f7fdb;
            svg {
                fill: #5f7fdb;
                stroke: white;
        
                path:nth-child(2) {
                    stroke: white;
                }
            }
        }
    }
    
    .Bargain {
        :has(input:checked) {
            background-color: #f2f6ff;
            color: ${({theme}) => theme.colors.c8};
            svg {
                fill: ${({theme}) => theme.colors.c8};
                stroke: ${({theme}) => theme.colors.c8};
                stroke-width: 0px;
        
                path:nth-child(2) {
                    stroke: white;
                }
            }
        }
    }
    
    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
        overflow-y: hidden;
        overflow-x: scroll;
    }
`

const Filters:React.FC = () => {
    const [choiced, setChoiced] = useState(1)

    const changeChoiced = (event: React.ChangeEvent) => {
        setChoiced(Number((event.target as HTMLInputElement).value))
    }

    return (
        <FiltersGallery>
            <StyledFilters>
                <label className="Filter Star">
                    <input type="radio" name="filter" value="0" onChange={changeChoiced}/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0.75 0.75 16.5 15.77" stroke="#687075" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z"></path></svg>
                    Destaques
                </label>
                
                <label className="Filter Watch">
                    <input type="radio"  name="filter" value="1" onChange={changeChoiced} checked={choiced == 1}/>
                    <svg width="18" height="18" viewBox="0 0 18 18" stroke="#687075" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.9785C13.4183 16.9785 17 13.3968 17 8.97852C17 4.56024 13.4183 0.978516 9 0.978516C4.58172 0.978516 1 4.56024 1 8.97852C1 13.3968 4.58172 16.9785 9 16.9785Z" strokeWidth="1.59663" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 4.17871V8.97871L12.2 10.5787" strokeWidth="1.59663" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    Recentes
                </label>

                <label className="Filter Like">
                    <input type="radio"  name="filter" value="2" onChange={changeChoiced}/>
                    <svg width="14" height="16" viewBox="0 0 14 16" stroke="#687075" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1"><path fillRule="evenodd" clipRule="evenodd" d="M7.61494 1.36841C6.94978 1.36841 6.5283 2.04943 6.50195 2.67652C6.42951 4.24086 6.38341 4.69263 5.59313 6.00074C5.3758 6.35136 5.15189 6.67502 4.9148 7.01216C4.71723 7.07959 4.32209 7.24142 4.14427 7.28188L4.38794 14.3012C4.85553 14.4967 5.3297 14.5911 5.8368 14.5911H11.3754C12.1261 14.5911 12.6464 13.9101 12.7386 13.1886L13.2852 8.94061C13.3972 8.06404 12.8637 7.03239 11.922 7.03239H9.46552V3.55983C9.46552 2.48098 8.74768 1.36841 7.61494 1.36841V1.36841ZM2.80738 7.19422H1.35194C1.18729 7.19422 1.03582 7.27513 0.917279 7.40325C0.785565 7.55833 0.699951 7.7741 0.699951 8.02359V13.8089C0.699951 14.0517 0.785565 14.2742 0.917279 14.4225C1.02924 14.5507 1.18071 14.6316 1.35194 14.6316H2.84689C2.96543 14.6248 3.06422 14.6046 3.11032 14.5641C3.1169 14.5641 3.10373 14.5574 3.10373 14.5372V14.5237L2.86665 7.18748H2.80738V7.19422Z"></path></svg>
                    Mais Curtidas
                </label>

                <label className="Filter Bargain">
                    <input type="radio" name="filter" value="3" onChange={changeChoiced}/>
                    <svg width="14" height="14" viewBox="0 0 14 14" stroke="#687075" strokeWidth="1" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.86717 5.17171C3.47503 5.40239 2.97007 5.34193 2.65723 6.31658C2.55449 6.63686 2.56873 6.50893 2.27824 6.67279C1.8379 6.921 1.54435 7.30197 1.40809 7.79532C1.39626 7.83782 1.38004 7.92019 1.36252 7.95831C1.20457 8.30378 -0.266503 8.30707 0.474399 10.6082C0.635856 11.1099 1.34937 12.1227 1.6495 12.524C2.14285 13.1834 2.35251 13.6932 3.33351 13.9315C5.27865 14.4043 8.77943 12.3365 9.11176 10.5716C9.29315 9.60924 8.76124 8.8909 8.43483 8.25143C8.08825 7.57274 7.70729 6.92714 7.35349 6.241C7.00779 5.57042 6.6426 4.87311 6.28025 4.22619C5.85635 3.4693 4.52176 0.688836 4.02512 0.302173C3.25924 -0.294141 2.37682 0.0441062 2.12555 0.862341C1.89223 1.62208 2.57662 2.61492 2.8544 3.14814C3.04346 3.5107 3.77954 4.8867 3.86695 5.17193L3.86717 5.17171Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.50803 8.02997C8.60354 7.42029 8.56279 6.6255 8.64823 5.96566C8.70234 5.54788 9.18102 2.22785 9.13895 2.09947C9.05527 1.84381 8.18511 1.68608 7.53578 2.23748C7.14912 2.56587 6.89697 3.00336 6.70703 3.61129C6.43977 4.46654 6.60933 4.54344 6.98066 5.20087C7.24946 5.6767 7.47707 6.1729 7.745 6.63843L8.50803 8.02997Z"></path></svg>
                    Pechinchas
                </label>

                <FiltersInfo choiced={choiced}/>

                <FiltersButtonContainer/>
            </StyledFilters>
        </FiltersGallery>
    )
}

export default Filters