import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

//styles
import { GlobalStyle } from '@styles';
import ComeIn from '@components/_comeIn';

//components
import Nav from '@components/nav';
import Head from './Head';

export default ({ children }) => {
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
          <GlobalStyle />
          <ComeIn />
          <Nav />
          {children}
        </>
      )}
    />
  );
};
