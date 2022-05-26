// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useState } from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { BsSearchSC, ContainerSC, InputSC } from './searchStyles';

export const Search = (): JSX.Element => {
  const [value, setValue] = useState<string | undefined>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleClick = (): void => {
    console.log(value);
  };

  return (
    <ContainerSC>
      <InputSC
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
      <BsSearchSC onClick={handleClick} />
    </ContainerSC>
  );
};
