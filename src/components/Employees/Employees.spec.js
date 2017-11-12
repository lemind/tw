import React from 'react';
import { shallow, mount } from 'enzyme';

import { EmployeesComponent as Employees } from './Employees.component';

const mockCallback = jest.fn();
it('should render Employees', () => {
  expect(shallow(<Employees fetchEmployees={ mockCallback } />)).toMatchSnapshot();
});
