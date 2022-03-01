/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import SectionContainer from '../SectionContainer';
import LogoLink from '../LogoLink';
import NavLinks from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

export const Menu = ({ links, logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button onClick={() => setVisible((prev) => !prev)} visible={visible} aria-label="Open/Close Menu">
        {!visible ? <MenuIcon aria-label="Open Menu" /> : <CloseIcon aria-label="Close Menu" />}
      </Styled.Button>
      <Styled.Container visible={visible}>
        <SectionContainer>
          <Styled.MenuContainer onClick={() => setVisible(false)}>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

export default Menu;

Menu.defaultProps = {
  links: [],
  logoData: {},
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: PropTypes.shape(LogoLink.propTypes).isRequired,
};
