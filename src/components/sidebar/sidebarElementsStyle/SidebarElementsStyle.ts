import styled from 'styled-components';

export const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    background-color: #101010;
`;

export const SidebarNav = styled.div<{sidebar: boolean}>`
    width: 250px;
    height: 100vh;
    background-color: #101010;
    position: fixed;
    cursor: pointer;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 0.4s;
`;

export const NavIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    width: 5rem;
    cursor: pointer;
`;

export const StyledButtonStart = styled.button`
    white-space: nowrap;
    padding: 0.5%;
    font-weight: 500;
    border: 2px solid dodgerblue;
    background-color: black;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 1%;

    &:hover {
        background-color: #303030;
        transition: 0.3s;
    }
`;

export const StyledButtonExit = styled.button`
    white-space: nowrap;
    padding: 0.5%;
    font-weight: 500;
    border: 2px solid dodgerblue;
    background-color: green;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 1%;

    &:hover {
        background-color: #303030;
        transition: 0.3s;
    }
`;