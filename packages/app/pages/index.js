import React, { useState } from 'react';
import Axios from 'axios';

import Container from '../components/Container';
import Response from '../components/Response';
import Button from '../components/Button';
import Title from '../components/Title';
import Label from '../components/Label';
import Input from '../components/Input';
import theme from '../theme';

const Home = () => {
  const [{ response, num, error }, setState] = useState({});

  const handleSubmit = e => {
    if (e) e.preventDefault();
    if (num) {
      Axios.post('http://localhost:4000', { num })
        .then(({ data }) => {
          setState({ response: data, error: null, num });
        })
        .catch(err => {
          setState({ error: true, response: null });
        });
    } else {
      setState({ error: true, response: null });
    }
  };

  const handleChange = e => {
    const { value } = e.target;
    setState({ num: value, error: null });
  };

  return (
    <Container>
      <Title>TouchBistro Test</Title>
      <p>Given an number, it will return the middle prime number less than the given number.</p>
      <br />      <form onSubmit={handleSubmit}>
        <Input error={error} label="Give a number" type="number" onChange={handleChange} />
        <br />
        <br />
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
      <br />
      <Label>Response:</Label>
      <Response response={response} />
      <style global jsx>
        {`
            body {
              font-family: Graphik, Arial, sans-serif;
              color: ${theme.black};
              margin: 0;
            }
            @font-face {
              font-family: Graphik;
              src: url(https://cdn.touchbistro.com/wp-content/themes/touchbistro2017/assets/fonts/graphik/Graphik-Regular-Web.woff);
              font-weight: regular;
            }
            @font-face {
              font-family: Graphik;
              src: url(https://cdn.touchbistro.com/wp-content/themes/touchbistro2017/assets/fonts/graphik/Graphik-Bold-Web.woff2);
              font-weight: bold;
            }
            @font-face {
              font-family: Dolly Bold;
              src: url(https://cdn.touchbistro.com/wp-content/themes/touchbistro2017/assets/fonts/underware/DollyPro-Bold.ttf);
            }
            `}
      </style>
    </Container>
  );
};

export default Home;
