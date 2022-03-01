import { screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Menu from '../';
import renderTheme from '../../../styles/render-theme';
import { theme } from '../../../styles/theme';

import linksMock from '../../NavLinks/mock';
const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render Logo and Main Menu Nav', () => {
    const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />);
    const menu = screen.getByRole('heading', { name: 'Logo' });
    expect(menu).toBeInTheDocument();
    const navigation = screen.getByRole('navigation', { name: 'Main Menu' });
    expect(navigation).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button for open and close the menu', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);

    const button = screen.getByLabelText('Open/Close Menu');
    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    const menuContainer = button.nextSibling;
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    const buttonOpen = screen.getByLabelText('Open Menu');
    expect(buttonOpen).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });

    const buttonClose = screen.getByLabelText('Close Menu');
    expect(buttonClose).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    const openedButton = screen.getByLabelText('Open Menu');
    expect(openedButton).toBeInTheDocument();
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    const navigation = screen.queryByRole('navigation', { name: 'Main Menu' }).firstChild;
    expect(navigation).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
