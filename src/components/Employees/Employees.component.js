import React from 'react';
//import './Employees.styles.less';
import { EmployeeComponent as Employee } from '../Employee/Employee.component';
import { EmployeeFormComponent as EmployeeForm } from '../EmployeeForm/EmployeeForm.component';

export class EmployeesComponent extends React.Component {
  constructor(props) {
    super();

    this.state = {
      employees: []
    };

    this.actions = {};
    this.actions.fetchEmployees = props.fetchEmployees;
    this.actions.employeeUpdate = props.employeeUpdate;
    this.actions.changeFieldValue = props.changeFieldValue;
    this.actions.resetForm = props.resetForm;

    this.selectHandler = this.selectHandler.bind(this);
    this.saveForm = this.saveForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  selectHandler(employee) {
    const newEmployees = this.state.employees.map((item) => {
      item.selected = item.id === employee.id;
      return item;
    });

    this.setState({
      employees: newEmployees
    });

    for (var prop in employee) {
      this.actions.changeFieldValue(prop, employee[prop]);
    }
  }

  clearForm() {
    const newEmployees = this.state.employees.map((item) => {
      item.selected = false;
      return item;
    });

    this.setState({
      employees: newEmployees
    });

    this.actions.resetForm();
  }

  saveForm(employee) {
    this.actions.employeeUpdate(employee);
  }

  componentWillMount() {
    this.actions.fetchEmployees();
  }

  componentWillReceiveProps(state) {
    if (state.employees.list.length) {
      const newEmployees = state.employees.list.map((item) => {
        // ToDo: do not send this param to server
        item.selected = false;
        return item;
      });

      this.setState({
        employees: newEmployees
      });
    }
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col-xs-4">
            <div className="row bg-primary text-white">
              <span className="col-xs-5">Name</span>
              <span className="col-xs-3">Role</span>
              <span className="col-xs-4">Experience</span>
            </div>
            {this.state.employees.length && this.state.employees.map((n, i) => (
            <Employee
              employee={ n }
              key={ i }
              onSelect={ this.selectHandler }
            />
            ))}
          </div>
          <div className="col-xs-4 col-sm-offset-2">
            <EmployeeForm
              cancelForm={ this.clearForm }
              saveForm= { this.saveForm }
            />
          </div>
        </div>
      </div>
    )
  };
}
