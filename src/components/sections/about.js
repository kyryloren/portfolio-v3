import React, { useState } from 'react';

// styles
import styled from 'styled-components';
import Marquee from '@components/marquee';
import { media, Section } from '@styles';
import { motion } from 'framer-motion';

const Wrapper = styled(Section)`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  padding-top: 8.15vw;
  padding-bottom: 12.055vw;
  user-select: none;

  ${media.between`
  padding-top: 140px;
  padding-bottom: 140px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;
  `};
  ${media.phone`
  padding-top: 120px;
  padding-bottom: 100px;
  `};
`;
const Intro = styled.div`
  flex: 2 1 60%;
  padding-left: 7.2%;

  ${media.between`padding-left: 0;`};
`;
const IntroShort = styled.p`
  font-size: 1.5vw;
  margin-bottom: 2vw;
  margin-top: 0;
  line-height: 1.5;
  color: var(--color-text);
  margin-top: 5.25vw;
  margin-top: calc(2100vw / var(--size));

  ${media.bigDesktop`line-height: 1.6!important;`};
  ${media.between`
  font-size: 20px;
  margin-bottom: 28px;
  `};
  ${media.phone`font-size: 18px;`};
`;
const IntroLong = styled.p`
  font-size: 1.2vw;
  opacity: 0.4;
  line-height: 1.5;
  color: var(--color-text);

  ${media.tablet`
  line-height: 1.75!important;
  font-size: 16px;
  `};
`;
const Services = styled.div`
  flex: 1 1 40%;

  ${media.between`margin-top: 4rem;`};
  ${media.phone`font-size: 18px;`};
`;

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: var(--color-text);
  display: flex;
  align-items: center;
  font-size: 1.3vw;
  margin: 8px 0;
  font-family: var(--font-family);
  font-weight: 500;
  cursor: pointer;
  margin-top: 5.25vw;
  margin-top: calc(2100vw / var(--size));

  ${media.bigDesktop`line-height: 1.6!important;`};
  ${media.tablet`
  font-size: 20px;
  `};
  ${media.phone`font-size: 18px;`};
`;
export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: var(--color-text);
    transition: all 0.1s ease-in-out;
  }
`;
export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  font-family: var(--font-family-serif);

  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: var(--color-text);
    display: block;
    font-weight: 300;
    opacity: 0.9;
    line-height: 1.5;
    font-size: 1.2vw;

    ${media.tablet`
    line-height: 1.75!important;
    font-size: 16px;
    `};
  }
`;

const accordionIds = [
  {
    id: 0,
    title: 'Design',
    results: [
      'Concept and ideation',
      'Prototyping',
      'Sketches',
      'Content creation',
      'Reusable components',
      'Animation',
    ],
  },
  {
    id: 1,
    title: 'Development',
    results: [
      'React',
      'Node.js',
      'Gatsby',
      'Plain HTML/CSS/JS',
      'Firebase',
      'Python',
    ],
  },
  {
    id: 2,
    title: 'Production',
    results: ['Continuous updates', 'Maintaining code', 'Instant support'],
  },
  {
    id: 3,
    title: 'Security',
    results: [
      'Building/updating secure code',
      'Penetration testing',
      'Web vulnerability assessment',
    ],
  },
];
const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <AccordionHeader
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          />
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          />
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? 'auto' : '0' }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  );
};

const About = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <Wrapper id="about">
      <Services>
        <Marquee>services</Marquee>
        {accordionIds.map((details, index) => (
          <Accordion
            key={index}
            details={details}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </Services>
      <Intro>
        <Marquee>about</Marquee>
        <IntroShort>
          I’m a designer and developer based in New York, NY. Currently working
          on freelance projects and updating my portfolio. I believe great
          design is defined by the experience it creates for the user, combined
          with a flawless execution.
        </IntroShort>
        <IntroLong>
          I've always had a natural curiosity for the unknown and have always
          strived to educate myself on how things work and why they do. At a
          young age I taught myself how to code and never had a reason to stop.
          I love everything to do with development & visual design as well as
          delivering extraordinary creative solutions across digital platforms
          and beyond.
        </IntroLong>
      </Intro>
    </Wrapper>
  );
};

export default About;
