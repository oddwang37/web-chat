import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const Input: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <Root>
      <Label htmlFor={name}>{label}</Label>
      <InputField id={name} {...rest} />
    </Root>
  );
};

export default Input;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Root = styled.div``;

const Label = styled.label`
  color: #1a85ccab;
`;
const InputField = styled.input`
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
