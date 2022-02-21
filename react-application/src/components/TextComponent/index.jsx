import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default TextComponent;

TextComponent.defaultProps = {
  children: {},
};

TextComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
