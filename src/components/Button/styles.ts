import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #FF5F5D;
    color: #FFF;

    border: 1px solid #FF5F5D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    :disabled{
        background-color: #FF5F5D40;
        border: 1px solid #FF5F5D40;
        cursor: not-allowed;
    }
`