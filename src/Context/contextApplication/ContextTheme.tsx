// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, {
  ChangeEvent,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import { useFetch } from '../../hooks/useFetch';
// -------------------------------------------------
// Types
// -------------------------------------------------
import {
  APIInformation,
  IContextApplication,
  IContextApplicationProvider,
} from './types';

const Context = createContext({} as IContextApplication);

export const ThemeProviderApplication = ({
  children,
}: IContextApplicationProvider): JSX.Element => {
  const [countryName, setCountryName] = useState<string>('');
  const [storage, setStorage] = useState<string>('Brasil');

  const { data } = useFetch<APIInformation>(
    `https://api.ipgeolocation.io/timezone?apiKey=dd652bdab66546fd9e440f74abdac9b3&location=${countryName}`,
  );

  const onChangeInformation = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setStorage(event.target.value);
    },
    [],
  );

  const handleButtonAction = useCallback((informedValue: string) => {
    /* setTimeout(() => {
    }, 2000); */
    setCountryName(informedValue);

    setStorage('');
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        storage,
        onChangeInformation,
        handleButtonAction,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMyHookApplication = (): IContextApplication =>
  useContext(Context);
