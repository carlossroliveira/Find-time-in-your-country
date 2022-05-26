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
  Ahref,
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
        <Ahref
          href="https://www.linkedin.com/in/carlos-oliveira-ab93941a1/"
          target="_blank"
        >
          <LinkedinSC />
        </Ahref>

        <Ahref href="https://github.com/carlossroliveira" target="_blank">
          <FillGithubSC />
        </Ahref>

        <Ahref
          href="https://carlossroliveira.github.io/Portfolio/"
          target="_blank"
        >
          <CodeSandboxSC />
        </Ahref>
      </DivSecondSC>
    </ContainerSC>
  );
};
