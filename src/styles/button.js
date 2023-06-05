import styled from 'styled-components';

export const StyledButtonForm = styled.button`
  width: 100%;
  height: 3rem;
  font-size: var(--Font-Size-1);
  font-weight: 500;
  color: var(--Color-White);
  background-color: var(--Color-Primary);
  border-radius: var(--Radius-1);
  
  :hover {
    background-color: var(--Color-Primary-2);
    transition: 1s;
  }
`

export const StyledButtonCard = styled.button`
  width: 3.0625rem;
  height: 1.1875rem;
  font-size: var(--Font-Size-3);
  font-weight: 400;
  font-family: var(--Font-Primary);
  border-radius: var(--Radius-3);
  color: var(--Color-Grey-4);

  :hover {
    background-color: var(--Color-Grey-4);
    color: var(--Color-Grey-2);
    transition: 0.5s;
  }
`