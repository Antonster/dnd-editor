import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled.div``;

export const Control = styled.div`
  margin: 0 0 40px;
`;

export const AddGroupButton = styled(GS.MainButton)``;

export const DndWrapper = styled(GS.FlexContainer)`
  width: 100%;
`;

export const Group = styled(GS.Space)`
  width: 48%;
  color: #3b3b3b;
`;

export const AddElementButton = styled.button`
  font-size: 40px;
`;

export const GroupElement = styled.div`
  cursor: pointer;
  margin: 0 0 20px;
  padding: 5px 10px;
  border-radius: 5px;
  color: #1d2839;
`;
