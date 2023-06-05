import styled, { css } from 'styled-components';

const inputDefault = css`
  width: 100%;
  border-radius: var(--Radius-1);
  background: var(--Color-Grey-1);
  color: var(--Color-Grey-3);
  padding: 0 1rem;
  font-weight: 400;
`

export const StyledInput = styled.input`
  ${inputDefault};
  height: 3.3125rem;
  font-size: var(--Font-size-1);

  :focus{
    border: 2px solid var(--Color-Grey-4);
  }
`

export const StyledSelect = styled.select`
  ${inputDefault};
  height: 3rem;
  font-size: var(--Font-Size-2);

  ::after{
    padding: 0, 1rem;
  }
`

export const StyledOption = styled.option`
  background: var(--Color-Grey-1);
  border: 0;
  height: 2.1875rem;
`

export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: var(--Font-Size-2);
  color: var(--Color-Grey-4);
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 22.1875rem;
  height: 27.125rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-family: var(--Font-Secondary);
  padding: 1.3125rem;
  margin-bottom: 1.25rem;
`

export const StyledP = styled.p`
  font-weight: 400;
  font-size: var(--Font-Size-2);
  color: var(--Color-Grey-3);
`