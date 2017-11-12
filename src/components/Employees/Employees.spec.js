import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import { EmployeesComponent as Employees } from './Employees.component';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
  auth: {
    userType: 'user'
  }
};
const store = mockStore(initialState);

const list = [
  {
    id: 1,
    firstName: 'Tom',
    lastName: 'Figness',
    position: 'Admin',
    role: 'Admin',
    experience: 6,
    shortDescription: 'Kind of tricky mate',
    longDescription: 'Firstly...'
  }
];

const mockCallback = jest.fn();
it('should render Employees', () => {
  expect(shallow(<Employees fetchEmployees={ mockCallback } />)).toMatchSnapshot();
});

it('should enable appropriate elements if mode is changed', () => {
  const mockCallback = jest.fn();
  const options = {
    context: { store },
    childContextTypes: { store: React.PropTypes.object.isRequired }
  }

  const componentRaw = <Employees fetchEmployees={ mockCallback } />;
  const component = mount(componentRaw, options);

  component.setProps({ employees: {list: list}, auth: {userType: 'user'} });
  expect(component.find('[name="deleteButton"]').props().disabled).toBe(true);

  component.setProps({ auth: {userType: 'admin'} });
  expect(component.find('[name="deleteButton"]').props().disabled).toBe(false);
});
