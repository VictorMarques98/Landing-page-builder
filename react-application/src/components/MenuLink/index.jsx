import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link, newTab }) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

export default MenuLink;

MenuLink.defaultProps = {
  children: {},
  link: '',
  newTab: false,
};

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
};
