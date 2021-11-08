import { TOGGLE_THEME } from "../types/restTypes";

export const toggleTheme = (theme: boolean) => {
  return {
    type: TOGGLE_THEME,
    payload: theme,
  };
};
