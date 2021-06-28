import { useState } from 'react';
import { FC } from 'react';
import { Board } from './board/Board';
import { Sidebar } from './sidebar/sidebar/Sidebar';
import styled from 'styled-components';

const StyledMain = styled.div`

`;

export const Main: FC = () => {

    const [started, setStart] = useState<boolean>(false);
    const [render, setRender] = useState<boolean>(true);

    const changeReadiness = () => setStart(!started);

    const changeRender = () => {
        if (started) setStart(false);
        setRender(!render);
        setTimeout(() => setRender(true), 10);
    };

    return (
        <StyledMain>
            <Sidebar run={changeReadiness} changeRender={changeRender} start={started}/>
            {render && <Board start={started} changeRender={changeRender}/>}
        </StyledMain>
    )
}