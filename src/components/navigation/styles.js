import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled.div``;

export const Link = styled(GS.MainLink)`
  width: 100%;

  &:not(:last-of-type) {
    margin: 0 0 15px;
  }
`;
