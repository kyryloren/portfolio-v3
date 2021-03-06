import React from 'react';
import Layout from './src/components/Layouts';

import { Main } from './src/styles';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  setTimeout(() => {
    let Luxy = require('luxy.js');
    Luxy.init();
  }, 1000);
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      <Main id="luxy">{element}</Main>
    </Layout>
  );
};
