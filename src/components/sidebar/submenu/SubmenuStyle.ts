import styled from 'styled-components';

export const StyledSidebarOption = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    font-size: 1.2rem;
    padding: 1.5rem;
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;
    border-left: 8px solid #101010;
    
    &:hover {
        background-color: #202020;
        border-left: 8px solid dodgerblue;
    }
`;

export const StyledSidebarOptionTitle = styled.span`
    margin-left: 1rem;
`;

export const StyledSidebarChildOption = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 2rem;
    font-size: 1rem;
    padding: 1.5rem;
    text-decoration: none;
    color: #ffffff;
    margin-left: 5%;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: dodgerblue;
    }
`;