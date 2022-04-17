import React, { FC } from 'react';
import styled from 'styled-components';

const AuthScreen: FC = (props) => {
  return (
    <Root>
      <Window>{props.children}</Window>
    </Root>
  );
};

export default AuthScreen;

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Window = styled.div`
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
