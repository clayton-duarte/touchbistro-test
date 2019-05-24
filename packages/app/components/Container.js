import React from 'react';

export default props => (
  <>
    <main {...props} />
    <style jsx>
      {`
        main {
          justify-content: center;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 420px;
          margin: 0 auto;
          display: flex;
          height: 100vh;
        }
      `}
    </style>
  </>
)