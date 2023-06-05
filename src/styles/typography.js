import styled, { css } from 'styled-components';

export const HeadlineOneStyles = css`
  font-family: var(--Font-Primary);
  font-weight: 800;
  font-size: 2.375rem;
  color: ${({fontColor}) => fontColor};
`
export const HeadlineTwoStyles = css`
  font-family: var(--Font-Primary);
  font-weight: 700;
  font-size: 1.375rem;
  color: ${({fontColor}) => fontColor};
`
export const HeadlineThreeStyles = css`
  font-family: var(--Font-Primary);
  font-weight: 700;
  font-size: 1rem;
  color: ${({fontColor}) => fontColor};
`
export const HeadlineTextStyles = css`
  font-family: var(--Font-Secondary);
  color: ${({fontColor}) => fontColor};
  font-size: var(--Font-Size-2);
  font-weight: 400;
`
export const HeadlineSpanStyles = css`
  font-family: var(--Font-Secondary);
  color: ${({fontColor}) => fontColor};
  font-size: var(--Font-Size-1);
  font-weight: 700;
`

export const StyledTitleOneBig = styled.h1`
  ${HeadlineOneStyles}
`
export const StyledTitleTwoBig = styled.h2`
  ${HeadlineOneStyles}
`
export const StyledTitleThreeBig = styled.h3`
  ${HeadlineOneStyles}
`



export const StyledTitleOneMedium = styled.h1`
  ${HeadlineTwoStyles}
`
export const StyledTitleTwoMedium = styled.h2`
  ${HeadlineTwoStyles}
  margin-top: 1.25rem;
`
export const StyledTitleThreeMedium = styled.h3`
  ${HeadlineTwoStyles}
`



export const StyledTitleOneSmall = styled.h1`
  ${HeadlineThreeStyles}
`
export const StyledTitleTwoSmal = styled.h2`
  ${HeadlineThreeStyles}
`
export const StyledTitleThreeSmall = styled.h3`
  ${HeadlineThreeStyles}
`

export const StyledText = styled.p`
  ${HeadlineTextStyles}
`

export const StyledSpan = styled.span`
  ${HeadlineSpanStyles}
`