/* eslint-disable @typescript-eslint/no-empty-interface */
// -------------------------------------------------
// Packages
// -------------------------------------------------
import { ChangeEvent, ReactNode } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------
export interface IContextApplication {
  data: APIInformation | null;
  storage: string;
  onChangeInformation: (_: ChangeEvent<HTMLInputElement>) => void;
  handleButtonAction: (_: string) => void;
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
