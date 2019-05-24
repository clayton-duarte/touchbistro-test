import React from 'react';

import theme from '../theme';

export default props => (
  <>
    <label {...props} />
    <style jsx>
      {`
        label {
          color: ${theme.secondary};
          text-transform: uppercase;
          font-weight: bold;
          font-size: .8rem;
        }
      `}
    </style>
  </>
)