import React from 'react';
import Layout from './src/components/layouts';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
