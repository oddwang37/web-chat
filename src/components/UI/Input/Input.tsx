import React, { FC } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';
import { Input as BSInput, Label } from 'reactstrap';

import ErrorInput from 'components/UI/Input/ErrorInput';

const Input: FC<InputProps> = ({ name, label, validate, ...rest }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <InputField tag={Field} id={name} name={name} validate={validate} {...rest} />
      <ErrorInput name={name} />
    </>
  );
};

export default Input;

interface InputProps {
  name: string;
  label: string;
  validate?: (value: string) => any;
}

const InputField = styled(BSInput)`
  margin-bottom: 10px;
`;
