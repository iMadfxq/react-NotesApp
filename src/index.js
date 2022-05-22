import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import { closeModal } from "./utils/open_close_MODALS";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

const rootHTML = document.getElementById("root")

rootHTML.addEventListener('click', (e) => {
  e.stopPropagation()
  const noteFormWrapper = document.querySelector('.wrapper')
  if (e.target === noteFormWrapper) {
    closeModal(noteFormWrapper)
  }
})