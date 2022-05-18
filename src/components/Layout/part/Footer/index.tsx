// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ContainerSC,
  DivFirstSC,
  DivSecondSC,
  ParagraphSC,
} from './footerStyles';

export const Footer = (): JSX.Element => {
  const currentYear: number = new Date().getFullYear();

  return (
    <ContainerSC>
      <DivFirstSC>React Icon</DivFirstSC>
      <ParagraphSC>&copy; {currentYear} | Carlos Oliveira</ParagraphSC>
      <DivSecondSC>Redes Icon</DivSecondSC>
    </ContainerSC>
  );
};
