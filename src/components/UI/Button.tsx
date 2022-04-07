import React, {FC} from 'react';
import styled from 'styled-components';

const Button: FC<ButtonProps> = ({children, ...rest}) => {
    return (
        <Root {...rest}>
            {children}
        </Root>
    )
}

export default Button;

interface ButtonProps {
    children: React.ReactNode
    onClick: () => void;
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
