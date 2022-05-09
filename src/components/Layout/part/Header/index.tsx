// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Search } from '../../../Search';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC } from './headerStyles';

export const Header = (): JSX.Element => {
  return (
    <ContainerSC>
      <Search />
      <div>Button</div>
    </ContainerSC>
  );
};
