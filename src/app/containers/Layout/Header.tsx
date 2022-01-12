import * as React from "react";
import { i18nHelper } from "app/i18n/i18n";

interface HeaderProps {
    handleNavOpen: Function;
    onChangeLanguage: Function;
    isNavOpen: boolean
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

    const { handleNavOpen, onChangeLanguage, isNavOpen } = props;

    let [navOpen, setNavOpen] = React.useState(isNavOpen);
    let [langOpen, setLangOpen] = React.useState(false);
    let [langLabel, setLangLabel] = React.useState('EN');

    const clickOpenSideBar = () => {
        setNavOpen(!navOpen);
        handleNavOpen(!navOpen)
    }

    const clickOpenLanguage = () => {
        setLangOpen(!langOpen);
    }

    const closeDropdown = () => {
        setLangOpen(false);
        document.removeEventListener('click', closeDropdown);
    }

    const clickChangeLanguage = (lang: string) => {
        setLangLabel(lang.toUpperCase())
        i18nHelper.changeLanguage(lang);
        setLangOpen(false);
        localStorage.setItem('lng', lang);
        onChangeLanguage();
    }

    return (
        <header className="headbar white">
            <div className="float-left">
                <div className="nav-toggle" onClick={() => clickOpenSideBar()}>
                    <i className="icon-menu">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i>
                </div>
                <a className="">
                    <span>Service</span>
                </a>
                <div className="sub-branch">
                    <strong>Service</strong>
                    <span>-</span>
                    <span className="ml-8px">1</span>
                </div>
            </div>
            <div className="float-right">
                <div className="lang">
                    <i className="icon-globe">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i>
                    <button type="button" className="btn dropdown-toggle" onClick={() => clickOpenLanguage()}>
                        <span>{langLabel}</span>
                    </button>
                    {langOpen &&
                        <div className="dropdown-lang dropdown-menu dropdown-menu-right show">
                            <a onClick={() => clickChangeLanguage('en')} data-title="en" className={`dropdown-item ${langLabel === 'EN' ? 'active' : ''}`}>
                                {i18nHelper.translate("Common.Lang.English")}
                            </a>
                            <a onClick={() => clickChangeLanguage('th')} data-title="th" className={`dropdown-item ${langLabel === 'TH' ? 'active' : ''}`}>
                                {i18nHelper.translate("Common.Lang.Thai")}
                            </a>
                        </div>
                    }
                </div>
                <div className="notification">
                    <button type="button" className="btn">
                        <i className="icon-notification">
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </i>
                    </button>
                </div>
                <div className="user-dropdown">
                    <button type="button" className="btn">
                        <img src="../../assets/images/header/profile-empty.png" />
                        <span>Waraphon Koedduang</span>
                    </button>
                </div>
                <div className="user-menu">
                    <div className="user-menu-scroll">
                        <div className="user-info media">
                            <div className="float-left">
                                <div className="user-avatar">
                                    <img src="../../assets/images/header/profile-picture.png" />
                                </div>
                            </div>
                            <div className="media-body ellipsis">
                                <div className="title ellipsis">Chaleeporn Sereewatanapong</div>
                                <small className="d-block ellipsis">chaleeporn.s@pantavanij.com</small>
                            </div>
                        </div>
                        <ul className="list-user-menu">
                            <li><a>Edit Profile</a></li>
                            <li><a>Account Setting</a></li>
                        </ul>
                        <hr className="mb-2 mt-8px" />
                        <div className="title">My Company</div>
                        <div className="card-body p-0" style={{ maxHeight: '272.125px' }}>
                            <table className="table table-nostyle">
                                <tbody>
                                    <tr className="active">
                                        <td>
                                            <div className="font-small font-bold color-primary mb-4px ellipsis">Pantavanij Co., Ltd.</div>
                                            <small className="d-block ellipsis">00000 Headquarter (สำนักงานประกันสังคมแห่งชาติ)</small>
                                        </td>
                                        <td className="col-action">
                                            <div className="d-flex align-items-center">
                                                <small className="status status-blue">Default</small>
                                                <div className="btn-dropdown">
                                                    <button type="button" data-toggle="dropdown" className="btn-icon">
                                                        <i data-toggle="tooltip" data-placement="top" title="" className="icon-action" data-original-title="More"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <div className="dropdown-list">
                                                            <a className="dropdown-item">Go to This Company</a>
                                                            <a className="dropdown-item">Mark as Default</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="font-small font-bold color-primary mb-4px ellipsis">Pantavanij Co., Ltd.</div>
                                            <small className="d-block ellipsis">00000 Headquarter (สำนักงานประกันสังคมแห่งชาติ)</small>
                                        </td>
                                        <td className="col-action">
                                            <div className="d-flex align-items-center">
                                                <div className="btn-dropdown">
                                                    <button type="button" data-toggle="dropdown" className="btn-icon">
                                                        <i data-toggle="tooltip" data-placement="top" title="" className="icon-action" data-original-title="More"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <div className="dropdown-list">
                                                            <a className="dropdown-item">Go to This Company</a>
                                                            <a className="dropdown-item">Mark as Default</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="font-small font-bold color-primary mb-4px ellipsis">SM Entertainment Co., Ltd.(SM ...</div>
                                            <small className="d-block ellipsis">2 Seongsu-dong (성수동)</small>
                                        </td>
                                        <td className="col-action">
                                            <div className="d-flex align-items-center">
                                                <div className="btn-dropdown">
                                                    <button type="button" data-toggle="dropdown" className="btn-icon">
                                                        <i data-toggle="tooltip" data-placement="top" title="" className="icon-action" data-original-title="More"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <div className="dropdown-list">
                                                            <a className="dropdown-item">Go to This Company</a>
                                                            <a className="dropdown-item">Mark as Default</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="font-small font-bold color-primary mb-4px ellipsis">SM Entertainment Co., Ltd.(SM ...</div>
                                            <small className="d-block ellipsis">2 Seongsu-dong (성수동)</small>
                                        </td>
                                        <td className="col-action">
                                            <div className="d-flex align-items-center">
                                                <div className="btn-dropdown">
                                                    <button type="button" data-toggle="dropdown" className="btn-icon">
                                                        <i data-toggle="tooltip" data-placement="top" title="" className="icon-action" data-original-title="More"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <div className="dropdown-list"><a className="dropdown-item">Go to This Company</a>
                                                            <a className="dropdown-item">Mark as Default</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="font-small font-bold color-primary mb-4px ellipsis">SM Entertainment Co., Ltd.(SM ...</div>
                                            <small className="d-block ellipsis">2 Seongsu-dong (성수동)</small>
                                        </td>
                                        <td className="col-action">
                                            <div className="d-flex align-items-center">
                                                <div className="btn-dropdown">
                                                    <button type="button" data-toggle="dropdown" className="btn-icon">
                                                        <i data-toggle="tooltip" data-placement="top" title="" className="icon-action" data-original-title="More"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <div className="dropdown-list">
                                                            <a className="dropdown-item">Go to This Company</a>
                                                            <a className="dropdown-item">Mark as Default</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="font-small font-bold color-primary mb-4px ellipsis">SM Entertainment Co., Ltd.(SM ...</div>
                                            <small className="d-block ellipsis">2 Seongsu-dong (성수동)</small>
                                        </td>
                                        <td className="col-action">
                                            <div className="d-flex align-items-center">
                                                <div className="btn-dropdown">
                                                    <button type="button" data-toggle="dropdown" className="btn-icon">
                                                        <i data-toggle="tooltip" data-placement="top" title="" className="icon-action" data-original-title="More"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <div className="dropdown-list">
                                                            <a className="dropdown-item">Go to This Company</a>
                                                            <a className="dropdown-item">Mark as Default</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="text-center">
                                            <button type="button" className="btn btn-outline noborder">Register Company</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="user-menu-footer">
                        <ul className="list-user-menu">
                            <li><a href="">Log out</a></li>
                        </ul>
                    </div>
                </div>
                <div className="apps">
                    <button type="button" data-toggle="dropdown" className="btn dropdown-toggle">
                        <i className="icon-apps"></i>
                    </button>
                    {/* <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" data-title="Supplier Web Work" className="dropdown-item d-flex align-items-center">
                            <img src="../../assets/images/header/sww.png" className="img-item" />
                            Supplier Web Work</a>
                    </div> */}
                </div>
            </div>
        </header>
    );
}

export default Header;