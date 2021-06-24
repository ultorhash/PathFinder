import { FC, useState } from 'react';
import { Board } from './board/Board';
import { Button } from './sideNavBar/button/Button';
import { Sidebar } from './sideNavBar/Sidebar/Sidebar';

import settings from '../icons/settings.svg';

export const Main: FC = () => {
    
    const [isVisible, setVisibility] = useState<boolean>(false);
    const changeVisibility = () => {
        isVisible ? setVisibility(false) : setVisibility(true);
    }

    return (
        <>
            {!isVisible && <Button img={settings} isMarginLeft={false} change={changeVisibility}/>}
            {isVisible && <Sidebar change={changeVisibility}/>}       
            <Board />
        </>
    )
}