import * as React from "react";
import NavMenuItem from "app/containers/Layout/NavMenuItem";
import { MenuItem } from "app/models/menus/menuItem";
import { PageEnum } from "app/utils/enums/pageEnum";

interface SideBarProps {
    navOpen: boolean;
}

const SideBar: React.FC<SideBarProps> = (props: any) => {
    const { navOpen } = props;
    const menu: MenuItem[] = [
        {
            displayName: "Main menu",
            icon: "icon-dashboard",
            route: "mainMenu",
            isActive: false,
            isOpen: false,

            children: [
                {
                    displayName: "DashBoard",
                    icon: "",
                    route: PageEnum.INDEX,
                    isActive: false
                },
                {
                    displayName: "Summary",
                    icon: "",
                    route: PageEnum.SUMMARY,
                    isActive: false
                },
                {
                    displayName: "Load Profile",
                    icon: "",
                    route: PageEnum.LOAD_PROFILE,
                    isActive: false
                }, 
                {
                    displayName: "Map",
                    icon: "",
                    route: PageEnum.LIGHTING_MAP,
                    isActive: false
                }
            ]
        },
        {
            displayName: "App Setting",
            icon: "icon-setting",
            route: "appSetting",
            isActive: false,
            isOpen: false,

            children: [
                {
                    displayName: "Setting",
                    icon: "",
                    route: PageEnum.SETTING,
                    isActive: false
                }
            ]
        },
        {
            displayName: "User Management",
            icon: "icon-user",
            route: "userManagement",
            isActive: false,
            isOpen: false,

            children: [
                {
                    displayName: "Setting Permission",
                    icon: "",
                    route: PageEnum.SETTING,
                    isActive: false
                },
                {
                    displayName: "User Management",
                    icon: "",
                    route: PageEnum.USER_MANAGEMENT,
                    isActive: false
                }
            ]
        }
    ]

    return (
        <nav className={`nav-menu ${navOpen ? 'nav-open' : ''}`}>
            <NavMenuItem
                menuItem={menu}
            >
            </NavMenuItem>
        </nav>
    );

}

export default SideBar;