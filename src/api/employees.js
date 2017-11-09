import { ajax } from 'rxjs/observable/dom/ajax';
import { API_HOST } from '../config';

export const employeesAPI = {
  fetchEmployees: () => {
    return ajax.getJSON(`${API_HOST}/employees`);
  },
  updateEmployee: (employee) => {
    return ajax({
      url: `${API_HOST}/employee/${employee.id}`,
      method: 'PATCH',
      body: { employee },
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .map(e => e.response);
  },
  deleteEmployee: (employeeId) => {
    return ajax({
      url: `${API_HOST}/employee/${employeeId}`,
      method: 'DELETE'
    })
    .map(e => e.response);
  }

};
