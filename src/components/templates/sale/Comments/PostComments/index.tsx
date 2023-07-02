import { Generic } from "@/components/models";
import Image from "next/image";
import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { postComment } from "@/apiConnection";

const StyledPostComments = styled.section`
    background-color: ${({theme}) => theme.colors.c1};
    color: ${({theme}) => theme.colors.c6};
    position: relative;
    width: 100%;
    display: flex;
    padding: 16px 24px;
    font-family: "DM Sans";
    font-size: 14px;
    font-weight: 400;
    flex-wrap: wrap;
    gap: 20px;

    > .Quantity {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
    }

    > .Input {
        display: flex;
        position: relative;
        flex-wrap: wrap;
        width: 100%;
        gap: 20px;

        > textarea {
            font-size: ${({theme}) => theme.font_sizes.medium};
            color: ${({theme}) => theme.colors.c6};
            border: 1px solid gray;
            border-radius: 10px;
            flex-grow: 1;
            height: 45px;
            width: calc(100% - 68px);
            padding: 10px 10px 10px 48px;
            resize: none;

            :focus {
                border-color: ${({theme}) => theme.colors.c7};
            }
        }

        .UserIcon {
            border-radius: 50%;
            position: absolute;
            top: 6px;
            left: 8px;
        }

        .Send {
            width: 48px;
            background-color: ${({theme}) => theme.colors.c7};
            border-radius: 10px;
            display: flex;
            align-items: center;
            height: 45px;
            justify-content: center;   
        }

        .File {

            > img {
                filter: invert(${({theme}) => theme.filter.invert});
            }

            > input {
                display: none;
            }
        }
    }

    .PechinchouComment {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;

        img {
            margin-top: 4px;
            border-radius: 50%;
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
    }

    .LikeButton {
        position: absolute;
        right: 22px;
        bottom: 20px;
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

    hr {
        width: 100%;
        margin: 0;
        border-bottom: 1px solid ${({theme}) => theme.colors.c2};
    }
`

type Comment = {
    id: number,
    text: string,
    poster: string
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

interface PostCommentsProps {
    sale: Sale
}

const PostComments:React.FC<PostCommentsProps> = ({
    sale
}) => {
    const [commentText, setCommentText] = useState<string>("")
    const [newComments, setNewComments] = useState<Array<Comment>>([])

    const theme = useTheme()

    const SendComment:React.FormEventHandler = async (event) => {
        event.preventDefault()
        const poster = JSON.parse(localStorage.getItem("user")||"{}")?.username

        if (await postComment(commentText, poster, sale.id)) {
            const id = sale.commentsQ + newComments.length
            setNewComments([...newComments, {text: commentText, poster, id}])
            setCommentText("")
        } 
        else {
            alert("comment not posted")
        }
    }

    const commentHandler:React.ChangeEventHandler = (event) => {
        setCommentText((event.target as HTMLInputElement).value)
    }

    return (
        <StyledPostComments>
            <div className="Quantity">
                <Generic>Comentários</Generic>
                <Generic>{sale.commentsQ + newComments.length}</Generic>
            </div>

            <form className="Input" onSubmit={SendComment}>
                <Image src="https://pechinchou.com.br/assets/icons/DefaultUserImg.svg" alt="user icon" width={32} height={32} className="UserIcon"/>
                
                <textarea placeholder="escreva um comentário..." onChange={commentHandler} value={commentText}/>

                <button className="Send" type="submit">
                    <Image src="https://pechinchou.com.br/assets/icons/IconSend.svg" alt="send" width={28} height={28}/>
                </button>

                <label className="File">
                    <Image src="https://pechinchou.com.br/_next/static/media/addImage.bfdddf20.svg" alt="add image" width={17} height={17}/>
                    <input type="file" accept="image/*"/>
                </label>
            </form>

            <hr />

            <div className="PechinchouComment">
                <div className="Image">
                    <Image src="https://pechinchou.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogoPechinchou.575a0d8e.png&w=3840&q=75" alt="pechinchou icon" width={25} height={25}/>
                </div>

                <div className="Text">
                    <Generic font_size={theme.font_sizes.small} font_weight="900">Pechinchou</Generic>
                    
                    <Generic as="p">Receba as promoções das maiores lojas virtuais do Brasil direto no seu Telegram. Entre no nosso canal do Pechinchou, É promoção todo dia!</Generic>
                </div>

                <div className="Answer">
                    <Generic as="a">Curtir</Generic>
                    <Generic>{sale.posted}</Generic>
                </div>
            </div>  

            <button className="LikeButton">
                <Image src="https://pechinchou.com.br/_next/static/media/IconLikeNew.a93f1e59.svg" alt="like" width={16} height={16}/>
                <Generic>{sale.likes}</Generic>
            </button>
        </StyledPostComments>
    )
}

export default PostComments