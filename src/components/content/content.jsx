import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Content = ({ children }) => (
  <S.Container>
    <S.Wrapper>
      <S.GridWrapper>
        {children}
      </S.GridWrapper>
    </S.Wrapper>
  </S.Container>
);

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Content;
