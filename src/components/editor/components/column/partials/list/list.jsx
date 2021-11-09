import React from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Title from '../title/title';
import Text from '../text/text';
import * as S from './styles';

const List = ({ listId, items }) => (
  <Droppable
    droppableId={listId}
    type="LIST"
  >
    {(dropProvided, dropSnapshot) => (
      <S.Wrapper
        isDraggingOver={dropSnapshot.isDraggingOver}
        isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
        {...dropProvided.droppableProps}
      >
        <S.DropZone ref={dropProvided.innerRef}>
          {items.map(({ id, type, content }, index) => (
            <Draggable
              key={id}
              draggableId={id}
              index={index}
              shouldRespectForceTouch={false}
            >
              {(dragProvided, dragSnapshot) => {
                switch (type) {
                  case 'Title':
                    return (
                      <Title
                        key={id}
                        id={id}
                        content={content}
                        isDragging={dragSnapshot.isDragging}
                        isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
                        provided={dragProvided}
                      >
                        {content}
                      </Title>
                    );
                  default:
                    return (
                      <Text
                        key={id}
                        id={id}
                        content={content}
                        isDragging={dragSnapshot.isDragging}
                        isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
                        provided={dragProvided}
                      >
                        {content}
                      </Text>
                    );
                }
              }}
            </Draggable>
          ))}
          {dropProvided.placeholder}
        </S.DropZone>
      </S.Wrapper>
    )}
  </Droppable>
);

List.propTypes = {
  listId: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired
};

export default List;
