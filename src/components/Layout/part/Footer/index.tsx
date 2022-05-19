// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Image
// -------------------------------------------------
import Photos from '../../../../assets/logo192.png';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  CodeSandboxSC,
  ContainerSC,
  DivFirstSC,
  DivSecondSC,
  FillGithubSC,
  ImgSC,
  LinkedinSC,
  ParagraphSC,
} from './footerStyles';

export const Footer = (): JSX.Element => {
  const currentYear: number = new Date().getFullYear();

  return (
    <ContainerSC>
      <DivFirstSC>
        <ImgSC src={Photos} alt="testing" />
      </DivFirstSC>
      <ParagraphSC>&copy; {currentYear} | Carlos Oliveira</ParagraphSC>
      <DivSecondSC>
        <LinkedinSC />
        <FillGithubSC />
        <CodeSandboxSC />
      </DivSecondSC>
    </ContainerSC>
  );
};
