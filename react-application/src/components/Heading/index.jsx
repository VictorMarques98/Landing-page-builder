import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const Heading = ({ children, colorDark, as, size, uppercase }) => {
  return (
    <Styled.Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {children}
    </Styled.Title>
  );
};

export default Heading;

Heading.defaultProps = {
  children: {},
  colorDark: true,
  as: 'h1',
  size: 'big',
  uppercase: false,
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  colorDark: PropTypes.bool.isRequired,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'big']),
  uppercase: PropTypes.bool.isRequired,
};
