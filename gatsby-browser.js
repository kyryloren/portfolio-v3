import React from 'react';
import Layout from './src/components/Layouts';

import { Main } from './src/styles';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
  setTimeout(() => {
    let Luxy = require('luxy.js');
    Luxy.init();
  }, 4000);
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      <Main id="luxy">{element}</Main>
    </Layout>
  );
};
