import styled from "styled-components";

const StyledShops = styled.a`
    color: ${({theme}) => theme.colors.c6};
    font-weight: 500;
    text-decoration: none;

    :hover {
        cursor: pointer;
    }

    ::before {
        vertical-align: text-bottom;
        display: inline-block;
        content: "";
        width: 25px;
        height: 20px;
        background-repeat: no-repeat;
        background-image: url(https://pechinchou.com.br/_next/static/media/IconHeaderStore.b64032a3.svg);
        filter: brightness(${({theme}) => theme.filter.brightness});
        background-position: 0%;
    }
`

const Shops:React.FC = () => {
    return (
        <StyledShops href="#">
            Lojas
        </StyledShops>
    )
}

export default Shops