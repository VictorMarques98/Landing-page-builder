import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderTheme } from '../../../styles/render-theme';
import App from '../.';

describe('<Home />', () => {
  it('should render <Home />', () => {
    renderTheme(<App />);
  });
});
