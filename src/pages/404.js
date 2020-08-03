import React from 'react';

// styles
import styled from 'styled-components';
import Marquee from '@components/marquee';
import { Section, media } from '@styles';

const StyledWrapper = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  user-select: none;
`;
const LargeTitle = styled.h1`
  color: var(--color-accent);
  line-height: 1;
  font-size: 12vw;
  font-weight: lighter;
  margin: 0;
  ${media.bigDesktop`font-size: 200px;`}
  ${media.phablet`font-size: 120px;`};
`;
const StyledSubtitle = styled.h2`
  margin-top: 3rem;
  font-size: 3vw;
  font-weight: 400;
  font-weight: lighter;
  ${media.bigDesktop`font-size: 50px;`};
  ${media.phablet`font-size: 30px;`};
`;

const ErrorPage = () => {
  return (
    <StyledWrapper id="luxy">
      <Marquee>error</Marquee>
      <LargeTitle>404</LargeTitle>
      <StyledSubtitle>Page not found</StyledSubtitle>
    </StyledWrapper>
  );
};

export default ErrorPage;
