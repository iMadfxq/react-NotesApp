import "./tab_selector.styles.scss";

import { useSelector, useDispatch } from "react-redux";

const TabSelector = () => {
  const currentTab = useSelector((state) => state.currentTab);

  const dispatch = useDispatch();

  const handleTabClick = (e) => {
    dispatch({ type: "TAB_CHANGE", payload: e.target.id });
  };

  return (
    <section className="header__tabs" onClick={handleTabClick}>
      {currentTab === "main-tab" ? ( //Depending on state, it will assign currentTab classname. I couldn't find another way to assign classname depending on the state.
        <>
          <span id="main-tab" className="currentTab">
            Main Notes
          </span>
          <span id="archived-tab">📁 Archived</span>
        </>
      ) : (
        <>
          <span id="main-tab">Main Notes</span>
          <span id="archived-tab" className="currentTab">
            📁 Archived
          </span>
        </>
      )}
    </section>
  );
};

export default TabSelector;
