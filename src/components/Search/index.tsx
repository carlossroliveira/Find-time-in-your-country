// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { BsSearchSC, ContainerSC, InputSC } from './searchStyles';

export const Search = (): JSX.Element => {
  return (
    <ContainerSC>
      <InputSC type="text" placeholder="Search" />
      <BsSearchSC />
    </ContainerSC>
  );
};
