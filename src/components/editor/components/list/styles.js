import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled(GS.Space)`
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

export const Title = styled(GroupElement)`
  background: #A0C452;
  font-size: 28px;
  font-weight: 600;
`;

export const Text = styled(GroupElement)`
  background: #A0C452;
  font-size: 18px;
  line-height: 24px;
`;
