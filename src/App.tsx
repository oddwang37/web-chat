import React from 'react';
import styled  from 'styled-components';
import AuthForm from "./components/AuthForm";

function App() {
  return (
        <AuthWindow>
            <Logo>Noorchat</Logo>
            <AuthForm />

        </AuthWindow>
  );
}

export default App

const AuthWindow = styled.div`
  width: 60%;
  height: 500px;
  background-color: #fff;
`

const Logo = styled.div`
  font-size: 26px;
  font-weight: 700;
  
`

