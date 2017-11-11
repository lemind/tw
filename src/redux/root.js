import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { employeesReducer, employeesEpics } from './employees/index';
import { authReducer } from './auth/index';
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
  employees: employeesReducer,
  auth: authReducer,
  form: formReducer
});

export const rootEpic = combineEpics(
  employeesEpics.fetchEmployeesEpic,
  employeesEpics.employeesUpdateEpic,
  employeesEpics.employeesDeleteEpic
);
