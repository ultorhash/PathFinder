import styled from 'styled-components';

export const StyledButton = styled.button<{isMarginLeft: boolean}>`
    position: absolute;
    left: ${props => props.isMarginLeft ? 15 : 0}rem;
    width: 50px;
    height: 50px;
    background-color: gray;
    color: #fff;
    cursor: pointer;

    img {
        margin: auto;
        width: 100%;
        height: 100%;       
    }
`;