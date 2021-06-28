import { FC, useState } from 'react';
import { ISidebarItem } from '../sidebarItem/ISidebarItem';

import { StyledSidebarOption, StyledSidebarOptionTitle, StyledSidebarChildOption } from './SubmenuStyle';

interface SidebarLinkProps {
    item: ISidebarItem;
};

export const Submenu: FC<SidebarLinkProps> = ({ item }) => {

    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <StyledSidebarOption onClick={showSubnav}>
                <div>
                    {item.icon}
                    <StyledSidebarOptionTitle>{item.title}</StyledSidebarOptionTitle>
                </div>
                <div>{item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}</div>
            </StyledSidebarOption>
            {subnav &&
                item?.subnav?.map((subnavItem, index) => {
                    return (
                        <StyledSidebarChildOption key={index}>
                            {subnavItem.icon}
                            <StyledSidebarOptionTitle>{subnavItem.title}</StyledSidebarOptionTitle>
                        </StyledSidebarChildOption>
                    );
                })
            }
        </>
    );
};