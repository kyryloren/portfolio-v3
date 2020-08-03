import React, { useEffect } from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { useInView } from 'react-intersection-observer';

// styles
import styled from 'styled-components';
import Marquee from '@components/marquee';
import { media, Section } from '@styles';

const Wrapper = styled(Section)`
  padding-bottom: 12.055vw;

  ${media.tablet`padding: 0 9vw;`};
  ${media.thone`padding: 0 5.4vw;`};
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${media.bigDesktop`margin-top: 4rem;`}
`;
const Item = styled.a`
  max-width: 36.5vw;
  position: relative;
  text-decoration: none;
  padding-bottom: 10vh;

  :nth-of-type(2n) {
    margin-top: 13vh;

    ${media.tablet`margin-top: 0;`};
  }

  ${media.tablet`
  margin: 0 auto 6.5rem;
  width: 100%!important;
  max-width: 100%!important;
  padding-bottom: 0;
  `};
`;
const ImageWrap = styled.div`
  overflow: hidden;
  min-width: 36.5vw;
  margin: 0 auto;
`;
const ItemCaption = styled.div`
  margin: 0;
  padding: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: 0 0;
`;
const CaptionTitle = styled.p`
  margin-top: 1.614583vw;
  font-size: calc(1500vw / var(--size));
  color: var(--color-text);

  ${media.bigDesktop`
  margin-top: 2.25vw;
  font-size: calc(1900vw/var(--size));
  `};
  ${media.tablet`
  margin-top: 28px;
  font-size: 16px;
  `};
`;
const CaptionSubtitle = styled.p`
  margin-top: 0.52083vw;
  font-size: calc(1200vw / var(--size));
  color: var(--color-text);

  ${media.bigDesktop`
  margin-top: .8vw;
  font-size: calc(1600vw/var(--size));
  `};
  ${media.tablet`
  margin-top: 8px;
  font-size: 14px;
  `};
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
const Links = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: auto;
  width: auto;
`;
const StyledLink = styled.a`
  font-size: calc(1200vw / var(--size));
  padding-right: 1.5rem;
  display: flex;
  align-items: center;
  pointer-events: auto;
  cursor: pointer;
  width: auto;
  min-width: max-content;
  text-decoration: none;
  color: inherit;

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

  ${media.bigDesktop`font-size: calc(1600vw/var(--size));`};
  ${media.tablet`font-size: 14px;`};
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

const ProjectIDs = [
  {
    id: 0,
    name: 'Hackersent',
    text:
      'An easy way to learn cyber security interactively all in your browser. Hackersent is setup with a complete authentication system, user roles, and an easy-to-navigate dashboard for managing your content.',
    github: 'https://github.com/hackersent/hackersent',
    external: 'https://hackersent-dev.netlify.app',
    image: 'Hackersent',
  },
  {
    id: 1,
    name: 'BTHS Foundry',
    text:
      'A web app built for my high school allowing students to search for their favorite clubs and joined theme. Foundry is complete with a full authentication system, user roles, and a daily dashboard.',
    github: 'https://github.com/btechsu/Foundry/tree/development',
    external: 'https://foundry-dev.netlify.app/app/dashboard',
    image: 'BTHS Foundry',
  },
  {
    id: 2,
    name: 'Dynamo Fencing',
    text:
      'A website I made for a client, Dynamo Fencing Center. The website was first made in plain HTML, CSS, and JS and later transformed into a React website. Uses bootstrap for base styling and layed on with a lot of custom CSS.',
    github: 'https://github.com/kyryloren/dynamo-fencing',
    external: 'https://dynamo-fencing.netlify.app',
    image: 'Dynamo Fencing',
  },
  {
    id: 3,
    name: 'Cheesyrat',
    text:
      'An easy tool used to generate peristent backdoors to get remote access to a Windows machine. It creates malware with custom coded encrypted payloads that have a high ability to bypass most present-day antivirus detection.',
    github: 'https://github.com/kyryloren/cheesyrat',
    image: 'Cheesyrat',
  },
];

const Projects = () => {
  const [projectsRef, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px',
  });
  useEffect(() => {
    if (inView) {
      document.body.classList.toggle('dark', true);
    } else {
      document.body.classList.toggle('dark', false);
    }
  }, [inView]);
  const data = useStaticQuery(graphql`
    query {
      hackersent: file(relativePath: { eq: "projects/hackersent.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dynamoFencing: file(relativePath: { eq: "projects/dynamoFencing.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      foundry: file(relativePath: { eq: "projects/foundry.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cheesyrat: file(relativePath: { eq: "projects/cheesyrat.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper ref={projectsRef} id="projects">
      <Marquee>projects</Marquee>
      <Row>
        {ProjectIDs.map((details, i) => (
          <Item
            key={i}
            href={
              details.external
                ? details.external
                : details.github
                ? details.github
                : '#'
            }
          >
            <ImageWrap>
              {i === 0 && (
                <Img
                  fluid={data.hackersent.childImageSharp.fluid}
                  alt={details.name}
                />
              )}
              {i === 1 && (
                <Img
                  fluid={data.foundry.childImageSharp.fluid}
                  alt={details.name}
                />
              )}
              {i === 2 && (
                <Img
                  fluid={data.dynamoFencing.childImageSharp.fluid}
                  alt={details.name}
                />
              )}
              {i === 3 && (
                <Img
                  fluid={data.cheesyrat.childImageSharp.fluid}
                  alt={details.name}
                />
              )}
            </ImageWrap>
            <ItemCaption>
              <CaptionTitle>{details.name}</CaptionTitle>
              <CaptionSubtitle>{details.text}</CaptionSubtitle>
              <Links>
                {details.github && (
                  <StyledLink
                    href={details.github}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <LinkInner>
                      <LinkTextWrapper>
                        <LinkText>View GitHub</LinkText>
                      </LinkTextWrapper>
                      <LinkLine />
                    </LinkInner>
                  </StyledLink>
                )}
                {details.external && (
                  <StyledLink
                    href={details.external}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <LinkInner>
                      <LinkTextWrapper>
                        <LinkText>View Project</LinkText>
                      </LinkTextWrapper>
                      <LinkLine />
                    </LinkInner>
                  </StyledLink>
                )}
              </Links>
            </ItemCaption>
          </Item>
        ))}
      </Row>
    </Wrapper>
  );
};

export default Projects;
