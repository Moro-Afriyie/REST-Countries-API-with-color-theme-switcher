import { combineReducers } from "redux";
import { toggleThemeReducer } from "./toggleThemeReducer";
import { countriesReducer } from "./countryReducer";

export const rootReducer = combineReducers({
  toggleThemeReducer,
  countriesReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
