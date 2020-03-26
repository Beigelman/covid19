import produce from "immer";

const INITIAL_STATE = {
  loadingNumbers: true,
  totalNumbers: [],
  loadingCountries: true,
  countriesNumbers: [],
  mapData: null
};

export default function cases(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@cases/TOTAL_NUMBERS_SUCCESS": {
        draft.totalNumbers = action.payload;
        draft.loadingNumbers = false;
        break;
      }
      case "@cases/TOTAL_NUMBERS_RESQUEST": {
        draft.loadingNumbers = true;
        break;
      }
      case "@cases/COUNTRIES_SUCCESS": {
        draft.countriesNumbers = action.payload;
        draft.loadingCountries = false;
        break;
      }
      case "@cases/COUNTRIES_REQUEST": {
        draft.loadingCountries = true;
        break;
      }
      case "@cases/MAP_DATA_SUCCESS": {
        draft.mapData = action.payload;
        break;
      }
      default:
    }
  });
}
