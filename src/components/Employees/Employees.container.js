import { connect } from 'react-redux';
import { change, reset } from 'redux-form'

import { EmployeesComponent } from './Employees.component';
import { employeesActions } from '../../redux/employees/index';

export const EmployeesContainer = connect(
  function mapStateToProps(state) {
    return {
      employees: state.employees,
      auth: state.auth
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      fetchEmployees: () => {
        dispatch(employeesActions.fetchEmployees())
      },
      employeeUpdate: (employee) => {
        dispatch(employeesActions.employeeUpdate(employee))
      },
      employeeDelete: (employeeId) => {
        dispatch(employeesActions.employeeDelete(employeeId))
      },
      changeFieldValue: (field, value) => {
        dispatch(change('employee', field, value))
      },
      resetForm: () => {
        dispatch(reset('employee'))
      }
    };
  }
)(EmployeesComponent);
