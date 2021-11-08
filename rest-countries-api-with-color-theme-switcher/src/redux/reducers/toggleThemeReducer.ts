import { TOGGLE_THEME } from "../types/restTypes";

interface Action {
  type: string;
  payload: string;
}

const initialState = { toggleTheme: false };

const toggleThemeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        toggleTheme: action.payload,
      };
    default:
      return state;
  }
};
