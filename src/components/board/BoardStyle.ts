import styled from 'styled-components';

export const StyledBoard = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const StyledField = styled.div`
    margin: 1% 0;
`;

export const StyledGrid = styled.div`
    display: flex;
    grid-template-rows: repeat(40, 1fr);
    background-color: white;
`;

export const StyledGridContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: 1%;

    button {
        display: inline-block;
        padding: 0.3em 1em;
        text-decoration: none;
        color: #67c5ff;
        border: 3px solid deepskyblue;
        border-radius: 3px;
        transition: .4s;
        cursor: pointer;
        font-weight: bold;

        :hover {
            background: deepskyblue;
            color: white;
        }
    }
`;