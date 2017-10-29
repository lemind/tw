import { types } from './employees.types'

export const initialState = {
  list: [],
  loading: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EMPLOYEES:
      return {
        ...state,
        list: [],
        loading: true
      };
    case types.FETCH_EMPLOYEES_SUCCEEDED:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case types.FETCH_EMPLOYEES_FAILED:
      return {
        ...state,
        list: [],
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}
