export function getTotalCasesRequest() {
  return {
    type: "@cases/TOTAL_NUMBERS_REQUEST"
  };
}

export function getTotalCasesSuccess(data) {
  return {
    type: "@cases/TOTAL_NUMBERS_SUCCESS",
    payload: data
  };
}

export function getCountriesRequest() {
  return {
    type: "@cases/COUNTRIES_REQUEST"
  };
}

export function getCountriesSuccess(data) {
  return {
    type: "@cases/COUNTRIES_SUCCESS",
    payload: data
  };
}
