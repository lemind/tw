import { types } from './employees.types';
import { actions } from './employees.actions';
import { reducer } from './employees.reducer';
import { employeesEpics } from './employees.epics';

export {
  actions as employeesActions,
  reducer as employeesReducer,
  employeesEpics,
}
