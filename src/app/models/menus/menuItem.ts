export interface MenuItem {
    displayName?: string;
    icon?: string;
    route?: string;
    isActive?: boolean;
    isOpen?: boolean;

    children?: ChildrenItem[];
}

export interface ChildrenItem {
    displayName?: string;
    icon?: string;
    route?: string;
    isActive?: boolean;
}
