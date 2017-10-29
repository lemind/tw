import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { employeesReducer, fetchEmployeesEpic } from './employees/index';

export const rootReducer = combineReducers({
  employees: employeesReducer
});

export const rootEpic = combineEpics(
  fetchEmployeesEpic
);
