// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ContainerSC,
  CountrySC,
  DateSC,
  SpanSC,
  StateSC,
  TimeSC,
} from './asideStyles';

export const Aside = (): JSX.Element => {
  return (
    <ContainerSC>
      <SpanSC>Country</SpanSC>
      <CountrySC>Brasil</CountrySC>

      <SpanSC>State</SpanSC>
      <StateSC>Salvador</StateSC>

      <SpanSC>Date</SpanSC>
      <DateSC>2020-12-21</DateSC>

      <SpanSC>Time</SpanSC>
      <TimeSC>13:17:59</TimeSC>
    </ContainerSC>
  );
};
