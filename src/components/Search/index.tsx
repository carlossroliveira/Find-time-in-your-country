// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { useMyHookApplication } from '../../Context/contextApplication/ContextTheme';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { BsSearchSC, ContainerSC, GridSC, InputSC } from './searchStyles';

export const Search = (): JSX.Element => {
  const {
    loading,
    inputRef,
    storage,
    onChangeInformation,
    handleButtonAction,
  } = useMyHookApplication();
  return (
    <ContainerSC>
      <InputSC
        ref={inputRef}
        type="text"
        placeholder="Search"
        value={storage}
        onChange={onChangeInformation}
      />
      {loading ? (
        <GridSC color="#6D0BEB" size={60} />
      ) : (
        <BsSearchSC onClick={() => handleButtonAction(storage)} />
      )}
    </ContainerSC>
  );
};
