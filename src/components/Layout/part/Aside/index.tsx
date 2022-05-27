// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { useMyHookApplication } from '../../../../Context/contextApplication/ContextTheme';
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
  const date = useMyHookApplication();
  return (
    <ContainerSC>
      <SpanSC>Country</SpanSC>
      <CountrySC>
        {date.data?.geo.country || date.data?.geo.country_name}
      </CountrySC>

      <SpanSC>State</SpanSC>
      <StateSC>
        {date.data?.timezone.split('/', 2)[1].replace('_', ' ')}
      </StateSC>

      <SpanSC>Date</SpanSC>
      <DateSC>{date.data?.date.split('-').reverse().join('/')}</DateSC>

      <SpanSC>Time</SpanSC>
      <TimeSC>{date.data?.time_24}</TimeSC>
    </ContainerSC>
  );
};
