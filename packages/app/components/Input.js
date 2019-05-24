import React from 'react';
import { string, bool } from 'prop-types';

import Label from './Label';
import theme from '../theme';

const Input = ({ label, error, ...props }) => (
  <>
    {label && (
      <>
        <Label>{label}:</Label>
        <br />
      </>
    )}
    <input {...props} />
    <style jsx>
      {`
        input {
          border: 2px solid ${theme[error ? 'error' : 'secondary']};
          box-sizing: border-box;
          border-radius: .25rem;
          padding: .25rem .5rem;
          color: ${theme.black};
          transition: ease .3s;
          min-width: 200px;
          outline: unset;
        }
        input:focus {
          border: 2px solid ${theme.primary};
        }
      `}
    </style>
  </>
);

Input.propTypes = {
  label: string,
  error: bool,
};

Input.defaultProps = {
  label: null,
  error: false,
};

export default Input;
