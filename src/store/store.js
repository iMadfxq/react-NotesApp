import { createStore } from "redux";

export const ACTION_TYPES = {
  TAB_CHANGE: "TAB_CHANGE",
  NEW_NOTE: "NEW_NOTE",
};

const INITIAL_STATE = {
  currentTab: "main-tab",
  displayMode: "square",
  creatingNote: false,
  notes: [],
};

let reducerFn = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.TAB_CHANGE:
      return { ...state, currentTab: action.payload };
    case ACTION_TYPES.NEW_NOTE:
      return {...state, notes: [...state.notes, action.payload]}
    default:
      return state;
  }
};

let store = createStore(reducerFn);

export { store };
