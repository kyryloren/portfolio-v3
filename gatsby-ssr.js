import React from 'react';
import Layout from './src/components/Layouts';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
