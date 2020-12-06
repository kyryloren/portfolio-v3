import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';

//styles
import { GlobalStyle } from '@styles';
import ComeIn from '@components/_comeIn';

//components
import Nav from '@components/nav';
import Head from './Head';

export default ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [isLoading]);

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

          {isLoading && isHome ? (
            <ComeIn finishLoading={() => setIsLoading(false)} />
          ) : (
            <>
              <Nav />
              {children}
            </>
          )}
        </>
      )}
    />
  );
};
