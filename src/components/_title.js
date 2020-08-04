import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Title = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Helmet>
      <title itemProp="name" lang="en">
        {children + ' | ' + data.site.siteMetadata.title}
      </title>
    </Helmet>
  );
};

export default Title;
