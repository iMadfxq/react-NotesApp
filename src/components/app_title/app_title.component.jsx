import "./app_title.styles.scss";

import { Link } from "react-router-dom";

import Button from '../button/button.component'
import { BUTTON_TYPES } from "../button/button.component";


const AppTitle = () => {
  return (
    <section className="header__title">
      <h1>Notes - React App</h1>
      <Link to={"/create"}>
        <Button type={BUTTON_TYPES.NEW_NOTE} />
      </Link>
    </section>
  );
};

export default AppTitle