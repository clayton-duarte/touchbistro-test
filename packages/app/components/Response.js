import React from 'react';
import { arrayOf, number } from 'prop-types';

import theme from '../theme';

const Response = ({ response }) => (
  <>
    <section>
      {response && response.map((number, index) => (
        <div key={`response-item-${index}`}>
          <span>{number}</span>
        </div>
      ))}
    </section>
    <style jsx>
      {`
        section {
          display: flex;
          height: 4rem;
        }
        div {
          background: ${theme.bg};
          justify-content: center;
          border-radius: 2rem;
          align-items: center;
          display: flex;
          margin: 1rem;
          height: 4rem;
          width: 4rem;
        }
        span {
          font-family: Dolly Bold, Courier, serif;
          color: ${theme.primary};
          line-height: 2rem;
          font-size: 2rem;
        }
      `}
    </style>
  </>
);

Response.propTypes = {
  response: arrayOf(number),
};

Response.defaultProps = {
  response: [],
};

export default Response;
