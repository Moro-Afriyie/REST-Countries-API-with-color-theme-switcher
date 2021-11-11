import { countriesInterface } from "./../../interfaces/interface";
import axios from "axios";
import { Dispatch } from "redux";

import {
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_BEGIN,
} from "../types/countryTypes";
const url = "https://restcountries.com/v2/all";

export const fetchCountriesBegin = () => {
  return {
    type: FETCH_COUNTRIES_BEGIN,
  };
};

export const fetchCountriesSuccess = (data: countriesInterface) => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: data,
  };
};

export const fetchCountriesError = () => {
  return {
    type: FETCH_COUNTRIES_ERROR,
  };
};

export const fetchCountriesData = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchCountriesBegin());
      const response = await axios.get(url);
      dispatch(fetchCountriesSuccess(response.data));
    } catch (error) {
      dispatch(fetchCountriesError());
    }
  };
};

export const filterCountriesData = (region: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchCountriesBegin());
      const response = await axios.get(
        `https://restcountries.com/v2/region/${region}`
      );
      dispatch(fetchCountriesSuccess(response.data));
    } catch (error) {
      dispatch(fetchCountriesError());
    }
  };
};
