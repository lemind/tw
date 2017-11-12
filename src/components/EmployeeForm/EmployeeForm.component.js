import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { API } from '../../api/index';
import { POSITIONS } from '../../config';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);

    this.positionOptions = POSITIONS;

    this.cancelForm = props.cancelForm;
    this.saveForm = props.saveForm;
    this.deleteEmployee = props.deleteEmployee;

    this.submitHandler = this.submitHandler.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  submitHandler(submittedValues) {
    this.saveForm.apply(null, [submittedValues]);
  }

  deleteHandler(submittedValues) {
    this.deleteEmployee.apply(null, [submittedValues.id]);
  }

  cancelHandler(e) {
    e.preventDefault();
    this.cancelForm.apply();
  }

  render() {
    const { handleSubmit, permission } = this.props;

    return (
      <div>
        <form onSubmit={ handleSubmit(this.submitHandler) }>
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <Field
              id="firstName"
              className="form-control"
              name="firstName"
              type="text"
              component="input"
              disabled={ true }
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <Field
              id="lastName"
              className="form-control"
              name="lastName"
              type="text"
              component="input"
              disabled={ true }
            />
          </div>
          <div className="form-group">
            <label>Position</label>
            <div>
              <Field
                className="form-control"
                name="position"
                component="select"
                disabled={ !permission }
              >
                <option></option>
                { this.positionOptions.map((n, i) => (
                <option key={ i } value={ n.value }>{ n.label }</option>
                )) }
              </Field>
            </div>
          </div>
          <div className="form-group">
            <label>Role</label>
            <div>
              <label className="radio-inline">
                <Field
                  name="role"
                  component="input"
                  type="radio"
                  value="user"
                  disabled={ !permission }
                />
                User
              </label>
              <label className="radio-inline">
                <Field
                  name="role"
                  component="input"
                  type="radio"
                  value="admin"
                  disabled={ !permission }
                />
                Admin
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="experience">Experience</label>
            <Field
              id="experience"
              className="form-control"
              name="experience"
              type="text"
              component="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="shortDescription">Short description</label>
            <Field
              id="shortDescription"
              className="form-control"
              name="shortDescription"
              type="text"
              component="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="longDescription">Long description</label>
            <div>
              <Field 
                className="form-control"
                id="longDescription"
                name="longDescription"
                rows="3"
                component="textarea" />
            </div>
          </div>
          <div className="btn-toolbar">
            <button
              type="submit"
              className="btn btn-success"
            >Submit</button>
            <button
              className="btn btn-warning"
              name="cancelButton"
              onClick={ this.cancelHandler }
            >Cancel</button>
            <button
              className="btn btn-danger"
              disabled={ !permission }
              name="deleteButton"
              onClick={ handleSubmit(this.deleteHandler) }
            >Delete</button>
          </div>
        </form>
      </div>
    );
  }
}

export const EmployeeFormComponent = reduxForm({
  form: 'employee'
})(EmployeeForm)

export { EmployeeForm as EmployeeFormPure }