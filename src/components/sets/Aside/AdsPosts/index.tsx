import styled, { useTheme } from "styled-components";
import { Generic } from "@/components/models";

const StyledAdsPosts = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;

    .Header {
        width: 100%;
        height: 44px;
        border-radius: 8px;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px 15px;
        display: flex;
        -webkit-box-pack: justify;
        gap: 10px;
        position: relative;
        background: ${({theme}) => theme.colors.c1};
        
        .Icon {
            background-color: ${({theme}) => theme.colors.c2};
            box-sizing: content-box;
            padding: 8px;
            width: 12px;
            height: 12px;
            border-radius: 8px;
        }
    
        .All {
            flex: 1;
            text-align: right;
        }
    }


    .Post {
        height: 92px;
        width: 100%;
        border-radius: 8px;
        padding: 16px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        -webkit-box-align: center;
        align-items: center;
        background: ${({theme}) => theme.colors.c1};
        cursor: pointer;
        position: relative;
        column-gap: 20px;
        row-gap: 5px;

        :hover {
            background-color: ${({theme}) => theme.colors.c13};
        }

        .PostImage {
            width: 60px;
            height: 60px;
            grid-row: 1/4;
        }

        .Title {
            grid-row: 1/3;
        }

        > :nth-child(n + 2) {
            grid-column: 2/5;
        }
    }
`

const AdsPosts:React.FC = () => {
    const theme = useTheme()

    return (
        <StyledAdsPosts>
            <div className="Header">
                <img src="https://pechinchou.com.br/_next/static/media/IconPosts.1d2d1489.svg" alt="posts" className="Icon"/>
                <Generic font_size={theme.font_sizes.medium} color={theme.colors.c6}>Os melhores posts</Generic>
                <Generic as={"a"} href="#" color={"#5f7fdb"} className="All">ver todos</Generic>
            </div>

            <a href="#" className="Post">
                <img src="https://pechinchou.com.br/_next/image?url=https%3A%2F%2Fadmin.pechinchou.com.br%2Fmedia%2FBlog.png&w=1200&q=75" alt="TV" className="PostImage"/>
                <Generic className="Title" font_size={theme.font_sizes.medium}>O que saber antes de comprar uma TV?</Generic>
                <Generic color="#5f7fdb">Ir para a publicação</Generic>
            </a>
            
            <a href="#" className="Post">
                <img src="https://pechinchou.com.br/_next/image?url=https%3A%2F%2Fadmin.pechinchou.com.br%2Fmedia%2FBlog2.png&w=3840&q=75" alt="Air Fryer" className="PostImage"/>
                <Generic className="Title" font_size={theme.font_sizes.medium}>Air Fryer em promoção?</Generic>
                <Generic color="#5f7fdb">Ir para a publicação</Generic>
            </a>
            
            <a href="#" className="Post">
                <img src="https://pechinchou.com.br/_next/image?url=https%3A%2F%2Fadmin.pechinchou.com.br%2Fmedia%2F1-774x1024.jpg.png&w=3840&q=75" alt="TV" className="PostImage"/>
                <Generic className="Title" font_size={theme.font_sizes.medium}>10 Celulares Mais Vendidos</Generic>
                <Generic color="#5f7fdb">Ir para a publicação</Generic>
            </a>
        </StyledAdsPosts>
    )
}

export default AdsPosts