/* eslint-disable no-unused-vars */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/render-theme';
import App from '../.';

test('render', () => {
  const { debug } = renderTheme(<App />);
  debug();
  const headingContainer = screen.getByRole('heading', { name: 'Hello' }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: 'red',
  });
});
