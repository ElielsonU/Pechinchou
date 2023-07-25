import styled from "styled-components";
import { moresearched } from "@/content";
import { useState } from "react";

interface HiddenProps {
    show: boolean;
}

const StyledMoreSearched = styled.section<HiddenProps>`
    color: ${({theme}) => theme.colors.c6};
    width: 100%;
    height: ${(props) => props.show?"auto" : "0"};
    overflow: hidden;
    padding: ${(props) => props.show?"16px" : "0 16px"};
    display: flex;
    flex-direction: column;
    font-size: ${({theme}) => theme.font_sizes.medium};
    font-weight: 500;
    gap: 8px;
    top: 50px;
    border-radius: 8px;
    margin-left: -12px;
    transition: all 200ms ease;
    background-color: ${({theme}) => theme.colors.c1};
    position: absolute;

    .TemplateButton {
        height: 44px;
        padding: 0 10px;
        width: 100%;
        font-weight: 700;
        font-size: ${({theme}) => theme.font_sizes.small};
        text-align: left;
        align-items: center;
        gap: 10px;
        display: flex;
        border: 1px solid ${({theme}) => theme.colors.c2};
        background-color: transparent;
        border-radius: 8px;
        color: ${({theme}) => theme.colors.c6};
        
        :hover {
            background-color: ${({theme}) => theme.colors.c3};
        }

        div {
            width: 1px;
            height: 22px;
            background-color: ${({theme}) => theme.colors.c2};
        }
    }

    .Recent {
        position: relative;
        display: flex;
        align-items: center;
        > .Cross {
            position: absolute;
            right: 10px;
            font-size: 20px;
            transform: rotateX(35deg) scale(1.2);
            color: ${({theme}) => theme.colors.c7};
        }
    }

    > hr {
        border-top: 2px solid ${({theme}) => theme.colors.c2};
        margin: 5px 0 0;
    }
`

interface MoreSearchedProps extends HiddenProps {
    changeSearchText: Function;
}

const MoreSearched:React.FC<MoreSearchedProps> = ({
    show,
    changeSearchText
}) => {
    const [searchs, setSearchs] = useState<Array<string>>(JSON.parse(localStorage.getItem("recentSearch")||'{"searchs": []}').searchs)

    const removeRecent = (index: number) => {
        let recentSearch = JSON.parse(localStorage.getItem("recentSearch")||'{"searchs": []}')
        recentSearch.searchs.splice(index, 1)
        setSearchs(recentSearch.searchs)
        localStorage.setItem("recentSearch", JSON.stringify(recentSearch))
    }

    return (
        <StyledMoreSearched show={show} onClick={() => focus()}>
            Mais Buscados
            {moresearched.map((item, index) => {
                return (
                    <button type="button" key={index} onClick={() => changeSearchText(item.title)} className="TemplateButton">
                        <img src={item.image} alt={item.title} width={30}/>
                        <div/>
                        {item.title}
                    </button>
                )
            })}
            {searchs.length
                ?<>
                    <hr />
                    Pequisas Recentes
                    {searchs.map((item: string, index: number) => {
                    return (
                        <div className="Recent" key={index}>
                            <button type="button" key={index} onClick={() => changeSearchText(item)} className="TemplateButton">
                                {item}
                            </button>

                            <button className="Cross" type="button" onClick={() => removeRecent(index)}>X</button>
                        </div>
                    )
                })}
                </>
                :<></>}

        </StyledMoreSearched>
    )
}

export default MoreSearched