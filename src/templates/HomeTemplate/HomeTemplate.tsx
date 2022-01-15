import { Box } from '@mui/material';
import React from 'react';
import Header from '../../organisms/Header/Header';

type HomeTemplateProps = {
  children: JSX.Element[] | JSX.Element;
};

const HomeTemplate = ({ children }: HomeTemplateProps) => (
  <>
    <Header />
    <Box p={4}>{children}</Box>
  </>
);

export default HomeTemplate;
