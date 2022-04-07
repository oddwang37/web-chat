import React from 'react';
import styled from 'styled-components';

import Input from 'components/UI/Input';
import Button from 'components/UI/Button';


const AuthForm = () => {
    return (
        <Root>
            <Input name="email" label="Email" />
            <Input name="password" label="Password" />
            <Button onClick={() => console.log('asdasd')}>Log in</Button>
            <SignUp>Need an account? <SignUpLink>SignUp now!</SignUpLink></SignUp>
        </Root>

    );
}

export default AuthForm;

const Root = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const SignUp = styled.div`
    color: rgba( 0, 0, 0 ,0.7);
`

const SignUpLink = styled.a`
  color: #2ecde8;
  text-decoration: none;

`