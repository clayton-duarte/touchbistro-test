import React from 'react';

import theme from '../theme';

export default props => (
  <>
    <h1 {...props} />
    <style jsx>
      {`
        h1 {
          font-family: Dolly Bold, Courier, serif;
          color: ${theme.primary};
          font-size: 2rem;
        }
      `}
    </style>
  </>
)