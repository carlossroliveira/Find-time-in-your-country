// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { useMyHookApplication } from '../../Context/contextApplication/ContextTheme';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { BsSearchSC, ContainerSC, InputSC } from './searchStyles';

export const Search = (): JSX.Element => {
  const { storage, onChangeInformation, handleButtonAction } =
    useMyHookApplication();

  return (
    <ContainerSC>
      <InputSC
        type="text"
        placeholder="Search"
        value={storage}
        onChange={onChangeInformation}
      />
      <BsSearchSC onClick={() => handleButtonAction(storage)} />
    </ContainerSC>
  );
};
