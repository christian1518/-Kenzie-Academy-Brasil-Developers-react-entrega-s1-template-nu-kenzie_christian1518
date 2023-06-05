import styled from 'styled-components';

export const StyledFlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;

  section, form {
    flex-grow: 1;
  }

  form {
    min-width: clamp(150px, 100%, 350px);
  }

 section {
  min-width: clamp(150px, 100%, 350px);
 }
`