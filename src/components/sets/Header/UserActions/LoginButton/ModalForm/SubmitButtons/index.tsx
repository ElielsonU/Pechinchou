import styled from "styled-components";

const StyledSubmitButtons = styled.div`
    font-weight: 900;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: ${({theme}) => theme.font_sizes.medium};
    row-gap: 20px;
    column-gap: 10px;
    margin-top: 10px;
    align-items: center;

    button {
        font-size: inherit;
        height: 45px;
        border-radius: 10px;
    }
    
    .Submit {
        grid-column: 1/3;
        font-weight: 900;
        border: 1px solid ${({theme}) => theme.colors.c7};
        color: ${({theme}) => theme.colors.c7};
        background-color: ${({theme}) => theme.colors.c2};
        transition: background-color 500ms ease, color 500ms ease;

        :hover {
            color: ${({theme}) => theme.colors.c2};
            background-color: ${({theme}) => theme.colors.c7};
        }
    }

    .Facebook {
        background-color: #1877f2;
        color: white;

        ::before {
            content: "";
            margin-right: 10px;
            display: inline-block;
            background: url(https://pechinchou.com.br/_next/static/media/IconFacebook.7ec5f7cf.svg);
            background-size: 100%;
            height: 25px;
            width: 25px;
            vertical-align: text-bottom;
        }
    }

    .Google {
        background-color: white;
        border: 1px solid #e6e6f0;
        color: #272a2c;

        ::before {
            content: "";
            margin-right: 10px;
            display: inline-block;
            background: url(https://pechinchou.com.br/_next/static/media/LogoGoogle.6ebf4132.svg);
            background-size: 100%;
            height: 25px;
            width: 25px;
            vertical-align: text-bottom;
        }

    }
`

const SubmitButtons: React.FC = () => {
    return (
        <StyledSubmitButtons>
            <button className="Submit" type="submit">Entrar</button>
            <button className="Facebook" 
            onClick={(event) => event.preventDefault()}>Facebook</button>
            <button className="Google" 
            onClick={(event) => event.preventDefault()}>Google</button>
        </StyledSubmitButtons>
    )
}

export default SubmitButtons