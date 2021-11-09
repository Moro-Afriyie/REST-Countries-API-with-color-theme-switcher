import { countriesInterface } from "../../interfaces/interface";
import {
  SET_COUNTRY_BEGIN,
  SET_COUNTRY_FAILURE,
  SET_COUNTRY_SUCCESS,
  SET_COUNTRY_EMPTY,
} from "../types/getCountryTypes";

interface countryInterface {
  country: countriesInterface[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  country: [],
  loading: false,
  error: null,
};

type Action =
  | { type: typeof SET_COUNTRY_BEGIN }
  | { type: typeof SET_COUNTRY_SUCCESS; payload: countriesInterface[] }
  | { type: typeof SET_COUNTRY_FAILURE; payload: string }
  | { type: typeof SET_COUNTRY_EMPTY };

export const setCountryReducer = (
  state: countryInterface = initialState,
  action: Action
): countryInterface => {
  switch (action.type) {
    case SET_COUNTRY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SET_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        country: action.payload,
      };

    case SET_COUNTRY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        country: [],
      };

    case SET_COUNTRY_EMPTY:
      return {
        ...state,
        loading: true,
        country: [],
        error: null,
      };
    default:
      return state;
  }
};
