import React from 'react';
import { shallow, mount } from 'enzyme';

import { EmployeeComponent as Employee } from './Employee.component';

it('should render Employee', () => {
  expect(shallow(<Employee employee={ {} } />)).toMatchSnapshot();
});

it('should call function on click Employee component', () => {
  const mockCallback = jest.fn();
  const component = mount(<Employee employee={ {} } onSelect={ mockCallback } />);
  component.find('.row').simulate('click');
  expect(mockCallback).toBeCalled()
});
