// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';

import 'jest-styled-components';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Content } from '../../components/Layout/part/Content';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../utils/withThemeComponent';

const ContentWithTheme = WithThemeComponent(Content);

describe('Content Testing', () => {
  it('should render the component correctly.', () => {
    render(<ContentWithTheme />);
    // TODO
  });
});
