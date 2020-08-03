import React from 'react';

// motions
import styled from 'styled-components';
import { media } from '@styles';

const MarqueeWrapper = styled.div`
  margin-bottom: 5.25vw;
  margin-bottom: calc(2100vw / var(--size));
  overflow: hidden;
  height: 1.5rem;
`;
const MarqueTitle = styled.div`
  font-size: calc(1400vw / var(--size));
  line-height: 1;
  font-family: var(--font-family);
  color: var(--color-accent);
  text-transform: uppercase;
  text-decoration: underline;
  padding-right: calc(1000vw / var(--size));

  ${media.tablet`font-size: 14px;`};
`;

const Marquee = ({ children }) => {
  return (
    <MarqueeWrapper>
      <MarqueTitle>{children}</MarqueTitle>
    </MarqueeWrapper>
  );
};

export default Marquee;
