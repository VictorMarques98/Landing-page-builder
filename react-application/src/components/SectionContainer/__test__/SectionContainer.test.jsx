import { screen } from '@testing-library/react';
import React from 'react';
import SectionContainer from '../';
import renderTheme from '../../../styles/render-theme';

describe('<SectionContainer />', () => {
  it('should render content', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    const sectionContainer = screen.getByRole('heading');
    expect(sectionContainer).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
