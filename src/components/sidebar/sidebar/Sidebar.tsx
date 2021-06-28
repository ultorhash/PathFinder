import React, { FC, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { SidebarData } from '../sidebarData/SidebarData';
import { Submenu } from '../submenu/Submenu';
import { Board } from '../../board/Board';
import { Nav, NavIcon, SidebarNav, StyledButtonStart, StyledButtonExit } from '../sidebarElementsStyle/SidebarElementsStyle';

export const Sidebar: FC<{run: () => void, changeRender: () => void, start: boolean}> = (props) => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavIcon onClick={showSidebar}>
                    <FiSettings />
                </NavIcon>
                {!props.start && <StyledButtonStart onClick={() => props.run()}>{"Run algorithm"}</StyledButtonStart>}
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <div>
                    <NavIcon onClick={showSidebar}>
                        <AiOutlineClose />
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <Submenu item={item} key={index} />;
                    })}
                </div>
            </SidebarNav>
        </IconContext.Provider>
    );
};