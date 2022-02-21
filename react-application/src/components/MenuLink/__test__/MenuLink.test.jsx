import { screen } from '@testing-library/react';
import React from 'react';
import MenuLink from '../';
import renderTheme from '../../../styles/render-theme';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://www.google.com/">Children</MenuLink>);
    const menuLink = screen.getByRole('link', { name: 'Children' });
    expect(menuLink).toBeInTheDocument();
    expect(menuLink).toHaveAttribute('target', '_self');
  });

  it('should open in a new tab', () => {
    renderTheme(
      <MenuLink link="https://www.google.com/" newTab={true}>
        Children
      </MenuLink>,
    );
    const menuLink = screen.getByRole('link', { name: 'Children' });
    expect(menuLink).toHaveAttribute('target', '_blank');
  });

  it('should oto match snapshot', () => {
    renderTheme(
      <MenuLink link="https://www.google.com/" newTab={true}>
        Children
      </MenuLink>,
    );
    const { container } = screen.getByRole('link', { name: 'Children' });
    expect(container).toMatchSnapshot();
  });
});
