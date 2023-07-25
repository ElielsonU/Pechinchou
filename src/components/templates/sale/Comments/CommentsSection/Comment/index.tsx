import styled, { useTheme } from "styled-components";
import { Generic } from "@/components/models";
import Image from "next/image";

const StyledComment = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    gap: 5px;

    .Image {
        width: 25px;
        height: 25px;
        background-color: gray;
        border-radius: 50%;
        margin-top: 5px;
    }
    
    > .Text {
        padding: 8px;
        background-color: ${({theme}) => theme.colors.c2};
        border-radius: 10px;
        width: calc(100% - 32px);
        display: flex;
        flex-direction: column;
        gap: 5px;

        > p {
            margin: 0;
            opacity: 0.9;
        }
    }
    
    > .Answer {
        padding-left: 32px;
        width: 100%;
        display: flex;
        gap: 10px;

        > a:hover {
            text-decoration: underline;
        }
    }
    
    > .LikeButton {
        position: absolute;
        right: 0;
        bottom: 4px;
        border: none;
        border-radius: 10px;
        background: ${({theme}) => theme.colors.c2};
        box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px;
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 400;
        cursor: pointer;
        font-size: 12px;
        height: 18px;
        padding: 0 5px;
        display: flex;
        gap: 10px;
        transition: all 0.1s ease 0s;
        display: flex;
        align-items: center;
        color: rgb(112, 114, 116);
    }
`

interface CommentProps {
    comment: {
        poster: string;
        text: string;
        id: number;
    };
}

const Comment:React.FC<CommentProps> = ({
    comment
}) => {
    const theme = useTheme()

    return (
        <StyledComment>
            <div className="Image"/>

            <div className="Text">
                <Generic font_size={theme.font_sizes.small} font_weight="900">{comment.poster}</Generic>
                
                <Generic as="p">{comment.text}</Generic>
            </div>

            <div className="Answer">
                <Generic as="a">Curtir</Generic>
                <Generic>Há X horas</Generic>
            </div>

            <button className="LikeButton">
                <Image src="https://pechinchou.com.br/_next/static/media/IconLikeNew.a93f1e59.svg" alt="like" width={16} height={16}/>
                <Generic>{comment.id}</Generic>
            </button>
        </StyledComment>
    )
}

export default Comment