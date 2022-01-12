import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "app/containers/Layout/Header";
import SideBar from "app/containers/Layout/SideBar";

// import ModalLoading from "../../components/UI/ModalLoading";
interface HeaderLayoutProps {
    triggerLanguage: Function
}

const HeaderLayout: React.FC<HeaderLayoutProps> = (props: any) => {
    const { triggerLanguage } = props;
    let [navOpen, setNavOpen] = React.useState(false);
    
    // let [isLoading, setIsLoading] = React.useState(false);
    // let [triggerChangeLanguage, setTriggerChangeLanguage] = React.useState(false);

    // const handleSetIsLoading = (isLoading: boolean) => {
    //     setIsLoading(isLoading);
    // }

    const onChangeLanguage = () => {
        triggerLanguage();
    }

    const handleNavOpen = (open: boolean) => {
        setNavOpen(open);
    }

    return (
        <>
            <SideBar
                navOpen={navOpen}
            />
            <div className={`container-fluid ${navOpen ? 'nav-open' : ''}`}>
                <Header
                    handleNavOpen={handleNavOpen}
                    isNavOpen={navOpen}
                    // setIsLoading={handleSetIsLoading}
                    onChangeLanguage={onChangeLanguage}
                >
                </Header>
                <Outlet />
            </div>
        </>
    );

}

export default HeaderLayout;
