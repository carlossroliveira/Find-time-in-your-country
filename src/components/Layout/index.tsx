// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Aside } from './part/Aside';
import { Content } from './part/Content';
import { Footer } from './part/Footer';
import { Header } from './part/Header';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC } from './layoutStyles';

export const Layout = (): JSX.Element => {
  return (
    <ContainerSC>
      <Header />
      <Aside />
      <Content />
      <Footer />
    </ContainerSC>
  );
};
