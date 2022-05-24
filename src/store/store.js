import { createStore } from "redux";
import { loadState } from "./localStorage";
import { saveState } from "./localStorage";

export const ACTION_TYPES = {
  TAB_CHANGE: "TAB_CHANGE",
  NEW_NOTE: "NEW_NOTE",
  DISPLAY_MODE_CHANGE: "DISPLAY_MODE_CHANGE",
  NOTE_DELETED: "NOTE_DELETED",
  NOTE_ARCHIVED: "NOTE_ARCHIVED",
  EDITING: 'EDITING',
  NOTE_EDITED: 'NOTE_EDITED',
  EDITING_CANCELLED: 'EDITING_CANCELLED'
};

let localStorageState = loadState();

const INITIAL_STATE = localStorageState
  ? localStorageState
  : {
      currentTab: "main-tab",
      displayMode: "display-square",
      notes: [],
      noteBeingEdited: 0,
    };

let reducerFn = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.TAB_CHANGE:
      return { ...state, currentTab: action.payload };
    case ACTION_TYPES.NEW_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case ACTION_TYPES.DISPLAY_MODE_CHANGE:
      return { ...state, displayMode: action.payload };
    case ACTION_TYPES.NOTE_DELETED:
      return { ...state, notes: [...action.payload] };
    case ACTION_TYPES.NOTE_ARCHIVED:
      return { ...state, notes: [...action.payload] };
    case ACTION_TYPES.EDITING:
      return {...state, noteBeingEdited: action.payload}
    case ACTION_TYPES.NOTE_EDITED:
      return { ...state, noteBeingEdited: 0, notes: [...action.payload] };
    case ACTION_TYPES.EDITING_CANCELLED:
      return {...state, noteBeingEdited: 0}
    default:
      return state;
  }
};

let store = createStore(reducerFn);

store.subscribe(() => {
  saveState({ ...store.getState() });
});

export { store };
