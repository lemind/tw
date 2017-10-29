import { ajax } from 'rxjs/observable/dom/ajax';

export const employeesAPI = {
  fetchEmployees: () => {
    return ajax.getJSON(`http://localhost:3000/employees`)
  }
};
