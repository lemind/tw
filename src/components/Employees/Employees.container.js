import { connect } from 'react-redux';

import { EmployeesComponent } from './Employees.component';
import { employeesActions } from '../../redux/employees/index';

export const EmployeesContainer = connect(
  function mapStateToProps(state) {
    return {
      employees: state.employees
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      fetchEmployees: () => dispatch(employeesActions.fetchEmployees()),
    };
  }
)(EmployeesComponent);
