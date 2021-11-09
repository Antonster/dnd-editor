import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled(GS.Space)`
  width: 100%;
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

export const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 30px 30px;
`;

export const Input = styled.input`
  border: none;
  width: calc(100% - 60px);
  padding: 5px 0;
`;

export const Menu = styled.div`
  position: absolute;
  top: 28px;
  left: 30px;
  width: calc(100% - 60px);
  background: #ffffff;
  box-shadow: 0 3px 10px 0 #ececec;
`;

export const MenuItem = styled.div`
  width: 100%;
  padding: 10px;

  &:not(:last-of-type) {
    border-bottom: 1px solid grey;
  }

  &:hover {
    cursor: pointer;
    background: #E85D64;
  }
`;
