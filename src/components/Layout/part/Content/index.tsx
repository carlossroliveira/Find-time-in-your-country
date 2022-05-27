// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useCallback } from 'react';
import { useMyHookApplication } from '../../../../Context/contextApplication/ContextTheme';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC } from './contentStyles';

export const Content = (): JSX.Element => {
  const data = useMyHookApplication();

  const definingImages = useCallback((type: string) => {
    const Img = {
      Brasil: `https://assets.hgbrasil.com/geoip/flags/svg/br.svg`,
      Canada: `https://assets.hgbrasil.com/geoip/flags/svg/ca.svg`,
      中国: `https://assets.hgbrasil.com/geoip/flags/svg/cn.svg`,
      Australia: `https://assets.hgbrasil.com/geoip/flags/svg/au.svg`,
      Россия: `https://assets.hgbrasil.com/geoip/flags/svg/ru.svg`,
      'भारत / India': `https://assets.hgbrasil.com/geoip/flags/svg/in.svg`,
      Argentina: `https://assets.hgbrasil.com/geoip/flags/svg/ar.svg`,
      México: `https://assets.hgbrasil.com/geoip/flags/svg/mx.svg`,
      Colombia: `https://assets.hgbrasil.com/geoip/flags/svg/co.svg`,
      Nigeria: `https://assets.hgbrasil.com/geoip/flags/svg/ng.svg`,
      Venezuela: `https://assets.hgbrasil.com/geoip/flags/svg/ve.svg`,
      Italia: `https://assets.hgbrasil.com/geoip/flags/svg/it.svg`,
      'Costa Rica': `https://assets.hgbrasil.com/geoip/flags/svg/gr.svg`,
      Portugal: `https://assets.hgbrasil.com/geoip/flags/svg/pt.svg`,
      ישראל: `https://assets.hgbrasil.com/geoip/flags/svg/il.svg`,

      default: 'Ops, sem img',
    } as { [type: string]: string };

    return Img[type] || Img.default;
  }, []);

  return (
    <ContainerSC
      img={`${
        (data?.storage === 'Brasil' &&
          'https://assets.hgbrasil.com/geoip/flags/svg/br.svg') ||
        definingImages(
          `${data?.data?.geo?.country || data?.data?.geo?.country_name}`,
        )
      }`}
    />
  );
};
