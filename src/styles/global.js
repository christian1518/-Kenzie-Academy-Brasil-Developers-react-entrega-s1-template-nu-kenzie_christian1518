import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --Color-Primary: #FD377E;
    --Color-Primary-2: #E34981;
    --Color-Secondary: #03B898;
    --Color-Grey-1: #F8F9FA;
    --Color-Grey-2: #E9ECEF;
    --Color-Grey-3: #868E96;
    --Color-Grey-4: #212529;
    --Color-White: #FFFFFF;

    --Font-Primary: 'Nunito', sans-serif;
    --Font-Secondary: 'Inter', sans-serif;

    --Font-Size-1: 1rem;
    --Font-Size-2: 0.75rem;
    --Font-Size-3: 0.625rem;

    --Radius-1: 0.5rem;
    --Radius-2: 0.25rem;
    --Radius-3: 0.125rem;
  }
`
