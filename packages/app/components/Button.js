import React from 'react';

import theme from '../theme';

export default props => (
  <>
    <button {...props} />
    <style jsx>
      {`
        button {
          border: 2px solid ${theme.primary};
          background: ${theme.primary};
          text-transform: uppercase;
          border-radius: .25rem;
          padding: .25rem .5rem;
          color: ${theme.white};
          transition: ease .3s;
          text-align: center;
          font-weight: bold;
          min-width: 200px;
          font-size: .8rem;
        }
        button:hover {
          background: ${theme.bg};
          color: ${theme.primary};
        }
      `}
    </style>
  </>
)