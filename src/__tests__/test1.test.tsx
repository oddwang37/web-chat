import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from 'components/LoginForm';

Enzyme.configure({ adapter: new Adapter() });

it('Renders LoginForm component', () => {
  const loginForm = shallow(<LoginForm />);
  expect(loginForm.find('form')).toHaveLength(1);
});
