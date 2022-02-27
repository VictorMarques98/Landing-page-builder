/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Heading from '../Heading';

export const LogoLink = ({ text, image, link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {!!image && <img src={image} alt={text} />}
        {!image && text}
      </Styled.Container>
    </Heading>
  );
};

export default LogoLink;

LogoLink.defaultProps = {
  text: '',
  link: '',
  image: '',
};

LogoLink.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
};
