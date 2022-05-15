import "./navigation.styles.scss";

import { Outlet } from "react-router-dom";

import TabSelector from "../../components/tab_selector/tab_selector.component";
import AppTitle from "../../components/app_title/app_title.component";

const Navigation = () => {
  return (
    <>
      <header>
        <AppTitle />
        <TabSelector />
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
