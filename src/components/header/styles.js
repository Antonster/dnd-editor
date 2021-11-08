import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #ededed;
  background: #ffffff;
`;

export const Wrapper = styled(GS.Wrapper)``;

export const FlexContainer = styled(GS.FlexContainer)`
  width: 100%;
  height: 64px;
  padding: 0 30px;
`;

export const Logo = styled.img`
  max-height: 30px;
`;

export const Button = styled(GS.MainButton)`
  &:not(:last-of-type) {
    margin: 0 15px 0 0;
  }
`;
