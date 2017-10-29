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
  })
}
