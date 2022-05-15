// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Search } from '../../../Search';
import { SwitchComponent } from '../../../SwitchComponent';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC } from './headerStyles';

export const Header = (): JSX.Element => {
  return (
    <ContainerSC>
      <Search />
      <SwitchComponent />
    </ContainerSC>
  );
};
