import React from 'react';

// motions
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '@styles';

const MarqueeWrapper = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100px;
  height: 38px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${media.bigDesktop`
  width: 65px;
  height: 38px;
  `}
`;
const MarqueeWrap = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;
const MarqueeTitle = styled(motion.div)`
  display: flex;
`;
const MarqueeText = styled.p`
  position: relative;
  font-size: 3.5vw;
  font-size: calc(1400vw / var(--size));
  text-transform: uppercase;
  text-decoration: underline;
  line-height: 1;
  color: var(--color-accent);
  margin-right: 0.2rem;

  ${media.tablet`font-size: 14px;`};
`;

const Marquee = ({ children }) => {
  return (
    <MarqueeWrapper>
      <MarqueeWrap>
        <MarqueeTitle
          initial={{ translateX: 0 }}
          animate={{ translateX: '-50%' }}
          transition={{ duration: 7, ease: 'linear', loop: Infinity, delay: 1 }}
        >
          <MarqueeText>{children}</MarqueeText>
          <MarqueeText>{children}</MarqueeText>
          <MarqueeText>{children}</MarqueeText>
          <MarqueeText>{children}</MarqueeText>
        </MarqueeTitle>
      </MarqueeWrap>
    </MarqueeWrapper>
  );
};

export default Marquee;
