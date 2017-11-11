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
    case types.EMPLOYEE_UPDATE:
      return {
        ...state,
        loading: true
      };
    case types.EMPLOYEE_UPDATE_SUCCEEDED:
      let newList = state.list.map( (item, index) => {
        if(item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          ...action.payload
        };
      });

      return {
        ...state,
        list: newList,
        loading: false
      };
    case types.EMPLOYEE_UPDATE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case types.EMPLOYEE_DELETE:
      return {
        ...state,
        loading: true
      };
    case types.EMPLOYEE_DELETE_SUCCEEDED:
      const indexDeleted = state.list.findIndex( (item) => {
        return item.id === action.payload.id
      });

      newList = [
        ...state.list.slice(0, indexDeleted),
        ...state.list.slice(indexDeleted + 1)
      ];

      return {
        ...state,
        list: newList,
        loading: false
      };
    case types.EMPLOYEE_DELETE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}
