import { createGlobalStyle } from 'styled-components';

export const GlobalReset = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  button{
    cursor: pointer;
    border: none;
    background: transparent;
  }

  a{
    text-decoration: none;
  }

  ul, ol{
    list-style: none;
  }

  input{
    border: 0;
    background: transparent;
  }

  select{
    border: 0;
    background: transparent;
    color: var(--Color-Grey-3);
  }
`