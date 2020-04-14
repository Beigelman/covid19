import { takeLatest, call, put, all } from "redux-saga/effects";
import api from "../../../services/api";
import pyApi from "../../../services/pythonApi";
import { toast } from "react-toastify";
import { getTotalCasesSuccess, getCountriesSuccess } from "./actions";
import moment from "moment";

export function* getTotalCases() {
  try {
    const response = yield call(api.get, "/");
    const { confirmed, recovered, deaths } = response.data;
    yield put(getTotalCasesSuccess({ confirmed, recovered, deaths }));
  } catch (err) {
    toast.error("Erro ao capturar dados da api");
  }
}

export function* getCountries() {
  try {
    const countries = yield call(api.get, "/countries");
    const response = yield call(api.get, "/confirmed");
    const countriesNumbers = [];
    for (let i of countries.data.countries) {
      const states = [];

      for (let j of response.data) {
        if (String(j.countryRegion) === String(i.name)) {
          states.push(j);
        }
      }
      if (states.length > 0) {
        const totals = {
          confirmed: 0,
          recovered: 0,
          deaths: 0,
          active: 0,
          iso: states[0].iso2,
        };

        states.forEach((item) => {
          totals.confirmed += item.confirmed;
          totals.recovered = item.recovered
            ? totals.recovered + item.recovered
            : totals.recovered;
          totals.deaths += item.deaths;
          totals.active += item.active;
        });

        countriesNumbers.push({
          name: i.name,
          ...totals,
          lastUpdate: states[0].lastUpdate,
          states,
        });
      }
    }

    const recoveredUS = yield call(pyApi.post, "/total-daily", {
      start: moment(new Date())
        .subtract(1, "days")
        .format("MM/DD/YYYY")
        .replace(/[/]/g, "-"),
      end: moment(new Date())
        .subtract(1, "days")
        .format("MM/DD/YYYY")
        .replace(/[/]/g, "-"),
      country: "US",
    });
    const index = countriesNumbers.findIndex((x) => x.name === "US");
    countriesNumbers[index].recovered = recoveredUS.data[0].recovered;

    const orderedCountries = countriesNumbers
      .slice()
      .sort((a, b) => b.confirmed - a.confirmed);

    yield put(getCountriesSuccess(orderedCountries));
  } catch (err) {
    toast.error("Erro ao capturar dados da api");
  }
}

export default all([
  takeLatest("@cases/TOTAL_NUMBERS_REQUEST", getTotalCases),
  takeLatest("@cases/COUNTRIES_REQUEST", getCountries),
]);
