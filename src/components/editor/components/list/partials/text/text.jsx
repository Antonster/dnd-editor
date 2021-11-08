import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Text = ({ id, content, isDragging, isGroupedOver, provided }) => (
  <S.Text
    id={id}
    isDragging={isDragging}
    isGroupedOver={isGroupedOver}
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
  >
    {content}
  </S.Text>
);

Text.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  isGroupedOver: PropTypes.bool.isRequired,
  provided: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Text;
