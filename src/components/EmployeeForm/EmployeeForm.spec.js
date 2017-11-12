import React from 'react';
import { shallow, mount } from 'enzyme';
import * as reduxForm from 'redux-form';

import { EmployeeFormPure as EmployeeForm } from './EmployeeForm.component';

class mockField extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return <div></div>;
  }
}

const handleSubmit = (fn) => {
  return fn;
};

it('should render EmployeeForm', () => {
  expect(shallow(<EmployeeForm handleSubmit={ handleSubmit } />)).toMatchSnapshot();
});

it('should call appropriate function on submit form', () => {
  Object.defineProperty(reduxForm, 'Field', {
    get: () => mockField
  });

  const mockCallback = jest.fn();
  const componentRaw = <EmployeeForm
    handleSubmit={ handleSubmit }
    saveForm={ mockCallback } />;
  const component = mount(componentRaw);
  component.find('[type="submit"]').simulate('submit');
  expect(mockCallback).toBeCalled()
});

it('should call appropriate function on click cancel button', () => {
  Object.defineProperty(reduxForm, 'Field', {
    get: () => mockField
  });

  const mockCallback = jest.fn();
  const componentRaw = <EmployeeForm
    handleSubmit={ handleSubmit }
    cancelForm={ mockCallback } />;
  const component = mount(componentRaw);
  component.find('[name="cancelButton"]').simulate('click');
  expect(mockCallback).toBeCalled()
});

it('should call appropriate function on click delete button if permission is true', () => {
  Object.defineProperty(reduxForm, 'Field', {
    get: () => mockField
  });

  const mockCallback = jest.fn();
  const componentRaw = <EmployeeForm
    handleSubmit={ handleSubmit }
    permission={ true }
    deleteEmployee={ mockCallback } />;
  const component = mount(componentRaw);
  component.find('[name="deleteButton"]').simulate('click');
  expect(mockCallback).toBeCalled()
});

it('should not call appropriate function on click delete button if permission is false', () => {
  Object.defineProperty(reduxForm, 'Field', {
    get: () => mockField
  });

  const mockCallback = jest.fn();
  const componentRaw = <EmployeeForm
    handleSubmit={ handleSubmit }
    permission={ false }
    deleteEmployee={ mockCallback } />;
  const component = mount(componentRaw);
  component.find('[name="deleteButton"]').simulate('click');
  expect(mockCallback).not.toBeCalled()
});
