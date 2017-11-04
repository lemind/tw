import React from 'react';
import { Field, reduxForm } from 'redux-form';

const positionOptions = [
  {
    label: 'Admin',
    value: 'admin'
  },
  {
    label: 'Developer',
    value: 'developer'
  },
  {
    label: "Manager",
    value: 'manager'
  },
  {
    label: "Tester",
    value: 'tester'
  },
  {
    label: "HR",
    value: 'hr'
  }
];

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

console.log('_form props__', props)
    this.cancel = props.cancelForm;

    this.submitHandler = this.submitHandler.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
  }

  submitHandler(submittedValues) {
    console.log('8.8.8', submittedValues);
    // go to api
  }

  cancelHandler(e) {
    e.preventDefault();
    this.cancel.apply();
  }

  render() {
    const { handleSubmit } = this.props;
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
            />
          </div>
          <div className="form-group">
            <label>Position</label>
            <div>
              <Field className="form-control" name="position" component="select">
                <option></option>
                {positionOptions.map((n, i) => (
                <option key={ i } value={ n.value }>{ n.label }</option>
                ))}
              </Field>
            </div>
          </div>
          <div className="form-group">
            <label>Role</label>
            <div>
              <label className="radio-inline">
                <Field name="role" component="input" type="radio" value="user" />
                User
              </label>
              <label className="radio-inline">
                <Field name="role" component="input" type="radio" value="admin" />
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
                component="textarea" />
            </div>
          </div>
          <div className="btn-toolbar">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button className="btn btn-warning" onClick={ this.cancelHandler }>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export const EmployeeFormComponent = reduxForm({
  form: 'employee'
})(EmployeeForm)
