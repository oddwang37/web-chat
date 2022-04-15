import React, { FC } from 'react';
import styled from 'styled-components';

const AuthScreen: FC = (props) => {
  return <Root>{props.children}</Root>;
};

export default AuthScreen;

export const Root = styled.div`
  width: 30%;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  align-self: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
