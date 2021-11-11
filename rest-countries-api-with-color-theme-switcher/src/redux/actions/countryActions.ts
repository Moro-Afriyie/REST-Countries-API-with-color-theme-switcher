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
  let url = `https://restcountries.com/v2/region/${region}`;

  //checks if the search name is empty and use the all countries url
  if (region === "default") {
    url = `https://restcountries.com/v2/all`;
  }
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

export const SeacrhCountry = (name: string) => {
  let url = `https://restcountries.com/v2/name/${name}`;

  //checks if the search name is empty and use the all countries url
  if (name === "") {
    url = `https://restcountries.com/v2/all`;
  }
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchCountriesBegin());
      const response = await axios.get(url);
      console.log("response: ", response.data);
      if (response.data.status === 404) {
        dispatch(fetchCountriesError());
      } else {
        dispatch(fetchCountriesSuccess(response.data));
      }
    } catch (error) {
      dispatch(fetchCountriesError());
    }
  };
};
