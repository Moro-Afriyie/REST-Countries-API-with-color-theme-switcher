import {
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_BEGIN,
} from "../types/countryTypes";

interface countryInterface {
  countries: any[];
  loading: boolean;
  error: string | null;
}
const initialState = {
  countries: [],
  loading: false,
  error: null,
};

type Action =
  | { type: typeof FETCH_COUNTRIES_BEGIN }
  | { type: typeof FETCH_COUNTRIES_SUCCESS; payload: any }
  | { type: typeof FETCH_COUNTRIES_ERROR; payload: any };

export const countriesReducer = (
  state: countryInterface = initialState,
  action: Action
) => {
  switch (action.type) {
    case FETCH_COUNTRIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload.data,
      };

    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        countries: [],
      };

    default:
      return state;
  }
};
