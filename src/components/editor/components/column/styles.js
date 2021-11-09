import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled(GS.Space)`
  width: 48%;
  color: #3b3b3b;
`;

export const Header = styled.div`
  height: 30px;
  width: 100%;
  background: #08A2B5;
  border-radius: 5px 5px 0 0;

  &:hover {
    background: #038c9b;
  }
`;
