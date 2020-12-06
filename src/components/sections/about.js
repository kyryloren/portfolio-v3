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
    title: 'Business Strategy',
    text: [
      "Come up with a successful plan while working closely with your team to set and achieve your organization's goals. We'll go through design strategies, advertising, and product management workshops so that your business grows organically.",
    ],
  },
  {
    id: 1,
    title: 'Brand Identity',
    text:
      "Brand identity isn't just your logo or colors. By expressing your functional message, personality, beliefs, and goals, brand identity acts as a gateway to building a proper consumer base. When implemented correctly, your prospective buyers will understand how you differ from the market intuitively and seamlessly.",
  },
  {
    id: 2,
    title: 'UI/UX Design',
    text: [
      'Simulating and constructing the digital structure that illustrates the experience of your customer and resonates with it. Optimizing structure and flow so that it gives a smooth and flawless user experience.',
    ],
  },
  {
    id: 3,
    title: 'Web Design',
    text: [
      'Your website is the frontpage of your business. It is crucial that your website tells the right story while simultaneously focusing on the usability and customer experience. I take on the design by communicating your brand identity and values to the user.',
    ],
  },
  {
    id: 4,
    title: 'Web Development',
    text:
      'Using modern tools and languages like React, I meticulously code out your design with present-day security standards and core concepts of the web. I also go through the painstaking of wiring your website to the world wide web.',
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
        <span>{details.text}</span>
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
          delivering extraordinarily creative solutions across digital platforms
          and beyond.
        </IntroLong>
      </Intro>
    </Wrapper>
  );
};

export default About;
