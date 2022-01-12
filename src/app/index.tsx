import * as React from 'react';
import '../assets/scss/style.scss';
// import PrivateRoute from './middleware/privateRoute';
import 'bootstrap/dist/js/bootstrap'
import { Routes, Route } from 'react-router-dom';
import HeaderLayout from './containers/Layout/HeaderLayout';
import NoPermission from './containers/Pages/Error/NoPermission';
import { PageEnum } from './utils/enums/pageEnum';
import Setting from './containers/Pages/Setting/Setting';
import UserManagement from './containers/Pages/User/UserManagement';
import LoadProfile from './containers/Pages/Summary/LoadProfile';
import Summary from './containers/Pages/Summary/Summary';
import DashBoard from './containers/Pages/DashBoard/DashBoard';
import LightingMap from './containers/Pages/Map/LightingMap';

interface RouterAppProps {
}

const RouterApp: React.FC<RouterAppProps> = (props: any) => {
  let [triggerChangeLanguage, setTriggerChangeLanguage] = React.useState(false);
  return (
    <>
      <Routes>
        {/* Routes that needs a navbar will need to go as children of this Route component */}
        <Route path={PageEnum.INDEX} element={<HeaderLayout triggerLanguage={() => setTriggerChangeLanguage(!triggerChangeLanguage)} />}>
          <Route path={PageEnum.INDEX} element={<DashBoard />} />
          <Route path={PageEnum.SUMMARY} element={<Summary />} />
          <Route path={PageEnum.LOAD_PROFILE} element={<LoadProfile />} />
          <Route path={PageEnum.SETTING} element={<Setting />} />
          <Route path={PageEnum.LIGHING_MAP} element={<LightingMap />} />
          <Route path={PageEnum.USER_MANAGEMENT} element={<UserManagement />} />
        </Route>
        <Route path="*" element={<NoPermission />} />
      </Routes>
    </>
  );
}

export default RouterApp;

