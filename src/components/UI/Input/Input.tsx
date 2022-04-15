import React, { FC } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

import ErrorInput from 'components/UI/Input/ErrorInput';

const Input: FC<InputProps> = ({ name, label, validate, ...rest }) => {
  return (
    <Root>
      <Label htmlFor={name}>{label}</Label>
      <InputField id={name} name={name} validate={validate} {...rest} />
      <ErrorInput name={name} />
    </Root>
  );
};

export default Input;

interface InputProps {
  name: string;
  label: string;
  validate?: (value: string) => any;
}

const Root = styled.div``;

const Label = styled.label`
  color: #1a85ccab;
`;
const InputField = styled(Field)`
  margin: 5px 0 10px 0;
  display: block;
  width: 100%;
  height: 40px;
  border: none;
  padding: 0 5px;
  background-color: #c5dbef;
  border-radius: 5px;
  transition: 0.3s all;
  &:focus {
    background-color: #fff;
    outline: 2px solid #3be1e1;
    border: none;
  }
`;
