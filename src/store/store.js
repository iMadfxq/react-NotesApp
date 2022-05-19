import {createStore} from 'redux'

const INITIAL_STATE = {
  currentTab: "main-tab",
  displayMode: 'square',
  notes: {}
}

let reducerFn = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'TAB_CHANGE':
      return {...state, currentTab: action.payload}
    default:
      return state
  }
}

let store = createStore(reducerFn)

export {store}