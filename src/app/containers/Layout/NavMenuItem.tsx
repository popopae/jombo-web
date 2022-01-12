import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ChildrenItem, MenuItem } from 'app/models/menus/menuItem';
import { ValidateHelper } from "app/utils/helpers/validateHelper";

interface NavMenuItemProps {
    menuItem: MenuItem[];
}

const NavMenuItem: React.FC<NavMenuItemProps> = (props: any) => {
    let navigate = useNavigate();
    const { menuItem } = props;

    const listMenuItemModel: MenuItem[] = menuItem;

    let [listMenuItem, setListMenuItem] = React.useState(listMenuItemModel)

    React.useEffect(() => {
        if (!ValidateHelper.isObjectEmptyOrNullOrUndefined(listMenuItem)) {
            setListMenuItem(listMenuItem)
        }
    }, [listMenuItem]);

    const onClickMainMenu = (item: MenuItem) => {
        const menu: MenuItem[] = menuItem;
        menu.find(f => f.displayName === item.displayName).isOpen = !item.isOpen
        menu.find(f => f.displayName === item.displayName).isActive = !item.isActive
        setListMenuItem([...menu])
    }

    const onClickSubMenu = (route: string, data: ChildrenItem) => {

        const menu: MenuItem[] = menuItem;
       
        menu.forEach((item: MenuItem) => {
            if(item.route === route){
                item.isActive = true;
            } else {
                item.isActive = false;
            }

            item.children.forEach((subItem: ChildrenItem) => {
                if(subItem.route === data.route){
                    subItem.isActive = true;
                } else {
                    subItem.isActive = false;
                }
            })
        })
        setListMenuItem([...menu])
        navigate(data.route)
    }

    return (
        <ul className="mainmenu">
            {listMenuItem.map((itemLv1: MenuItem) => (
                <li key={itemLv1.displayName} className={`has-submenu ${itemLv1.isActive ? 'active' : ''} ${itemLv1.isOpen ? 'open' : ''}`}>
                    <a onClick={() => onClickMainMenu(itemLv1)}>
                        <i className={itemLv1.icon}>
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </i>
                        <span style={{ color: "white" }}>{itemLv1.displayName}</span>
                        <i className="icon-small-angle-right"></i>
                    </a>
                    {itemLv1.children.length > 0 && itemLv1.isOpen &&
                        <ul key={itemLv1.displayName} className="submenu" style={{ height: itemLv1.children.length * 40 + 'px' }}>
                            {itemLv1.children.map((itemLv2: MenuItem) => (
                                <li key={itemLv2.displayName} className={`${itemLv2.isActive ? 'active' : ''}`}>
                                    <a onClick={() => onClickSubMenu(itemLv1.route, itemLv2)}>
                                        <span style={{ color: "white" }}>{itemLv2.displayName}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    }
                </li>
            ))
            }
        </ul>
    );
}

export default NavMenuItem;