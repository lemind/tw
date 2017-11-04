import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

//import './Employee.styles.less';

export class EmployeeComponent extends React.Component {
  constructor(props) {
    super();

    this.select = props.onSelect;

    this.state = {
      employee: props.employee
    };

    this.handleClick = this.handleClick.bind(this);
  }

  getPopover(shortDescription) {
    return <Popover id="popover-trigger-hover-focus">
      { shortDescription }
    </Popover>
  };

  handleClick(event) {
    event.preventDefault();
    this.select(this.state.employee);
  };

  render() {
    const employee = this.state.employee;

    return (
      <div>
        <OverlayTrigger
          trigger={['hover', 'focus']}
          placement="bottom"
          overlay={this.getPopover(employee.shortDescription)}
        >
          <div
            className={"row " + (employee.selected ? "bg-success text-white" : "")}
            onClick={this.handleClick}
          >
            <span className="col-xs-5">{employee.firstName} {employee.lastName}</span>
            <span className="col-xs-3">{employee.role}</span>
            <span className="col-xs-4">{employee.experience}</span>
          </div>
        </OverlayTrigger>
      </div>
    )
  };
}