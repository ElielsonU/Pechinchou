import styled from "styled-components";

const SliderButton = styled.input`
    margin-left: auto;
    margin-right: 0;
    appearance: none;
    cursor: pointer;
    width: 30px;
    height: 15px;
    border-radius: 8px;
    background-color: #dee0e0;
    position: relative;
    transition: background-color 500ms ease;
    
    ::before {
        transition: right 300ms ease-out;
        right: 15px;
        box-sizing: content-box;
        content: " ";
        display: inline-block;
        position: absolute;
        top: -1px;
        border-radius: 50%;
        background-color: #f2f4f6;
        border: 1px solid #707274;
        width: 15px;
        height: 15px;
    }

    :checked {
        background-color: ${({theme}) => theme.colors.c7};
        ::before {
            right: 0;
        }
    }
`

export default SliderButton