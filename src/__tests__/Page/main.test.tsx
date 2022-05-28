// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';

import 'jest-styled-components';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Page } from '../../components/Layout/part/Page';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../utils/withThemeComponent';

const PageWithTheme = WithThemeComponent(Page);

describe('Page Testing', () => {
  it('should render the component correctly.', () => {
    render(<PageWithTheme />);
    expect(
      screen.getByRole('heading', {
        name: /page does not exist/i,
      }),
    ).toBeInTheDocument();
  });
});
