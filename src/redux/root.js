import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { employeesReducer, fetchEmployeesEpic } from './employees/index';
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
  employees: employeesReducer,
  form: formReducer
});

export const rootEpic = combineEpics(
  fetchEmployeesEpic
);
