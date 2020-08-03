import React from 'react';

import { Main } from '@styles';
import { Hero, About, Projects, Contact } from '@components/sections';

if (typeof window !== 'undefined') {
  setTimeout(() => {
    let Luxy = require('luxy.js');
    Luxy.init();
  }, 1000);
}

const IndexPage = () => {
  return (
    <Main id="luxy">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Main>
  );
};

export default IndexPage;
