import { Generic } from "@/components/models";
import Image from "next/image";
import styled, { useTheme } from "styled-components";

const StyledCommentsSection = styled.section`
    background-color: ${({theme}) => theme.colors.c1};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1px;
    
    padding: 48px 24px 56px;
    border-radius: 0px 0px 4px 4px;

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
`

interface CommentsSectionProps {
    comments: Array<string>
}

const CommentsSection:React.FC<CommentsSectionProps> = ({
    comments
}) => {

    const theme = useTheme()

    return (
        <StyledCommentsSection>
            {comments.length
            ?<div></div>
            :<div className="NoComments">
                <Image src="https://pechinchou.com.br/_next/static/media/NotHaveComment.4adecc25.svg" alt="note" width={45} height={45}/>
                <Generic as="strong" font_size={theme.font_sizes.medium} font_weight="900">Ainda não há comentários</Generic>
                <Generic>Seja o primeiro a comentar</Generic>
            </div>}
           
        </StyledCommentsSection>
    )
}

export default CommentsSection