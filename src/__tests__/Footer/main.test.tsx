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
import { Footer } from '../../components/Layout/part/Footer';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../utils/withThemeComponent';

const FooterWithTheme = WithThemeComponent(Footer);

describe('Footer Testing', () => {
  it('should render the component correctly.', () => {
    render(<FooterWithTheme />);
    expect(
      screen.getByRole('img', {
        name: /testing/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/© 2022 \| carlos oliveira/i)).toBeInTheDocument();
  });
});
