import React, {FC, InputHTMLAttributes} from 'react';
import styled from 'styled-components';

const Input: FC<InputProps> = ({name, label, ...rest}) => {
    return (
    <Root>
        <Label htmlFor={name}>{label}</Label>
        <InputField id={name} {...rest} />
    </Root>
    )
}

export default Input;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Root = styled.div``

const Label = styled.label`
  
`
const InputField = styled.input`
  width: 150px;
  height: 35px;
  border: none;
  padding: 0 5px
`

