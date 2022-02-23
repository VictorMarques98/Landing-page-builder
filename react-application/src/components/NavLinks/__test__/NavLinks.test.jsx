import { screen } from '@testing-library/react';
import React from 'react';
import NavLinks from '../';
import renderTheme from '../../../styles/render-theme';
import { theme } from '../../../styles/theme';
import mock from '../mock';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    const navLinks = screen.getAllByRole('link');
    expect(navLinks).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    const navLinks = screen.queryAllByText(/links/i);
    expect(navLinks).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    const navLinks = screen.getByText(/link 2/i).parentElement;
    expect(navLinks).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.lteMedium,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container).toMatchSnapshot();
  });
});
