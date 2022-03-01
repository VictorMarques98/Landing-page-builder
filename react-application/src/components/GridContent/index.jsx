/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

export const GridContent = ({ title, text, background }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading uppercase colorDark={!background}>
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{text}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};

export default GridContent;

GridContent.defaultProps = {
  title: '',
  text: '',
  background: false,
};

GridContent.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  background: PropTypes.bool,
};
