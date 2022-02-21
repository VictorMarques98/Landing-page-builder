import { screen } from '@testing-library/react';
import React from 'react';
import TextComponent from '../';
import renderTheme from '../../../styles/render-theme';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    const textComponent = screen.getByText('Children');
    expect(textComponent).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container).toMatchSnapshot();
  });
});
