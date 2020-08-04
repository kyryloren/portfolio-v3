import React from 'react';
import PropTypes from 'prop-types';

// components
import { Hero, About, Projects, Contact } from '@components/sections';

const IndexPage = ({ location }) => {
  return (
    <>
      <Hero location={location} />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};
