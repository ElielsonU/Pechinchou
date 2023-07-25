import { Generic } from "@/components/models";
import Image from "next/image";
import Comment from "./Comment";
import styled, { useTheme } from "styled-components";
import { getComments } from "@/apiConnection";
import { useEffect, useState } from "react";
import notepad from '../../../../../../public/icons/global/notepad.svg'

const StyledCommentsSection = styled.section`
    background-color: ${({theme}) => theme.colors.c1};
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1px;
    gap: 20px;
    position: relative;
    padding: 20px 24px 20px;

    > .NoComments {
        height: 45px;
        width: 100%;
        display: flex;
        align-self: center;
        align-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        column-gap: 3px;
    }

    > .MoreComments {
        position: absolute;
        color: inherit;
        display: flex;
        align-items: center;
        padding: 5px 8px;
        text-align: left;
        width: 100px;
        border-radius: 10px;
        box-shadow: 0px 0px 5px ${({theme}) => theme.colors.c2};
        border: 1px solid ${({theme}) => theme.colors.c7};
        font-weight: 900;
        right: calc(50% - 50px);
        bottom: -10px;
        background-color: ${({theme}) => theme.colors.c7};

        :hover {
            filter: brightness(90%);
        }

        ::after {
            content: "";
            display: inline-block;
            position: absolute;
            top: 8px;
            width: 6px;
            height: 6px;
            rotate: 45deg;
            right: 10px;
            border-bottom: 2px solid ${({theme}) => theme.colors.c6};
            border-right: 2px solid ${({theme}) => theme.colors.c6};
        }
    }
`

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

type Comments = Array<{
    poster: string;
    text: string;
    id: number;
}>

interface CommentsSectionProps {
    sale: Sale
}

const CommentsSection:React.FC<CommentsSectionProps> = ({ sale }) => {

    const [comments, setComments] = useState<Comments>([])
    const [previewPage, setPreviewPage] = useState(0)
    const [page, setPage] = useState(1)

    useEffect(() => {
        (async () => { 
            if (previewPage != page) {
                const get = (await getComments(sale.id, page))||[]
                setComments([...comments, ...get])
                setPreviewPage(page)
            }
        })()
    }, [page])

    const nextPage = () => setPage(page+1)

    const theme = useTheme()

    return (
        <StyledCommentsSection>
            {comments.length
            ?<>
                {comments.map((item: any) => <Comment comment={item} key={item.id}/>)}

                {Number((sale.commentsQ/5)) > page 
                &&<button className="MoreComments" onClick={nextPage}>
                    Ver mais
                </button>}
            </>
            :<div className="NoComments">
                <Image src={notepad} alt="note" width={45} height={45}/>
                <Generic as="strong" font_size={theme.font_sizes.medium} font_weight="900">Ainda não há comentários</Generic>
                <Generic>Seja o primeiro a comentar</Generic>
            </div>}
        </StyledCommentsSection>
    )
}

export default CommentsSection