import React from 'react';
import { email, socialMedia } from '@utils/config';

import styled from 'styled-components';
import Marquee from '@components/marquee';
import { media } from '@styles';

const FooterWrapper = styled.footer`
  margin-top: 6.5vw;

  margin: 0 auto;
  padding: 0 9.375vw 0 33.75vw;
  padding-left: calc(13500vw / 1440);
  padding-right: calc(13500vw / 1440);

  ${media.thone`padding: 0 5.4vw;`};
  ${media.tablet`
  padding: 0 9vw;
  margin-top: 0;
  `}
`;
const FooterItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${media.tablet`flex-direction: column;`};
`;
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1 1;

  ${media.tablet`margin-bottom: 8rem;`};
  ${media.thone`margin-bottom: 5rem;`};
`;
const Headline = styled.h2`
  font-size: calc(4200vw / var(--size));
  color: var(--color-text);
  line-height: 4vw;
  font-weight: lighter;
  margin: 0;

  ${media.tablet`
  font-size: 28px!important;
  line-height: 1.4!important;
  `};
  ${media.between`
  font-size: 31px!important;
  line-height: 1.5!important;
  `}

  ${media.thone`
  font-size: 28px!important;
  line-height: 1.4!important;
  `};
`;
const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1 1;
`;
const RowCol = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
`;
const FooterEmail = styled.a`
  font-size: calc(2400vw / var(--size));
  text-decoration: none;
  margin-bottom: 14.375vw;
  transition: all 0.3s ease;
  color: var(--color-text);

  :hover {
    color: var(--color-primary);
  }

  ${media.tablet`
  margin-bottom: 180px;
  font-size: 18px;
  `};

  ${media.between`
  margin-top: 20px;
  font-size: 18px;
  margin-bottom: 200px;
  `};
  ${media.thone`
  margin-top: 20px;
  font-size: 18px;
  margin-bottom: 140px;
  `};
`;
const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 6.25vw;

  ${media.tablet`margin-bottom: 80px!important;`};
  ${media.between`margin-bottom: 80px!important;`};
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1 1;

  ${media.between`flex-wrap: wrap;`};
`;
const SocialLink = styled.a`
  color: var(--color-text);
  margin-top: 1.25rem;
  font-size: calc(1850vw / var(--size));
  text-decoration: underline;
  transition: all 0.3s ease;

  :hover {
    color: var(--color-primary);
  }

  ${media.bigDesktop`
  margin-top: 2vw;
  font-size: calc(2400vw/var(--size));
  `};
  ${media.tablet`
  margin-top: 20px;
  font-size: 18px;
  `};
  ${media.between`margin-right: 1rem;`};
`;

const Contact = () => {
  return (
    <FooterWrapper id="contact">
      <FooterItems>
        <LeftCol>
          <Headline>
            That's enough of me,
            <br />
            Let's talk about you.
          </Headline>
        </LeftCol>
        <RightCol>
          <RowCol>
            <Marquee>more&nbsp;of&nbsp;me</Marquee>
            <Links>
              <Col>
                <SocialLink
                  href={socialMedia[0].url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {socialMedia[0].name}
                </SocialLink>
                <SocialLink
                  href={socialMedia[2].url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {socialMedia[2].name}
                </SocialLink>
              </Col>
              <Col>
                <SocialLink
                  href={socialMedia[1].url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {socialMedia[1].name}
                </SocialLink>
              </Col>
              <Col>
                <SocialLink
                  href="/resume.pdf"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Resume
                </SocialLink>
              </Col>
            </Links>
          </RowCol>
          <RowCol>
            <Marquee>say&nbsp;hi</Marquee>
            <FooterEmail
              href={`mailto:${email}?subject=Let's make something cool`}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              dev@kyryloorlov.com
            </FooterEmail>
          </RowCol>
        </RightCol>
      </FooterItems>
    </FooterWrapper>
  );
};

export default Contact;
