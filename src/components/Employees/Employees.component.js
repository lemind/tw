import React from 'react';
import { Modal } from 'react-bootstrap';

//import './Employees.styles.less';
import { EmployeeComponent as Employee } from '../Employee/Employee.component';
import { UserSwitchContainer as UserSwitch } from '../UserSwitch/UserSwitch.container';
import { EmployeeFormComponent as EmployeeForm } from '../EmployeeForm/EmployeeForm.component';
import { ADMIN_CONFIG } from '../../config';

export class EmployeesComponent extends React.Component {
  constructor(props) {
    super();

    this.state = {
      employees: [],
      permission: false,
      showModal: false,
      userType: 'user'
    };

    this.actions = {};
    this.actions.fetchEmployees = props.fetchEmployees;
    this.actions.employeeUpdate = props.employeeUpdate;
    this.actions.employeeDelete = props.employeeDelete;
    this.actions.changeFieldValue = props.changeFieldValue;
    this.actions.resetForm = props.resetForm;

    this.selectHandler = this.selectHandler.bind(this);
    this.saveForm = this.saveForm.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.getPermission = this.getPermission.bind(this);
  }

  getPermission() {
    return this.state.userType === 'admin';
  }

  selectHandler(employee) {
    const newEmployees = this.state.employees.map((item) => {
      item.selected = item.id === employee.id;
      return item;
    });

    this.setState({
      employees: newEmployees,
      permission: this.getPermission(employee)
    });

    for (var prop in employee) {
      this.actions.changeFieldValue(prop, employee[prop]);
    }

    !this.getPermission() && this.openModal();
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
    var serverEmployee = {...employee};

    delete serverEmployee.selected;

    this.actions.employeeUpdate(serverEmployee);
  }

  deleteEmployee(employeeId) {
    // ToDo: change for bootstrap confirm
    if (confirm('Are you sure?')) {
      this.actions.employeeDelete(employeeId);
    }
  }

  componentWillMount() {
    this.actions.fetchEmployees();
  }

  componentWillReceiveProps(state) {
    if (state.auth.userType !== this.state.userType) {
      this.setState({
        userType: state.auth.userType
      });
    }

    if (state.employees.list.length) {
      var selectedItemId = this.state.employees.find((localItem) => {
        if (localItem.selected) {
          return localItem;
        }
      });

      const newEmployees = state.employees.list.map((item) => {
        item.selected = !!(selectedItemId && selectedItemId.id === item.id);
        return item;
      });

      this.setState({
        employees: newEmployees
      });
    }
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
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
          <div className="col-xs-4 col-sm-offset-1">
            <EmployeeForm
              cancelForm={ this.clearForm }
              saveForm={ this.saveForm }
              permission={ this.getPermission() }
              deleteEmployee={ this.deleteEmployee }
            />
          </div>
          <div className="col-xs-2 col-sm-offset-1">
            <span>Admin mode</span>
            <UserSwitch/>
          </div>
        </div>

        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <h4 className="text-danger">Caution!</h4>
          </Modal.Header>
          <Modal.Body>
            <p className="text-danger">You do not have permission for editing or deleting this employee.</p>
          </Modal.Body>
        </Modal>
      </div>
    )
  };
}
