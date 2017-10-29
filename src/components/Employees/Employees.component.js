import React from 'react';
//import './Header.styles.less';

export class EmployeesComponent extends React.Component {
  constructor(props) {
    super();

    this.state = {
      employees: []
    };


    this.actions = {};
    this.actions.fetchEmployees = props.fetchEmployees;
  }

  componentWillMount() {
    this.actions.fetchEmployees();
  }

  componentWillReceiveProps(state) {
    if (state.employees.list.length) {
      this.setState({
        employees: state.employees.list
      });

      console.log('state', state.employees.list);
    }
  }


  render() {
    return (
      <div>
        {this.state.employees.length && this.state.employees.map((n, i) => (
        <div key={i}>
          <strong>First name </strong><span>{n.firstName} </span>
          <strong>Last name </strong><span>{n.lastName} </span>
        </div>
        ))}
      </div>
    )
  };
}