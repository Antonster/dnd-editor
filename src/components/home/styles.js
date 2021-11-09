import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled.div``;

export const Space = styled(GS.Space)`
  padding: 30px;
  color: #3b3b3b;
`;

export const Title = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 20px;
`;

export const Text = styled.p`
  color: #1d2839;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: .1px;
  line-height: 24px;

  &:not(:last-of-type) {
    margin: 0 0 20px;
  }
`;
