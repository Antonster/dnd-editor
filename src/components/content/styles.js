import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  padding: 24px 0;
  margin: 64px 0 0;
  background: #f7f9fb;
`;

export const Wrapper = styled(GS.Wrapper)``;

export const GridWrapper = styled.div`
  padding: 0 30px;
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-column-gap: 40px;
`;
