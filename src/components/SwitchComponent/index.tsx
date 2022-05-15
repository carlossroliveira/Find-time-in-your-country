// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useState } from 'react';
import { useMyHook } from '../../Context/themes/ContextTheme';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC, Toggle } from './SwitchComponentStyles';

export const SwitchComponent = (): JSX.Element => {
  const { handleThemes } = useMyHook();
  const [themesValue, setThemesValue] = useState<boolean>(false);

  const handleThemesFc = () => {
    setThemesValue(!themesValue);
    handleThemes();
  };

  return (
    <ContainerSC>
      <Toggle
        checked={themesValue}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={handleThemesFc}
      />
    </ContainerSC>
  );
};
