import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

export const SectionContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default SectionContainer;

SectionContainer.defaultProps = {
  children: {},
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
