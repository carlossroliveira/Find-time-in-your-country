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
import { Aside } from '../../components/Layout/part/Aside';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../utils/withThemeComponent';

const AsideWithTheme = WithThemeComponent(Aside);

describe('Aside Testing', () => {
  it('should render the component correctly.', () => {
    render(<AsideWithTheme />);
    expect(screen.getByText(/country/i)).toBeInTheDocument();
  });
});
