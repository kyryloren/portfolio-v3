import React from 'react';
import useWindowSize from '../_useWindowSize';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { email } from '@utils/config';

// styles
import styled from 'styled-components';
import { media, Section } from '@styles';
import { motion } from 'framer-motion';

import ScrollDown from '@images/scroll.svg';

const Wrapper = styled(Section)`
  align-items: center;
  height: 100%;
  user-select: none;
  min-height: 580px;
`;
const Container = styled.div`
  display: flex;
  height: 100vh;
  min-height: 600px;
  justify-content: flex-start;
  align-items: center;
`;
const Headline = styled(motion.h1)`
  z-index: 2;
  max-width: 80%;
  height: auto;
  margin-top: -2rem;
  font-weight: lighter;
  font-size: calc(5400vw / var(--size));
  line-height: 5.25vw;
  color: var(--color-text);

  ${media.tablet`
  max-width: 100%;
  margin-top: -20vh;
  font-size: 40px;
  line-height: 1.4;
  `};
  ${media.thone`
  margin-top: -25vh;
  font-size: 31px;
  `};
`;
const LineText = styled(motion.div)`
  overflow: hidden;
  white-space: nowrap;
`;
const Underline = styled.span`
  position: relative;
  text-decoration: underline;
  padding: 2px;
`;
const AvatarImage = styled(Img)`
  user-select: none;
  position: absolute !important;
  width: 25vw;
  z-index: 1;
  right: calc(13500vw / var(--size));

  ${media.tablet`
  max-width: 280px;
  width: 40vw;
  min-width: 185px;
  z-index: 1;
  right: 9vw;
  margin-top: 20vh;
  `};
  ${media.thone`right: 5.4vw;`};
`;
const ContactCTA = styled.div`
  position: absolute;
  top: calc(75vh - 2700vw / var(--size) - 2.5vw);
  left: calc(33500vw / var(--size));
  text-align: right;

  ${media.bigDesktop`top: calc(65vh - 2700vw / var(--size) - 2.5vw);`};
  ${media.tablet`
  top: 92vh;
  right: 9vw;
  `};
  ${media.thone`right: 5.4vw;`};
`;
const LinkLine = styled.div`
  bottom: -1.25vw;
  bottom: calc(-500vw / var(--size));
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  overflow: hidden;
  transform-origin: left;

  :after,
  :before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: var(--color-text);
    transition: transform 0.75s cubic-bezier(0.19, 1, 0.22, 1);
    will-change: transform;
  }

  :after {
    transform-origin: left;
    transform: scaleX(1);
    transition-delay: 0.25s;
    will-change: transform;
  }
`;
const StyledLink = styled.a`
  height: calc(2700vw / var(--size));
  padding-right: 0;
  font-size: calc(1800vw / var(--size));
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: auto;
  cursor: pointer;
  text-align: right;
  width: auto;
  min-width: max-content;
  text-decoration: none;

  :hover ${LinkLine}:after, ${LinkLine}:before {
    transform-origin: right;
    transform: scaleX(0);
    transition-delay: 0s;
  }

  :hover ${LinkLine}:before {
    transform-origin: left;
    transform: scaleX(1);
    transition-delay: 0.25s;
  }

  ${media.tablet`font-size: 18px!important;`};
`;
const LinkInner = styled.div`
  position: relative;
`;
const LinkTextWrapper = styled.div`
  line-height: 0.9;
  color: var(--color-text);
`;
const LinkText = styled.div`
  ${media.bigDesktop`font-size: inherit !important;`};
`;
const StyledScrollImage = styled(motion.img)`
  position: absolute;
  width: calc(20000vw / var(--size)) !important;
  left: calc(100vw / var(--size));
  top: calc(100vh - 10vw);
  will-change: transform;

  ${media.bigDesktop`
  width: calc(25000vw / var(--size)) !important;
  left: calc(100vw / var(--size));
  top: calc(100vh - 12vw);
  `};
  ${media.desktop`
  width: 160px!important;
  top: calc(100vh - 210px);
  left: calc(-10000vw / var(--size));
  `};
  ${media.tablet`
  width: 160px!important;
  top: calc(100vh - 210px);
  left: calc(-5000vw / var(--size));
  `};
`;

const Hero = () => {
  const width = useWindowSize().width;

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.PNG" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const containerVariants = {
    before: { opacity: 0 },
    after: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 2.5 },
    },
  };
  const textVariants = {
    before: {
      y: -26 * 2,
      opacity: 0,
    },
    after: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.6, 0.05, -0.01, 0.9], duration: 2 },
    },
  };

  return (
    <Wrapper>
      <Container>
        <Headline
          variants={containerVariants}
          initial={'before'}
          animate={'after'}
        >
          {width > 860 ? (
            <>
              <LineText variants={textVariants}>
                Hey, I'm <Underline>Kyrylo</Underline>, UI/UX designer
              </LineText>
              <LineText variants={textVariants}>
                and software engineer, focused on
              </LineText>
              <LineText variants={textVariants}>
                crafting polished user experiences.
              </LineText>
            </>
          ) : (
            <motion.div
              variants={textVariants}
              initial={'before'}
              animate={'after'}
            >
              Hey, I'm <Underline>Kyrylo</Underline>, UI/UX designer and
              software engineer, focused on crafting exceptional user
              experiences.
            </motion.div>
          )}
        </Headline>
        <AvatarImage
          fluid={data.file.childImageSharp.fluid}
          alt="Kyrylo Orlov"
        />
      </Container>
      <ContactCTA>
        <StyledLink
          href={`mailto:${email}?subject=Let's make something cool`}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <LinkInner>
            <LinkTextWrapper>
              <LinkText>dev@kyryloorlov.com</LinkText>
            </LinkTextWrapper>
            <LinkLine />
          </LinkInner>
        </StyledLink>
      </ContactCTA>
      <StyledScrollImage
        src={ScrollDown}
        alt="Scroll down!"
        animate={{ rotate: -360 }}
        transition={{ duration: 10, loop: Infinity, ease: 'linear' }}
      />
    </Wrapper>
  );
};

export default Hero;
