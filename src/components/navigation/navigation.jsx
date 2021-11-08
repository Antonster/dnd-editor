import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './styles';

const linksData = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/editor',
    text: 'Editor'
  }
];

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <S.Container>
      {linksData.map(({ to, text }) => (
        <S.Link
          key={to}
          to={to}
          $style={to === pathname ? undefined : 'secondary'}
        >
          {text}
        </S.Link>
      ))}
    </S.Container>
  );
};

export default Navigation;
