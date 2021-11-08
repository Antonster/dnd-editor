import React from 'react';
import logo from 'src/assets/img/logo.png';
import * as S from './styles';

const Header = () => (
  <S.Container>
    <S.Wrapper>
      <S.FlexContainer
        $justify="space-between"
        $align="center"
      >
        <S.Logo src={logo} alt="logo" />
        <div>
          <S.Button $style="secondary">Log in</S.Button>
          <S.Button>Sign up</S.Button>
        </div>
      </S.FlexContainer>
    </S.Wrapper>
  </S.Container>
);

export default Header;
