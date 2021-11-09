import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const color = {
  primary: '#FFCD52',
  primaryDark: '#d9ae46',
  green: '#A0C452',
  blue: '#08A2B5',
  blueDark: '#038c9b',
  red: '#E85D64'
};

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ $direction }) => ($direction || 'row')};
  flex-wrap: ${({ $wrap }) => ($wrap || 'nowrap')};
  justify-content: ${({ $justify }) => ($justify || 'flex-start')};
  align-items: ${({ $align }) => ($align || 'stretch')};
`;

export const MainButton = styled.button`
  border-radius: 3px;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  height: 36px;
  padding: 0 20px;
  transition: background .3s ease, transform .3s ease, color .2s ease;

  ${({ $style }) => {
    switch ($style) {
      case 'secondary':
        return `
          color: #3b3b3b;
          border: 1px solid #e9e9e9;

          &:hover {
            color: ${color.primary};
            border: 1px solid ${color.primary};
          }
        `;
      default:
        return `
          color: #ffffff;
          background: ${color.primary};

          &:hover {
            background: ${color.primaryDark};
          }
        `;
    }
  }}
`;

export const MainLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  padding: 7px 20px;
  transition: background .3s ease, transform .3s ease, color .2s ease;

  ${({ $style }) => {
    switch ($style) {
      case 'secondary':
        return `
          color: #3b3b3b;
          border: 1px solid #e9e9e9;

          &:hover {
            color: ${color.primary};
            border: 1px solid ${color.primary};
          }
        `;
      default:
        return `
          color: #ffffff;
          background: ${color.primary};
          border: 1px solid ${color.primary};

          &:hover {
            background: ${color.primaryDark};
          }
        `;
    }
  }}
`;

export const Space = styled.div`
  border-radius: 5px;
  box-shadow: 0 3px 4px 0 #ececec;
  background: #ffffff;
  
  &:not(:last-of-type) {
    margin: 0 0 30px;
  }
`;
