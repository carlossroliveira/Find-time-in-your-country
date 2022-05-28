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
import { Header } from '../../components/Layout/part/Header';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../utils/withThemeComponent';

const HeaderWithTheme = WithThemeComponent(Header);

describe('Header testing ', () => {
  it('should render the component correctly.', () => {
    render(<HeaderWithTheme />);
    expect(
      screen.getByRole('heading', {
        name: /country time/i,
      }),
    ).toBeInTheDocument();
  });
  it('should render the component correctly.', () => {
    render(<HeaderWithTheme />);
    expect(screen.getByDisplayValue(/brasil/i)).toHaveDisplayValue(['Brasil']);
  });
});
