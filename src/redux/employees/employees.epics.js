import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';

import { actions } from './employees.actions';
import { types } from './employees.types';
import { API } from '../../api/index';

export const fetchEmployeesEpic = action$ =>
  action$.ofType(types.FETCH_EMPLOYEES)
    .mergeMap(action => {
      return API.fetchEmployees()
        .map(response => actions.fetchEmployeesSucceeded(response.result))
        .catch(error => of(
          actions.fetchEmployeesFailed({
            status: '' + response.status,
          })
        ))
    });
