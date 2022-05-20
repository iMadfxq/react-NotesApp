import "./tab_selector.styles.scss";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { ACTION_TYPES } from "../../store/store";

const TabSelector = () => {
  const currentTab = useSelector((state) => state.currentTab);

  const dispatch = useDispatch();

  const handleTabClick = (e) => {
    dispatch({ type: ACTION_TYPES.TAB_CHANGE, payload: e.target.id });
  };

  return (
    <section className="header__tabs" onClick={handleTabClick}>
          <Link to={'/'} id="main-tab" className={currentTab === 'main-tab' ? 'currentTab' : ''}>
            Main Notes
          </Link>
          <Link to={'/archived'} id="archived-tab" className={currentTab === 'archived-tab' ? 'currentTab' : ''} >📁 Archived</Link>

    </section>
  );
};

export default TabSelector;
