import { FC } from 'react';
import { Button } from '../button/Button';
import { StyledSidebar } from './SidebarStyle';

import close from '../../../icons/close.svg';
import { useState } from 'react';

export const Sidebar: FC<{change: () => void}> = (props) => {

    const [isDimensions, setIsDimensions] = useState<boolean>(true);
    const changeDimensions = () => {
        isDimensions ? setIsDimensions(false) : setIsDimensions(true);
    }

    return (
        <StyledSidebar>
            <Button img={close} isMarginLeft={true} change={props.change}/>
        </StyledSidebar>
    )
}