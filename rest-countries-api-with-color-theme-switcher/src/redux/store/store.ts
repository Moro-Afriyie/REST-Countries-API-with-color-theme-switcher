import { createStore } from "redux";
import { toggleThemeReducer } from "../reducers/toggleThemeReducer";

export const store = createStore(toggleThemeReducer);
