import { TOGGLE_THEME } from "./../types/restTypes";

interface Action {
  type: typeof TOGGLE_THEME;
}

const initialState = { toggleTheme: false };

export const toggleThemeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        toggleTheme: !state.toggleTheme,
      };
    default:
      return state;
  }
};
