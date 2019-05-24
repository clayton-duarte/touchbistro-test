import React, { useState } from 'react';
import Axios from 'axios';

const Home = () => {
  const [{ response, num, error }, setState] = useState({});

  const handleSubmit = e => {
    if (e) e.preventDefault();
    if (num) {
      Axios.post('http://localhost:4000', { num })
        .then(({ data }) => {
          setState({ response: data, error: null });
        })
        .catch(err => {
          setState({ error: true, response: null });
        });
    }
  };

  const handleChange = e => {
    const { value } = e.target;
    setState({ num: value, error: null });
  };

  return (
    <main>
      <h1>TouchBistro Test</h1>
      <p>Given an number, it will return the middle prime number less than the given number.</p>
      <form onSubmit={handleSubmit}>
        <label>Give a number</label>
        <input type="number" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <p><strong>Response:</strong> {response && JSON.stringify(response.data)}</p>
      <style jsx>
        {`
          * {
            font-family: Courier;
          }
        `}
      </style>
    </main>
  );
};

export default Home;
