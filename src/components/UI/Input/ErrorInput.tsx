import React from 'react';
import { ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Alert } from 'reactstrap';
import styled from 'styled-components';

const errorIcon = <FontAwesomeIcon icon={faCircleExclamation} />;
const ErrorInput = ({ name }: ErrorInputProps) => {
  return (
    <ErrorMessage name={name}>
      {(errorMessage) => {
        return (
          <Root color="danger">
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

const Root = styled(Alert)`
  margin-top: 10px;
  padding: 10px;
`;
