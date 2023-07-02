import CommentsSection from "./CommentsSection"
import PostComments from "./PostComments"

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


interface CommentsProps {
    sale: Sale
}

const Comments:React.FC<CommentsProps> = ({
    sale
}) => {
    return (
        <div id="comments">
            <PostComments sale={sale}/>
            
            <CommentsSection sale={sale}/>
        </div>
    )
}

export default Comments