import React from 'react';

import { Hero, About, Projects, Contact } from '@components/sections';
import { Main } from '@styles';

if (typeof window !== 'undefined') {
  let Luxy = require('luxy.js');

  setTimeout(() => {
    Luxy.init();
  }, 1000);
}

const IndexPage = ({ location }) => {
  return (
    <Main id="luxy">
      <Hero location={location} />
      <About />
      <Projects />
      <Contact />
    </Main>
  );
};

export default IndexPage;
