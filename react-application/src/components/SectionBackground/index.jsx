import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import SectionContainer from '../SectionContainer';

export const SectionBackground = ({ children, background }) => {
  return (
    <Styled.Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

export default SectionBackground;

SectionBackground.defaultProps = {
  children: {},
  background: false,
};

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool,
};
