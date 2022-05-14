import "./navigation.styles.scss";

import { Link, Outlet } from "react-router-dom";

import Button from "../../components/button/button.component";
import { BUTTON_TYPES } from "../../components/button/button.component";

const Navigation = () => {
  return (
    <>
      <header>
        <section className="header__title">
          <h1>Notes - React App</h1>
          <Link to={"/create"}>
            <Button type={BUTTON_TYPES.NEW_NOTE} />
          </Link>
        </section>
        <section className="header__tabs">
          <span>Main Notes</span>
          <span>Archived</span>
        </section>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
