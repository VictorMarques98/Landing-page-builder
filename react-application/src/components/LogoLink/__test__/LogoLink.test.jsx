import { screen } from '@testing-library/react';
import React from 'react';
import LogoLink from '../';
import renderTheme from '../../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink text="logoLink" link="https://www.google.com.br" />);
    const logoLink = screen.getByText('logoLink');
    expect(logoLink).toBeInTheDocument();
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink text="logoLink" link="#target" image="image.jpg" />);
    expect(screen.getByAltText('logoLink')).toHaveAttribute('src', 'image.jpg');
  });

  it('should match SnapShot', () => {
    const { container } = renderTheme(<LogoLink text="logoLink" link="#target" image="image.jpg" />);
    expect(container).toMatchSnapshot();
  });
});
