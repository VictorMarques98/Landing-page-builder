import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderTheme from '../../../styles/render-theme';
import Heading from '../.';
import { screen } from '@testing-library/react';
import { theme } from '../../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Text-test</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text-test' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.big,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Text-test-two</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text-test-two' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    renderTheme(<Heading size="small">Text-test-tree</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text-test-tree' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.small,
    });
  });

  it('should render correct font size when use mobile ', () => {
    renderTheme(<Heading>Text-test-four</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text-test-four' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.large, {
      media: theme.media.lteMedium,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>Text-test</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text-test' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render with correct tag', () => {
    const { container } = renderTheme(<Heading as="h6">Text-test</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
