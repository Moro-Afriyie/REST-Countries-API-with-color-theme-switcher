import { TOGGLE_THEME } from "./../types/restTypes";

interface Action {
  type: typeof TOGGLE_THEME;
  payload: boolean;
}

const initialState = { toggleTheme: false };

export const toggleThemeReducer = (state = initialState, action: Action) => {
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
