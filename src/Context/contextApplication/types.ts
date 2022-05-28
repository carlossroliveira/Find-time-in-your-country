/* eslint-disable @typescript-eslint/no-empty-interface */
// -------------------------------------------------
// Packages
// -------------------------------------------------
import { ChangeEvent, ReactNode, RefObject } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------
export interface IContextApplication {
  storage: string;
  loading: boolean;
  data: APIInformation | null;
  inputRef: RefObject<HTMLInputElement>;
  handleButtonAction: (_: string) => void;
  onChangeInformation: (_: ChangeEvent<HTMLInputElement>) => void;
}

export interface IContextApplicationProvider {
  children: ReactNode | JSX.Element;
}
export interface APIInformation {
  date: string;
  time_24: string;
  timezone: string;
  geo: {
    country_name: string;
    country: string;
  };
}
