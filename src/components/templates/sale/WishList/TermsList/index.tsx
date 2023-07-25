import styled from "styled-components";
import { terms } from "@/content/sale";

const StyledTermsList = styled.section`
    display: grid;
    gap: 10px;
    width: 100%;
    height: 32px;
    overflow-y: hidden;
    grid-auto-flow: column;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }

    .Term {
        font-size: ${({theme}) => theme.font_sizes.medium};
        background-color: ${({theme}) => theme.colors.c1};
        color: ${({theme}) => theme.colors.c6};
        white-space: nowrap;
        padding: 8px 14px;
        height: 32px;
        display: flex;
        gap: 10px;
        align-items: center;
        border-radius: 30px;

        ::after {
            content: "+";
            font-size: ${({theme}) => theme.font_sizes.largest};
            color: ${({theme}) => theme.colors.c7};
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        height: 74px;
        grid-template-rows: 1fr 1fr;

        .Term {
            justify-content: space-between;
        }
    }
`

const TermsList: React.FC = () => {
    return (
        <StyledTermsList>
            {terms.map((item, index) =>  <button className="Term" key={index}>{item}</button> )}
        </StyledTermsList>
    )   
}

export default TermsList