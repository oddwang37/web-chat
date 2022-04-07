import React, { FC } from 'react';
import styled from 'styled-components';

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <Root {...rest}>{children}</Root>;
};

export default Button;

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Root = styled.button`
  border: none;
  background-color: #007aff;
  width: 100%;
  height: 50px;
  text-align: center;
  vertical-align: center;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #034891;
  }
`;
