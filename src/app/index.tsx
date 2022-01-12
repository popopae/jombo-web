import * as React from 'react';
import '../assets/scss/style.scss';
// import PrivateRoute from './middleware/privateRoute';
// import 'bootstrap/dist/js/bootstrap'
import { Routes, Route } from 'react-router-dom';
import HeaderLayout from 'app/containers/Layout/HeaderLayout';
// import NoPermission from 'app/containers/Pages/Error/NoPermission';
import { PageEnum } from 'app/utils/enums/pageEnum';
import Setting from 'app/containers/Pages/Setting/Setting';
import UserManagement from 'app/containers/Pages/User/UserManagement';
import LoadProfile from 'app/containers/Pages/Summary/LoadProfile';
import Summary from 'app/containers/Pages/Summary/Summary';
import DashBoard from 'app/containers/Pages/DashBoard/DashBoard';
import LightingMap from 'app/containers/Pages/Map/LightingMap';

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
          <Route path={PageEnum.LIGHTING_MAP} element={<LightingMap />} />
          <Route path={PageEnum.USER_MANAGEMENT} element={<UserManagement />} />
        </Route>
        {/* <Route path="*" element={<DashBoard />} /> */}
      </Routes>
    </>
  );
}

export default RouterApp;

