import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { MdDashboard, MdInvertColors } from 'react-icons/md';
import { GiStonePath } from 'react-icons/gi';
import { IoMdResize } from 'react-icons/io';
import { BiTimeFive } from 'react-icons/bi';
import { FaInfo } from 'react-icons/fa';
import { ISidebarItem } from '../sidebarItem/ISidebarItem';

export const SidebarData: ISidebarItem[] = [
    {
        title: 'Board settings',
        icon: <MdDashboard />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Size',
                icon: <IoMdResize />
            },
            {
                title: 'Colors',
                icon: <MdInvertColors />
            }
        ]
    },
    {
        title: 'Delay settings',
        icon: <BiTimeFive />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Found path',
                icon: <GiStonePath />
            },
            {
                title: 'Search path',
                icon: <GiStonePath />
            }
        ]
    },
    {
        title: 'Dijkstra',
        icon: <FaInfo />,
    }
];