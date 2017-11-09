import { types } from './employees.types'

export const actions = {
  fetchEmployees: () => ({
    type: types.FETCH_EMPLOYEES
  }),
  fetchEmployeesSucceeded: (payload) => ({
    type: types.FETCH_EMPLOYEES_SUCCEEDED,
    payload
  }),
  fetchEmployeesFailed: (error) => ({
    type: types.FETCH_EMPLOYEES_FAILED,
    error
  }),
  employeeUpdate: (employee) => ({
    type: types.EMPLOYEE_UPDATE,
    employee
  }),
  employeeUpdateSucceeded: (payload) => ({
    type: types.EMPLOYEE_UPDATE_SUCCEEDED,
    payload
  }),
  employeeUpdateFailed: (error) => ({
    type: types.EMPLOYEE_UPDATE_FAILED,
    error
  }),
  employeeDelete: (employeeId) => ({
    type: types.EMPLOYEE_DELETE,
    employeeId
  }),
  employeeDeleteSucceeded: (payload) => ({
    type: types.EMPLOYEE_DELETE_SUCCEEDED,
    payload
  }),
  employeeDeleteFailed: (error) => ({
    type: types.EMPLOYEE_DELETE_FAILED,
    error
  })
}
