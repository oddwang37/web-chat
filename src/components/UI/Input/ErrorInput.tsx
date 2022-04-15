import React from 'react';
import { ErrorMessage } from 'formik';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const errorIcon = <FontAwesomeIcon icon={faCircleExclamation} />;
const ErrorInput = ({ name }: ErrorInputProps) => {
  return (
    <ErrorMessage name={name}>
      {(errorMessage) => {
        return (
          <Root>
            {' '}
            {errorIcon} {errorMessage}
          </Root>
        );
      }}
    </ErrorMessage>
  );
};

export default ErrorInput;

interface ErrorInputProps {
  name: string;
}

const Root = styled.div`
  background-color: #2846a8;
  border: 2px solid #0d3edf;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  transition: 0.3s all;
  margin-bottom: 5px;
`;
