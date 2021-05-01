import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    direction: rtl;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    color: #fff;
    background-color: #34495e;
  }
  @media (max-width: 576px) {
    body {
      font-size: 18px;
    }
  }
`;
