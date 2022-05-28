// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, {
  ChangeEvent,
  createContext,
  useCallback,
  useContext,
  useRef,
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
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { data } = useFetch<APIInformation>(
    `https://api.ipgeolocation.io/timezone?apiKey=${process.env.REACT_APP_KEY}&location=${countryName}`,
  );

  const onChangeInformation = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setStorage(event.target.value);
    },
    [],
  );

  const loadingFC = () => setLoading((value) => !value);
  const handleButtonAction = useCallback((informedValue: string) => {
    loadingFC();
    setTimeout(() => {
      setCountryName(informedValue);
      inputRef?.current?.focus();
      loadingFC();
    }, 2000);

    setStorage('');
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        loading,
        storage,
        inputRef,
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
