import { types } from './employees.types';
import { actions } from './employees.actions';
import { reducer } from './employees.reducer';
import { fetchEmployeesEpic } from './employees.epics';

export {
  actions as employeesActions,
  reducer as employeesReducer,
  fetchEmployeesEpic,
}
