import React, { useEffect, useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';

//styles
import { GlobalStyle } from '@styles';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

//components
import Nav from '@components/nav';
import Head from './Head';

const StyledComeIn = styled(motion.div)`
  background-color: #000;
  position: fixed;
  width: 100%;
  z-index: 9999;
  overflow: hidden;
`;
const CenteredContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const StyledText = styled(motion.h2)`
  color: #fff;
  font-size: 24px;
  font-weight: lighter;
`;

export default ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [startAnim, setStartAnim] = useState(true);
  const messages = [
    'Tweaking the final animations',
    'Having a bit of patience is key',
    'Putting on the finishing touches',
  ];
  const message = messages[Math.floor(Math.random() * messages.length)];

  useEffect(() => {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    setTimeout(() => {
      setStartAnim(false);
      setIsVisible(false);

      setTimeout(() => {
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
      }, 1300);
    }, 1500);
  }, [setIsVisible, setStartAnim]);

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={(site) => (
        <>
          <Head metadata={site.site.siteMetadata} />
          <GlobalStyle freeze={startAnim} />
          <AnimatePresence exitBeforeEnter>
            {startAnim && (
              <StyledComeIn
                initial={{ height: '100vh' }}
                animate={{ height: '100vh' }}
                exit={{ height: 0 }}
                transition={{
                  ease: [1, 0, 0.265, 1],
                  delay: 0.5,
                  duration: 1,
                }}
              >
                <CenteredContent>
                  {isVisible && (
                    <StyledText
                      initial={{ y: 26 * 2, opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      exit={{ y: -26 * 2, opacity: 0 }}
                      transition={{
                        ease: [0.6, 0.05, -0.01, 0.9],
                        duration: 0.8,
                      }}
                    >
                      {message}
                    </StyledText>
                  )}
                </CenteredContent>
              </StyledComeIn>
            )}
          </AnimatePresence>
          <Nav />
          {children}
        </>
      )}
    />
  );
};
