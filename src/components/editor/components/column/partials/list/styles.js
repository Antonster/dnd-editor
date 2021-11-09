import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 30px 0;
  ${props => {
    if (props.isDraggingOver) {
      return 'background-color: #ecffc1';
    }
    if (props.isDraggingFrom) {
      return 'background-color: #fcb0b4';
    }
    return '';
  }}
`;

export const DropZone = styled.div`
  min-height: 30px;
`;
