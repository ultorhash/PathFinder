export interface ISidebarItem {
    title: string;
    icon: any;
    iconOpened?: any;
    iconClosed?: any;
    subnav?: ISidebarItem[];
}