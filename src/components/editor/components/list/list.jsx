import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import {
  Title,
  Text
} from './partials/partials';
import * as S from './styles';

const addingOptions = [
  {
    key: 'Title',
    text: 'Title',
    value: 'Title',
    label: { color: 'olive', empty: true, circular: true }
  },
  {
    key: 'Text',
    text: 'Text',
    value: 'Text',
    label: { color: 'grey', empty: true, circular: true }
  }
];

const List = ({ listId, listIndex, items }) => (
  <Draggable draggableId={listId} index={listIndex}>
    {(provided, snapshot) => (
      <S.Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
      >
        <Droppable
          droppableId={listId}
          type="LIST"
        >
          {(dropProvided, dropSnapshot) => (
            <div
              isDraggingOver={dropSnapshot.isDraggingOver}
              isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
              {...dropProvided.droppableProps}
            >
              <div ref={dropProvided.innerRef}>
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
              </div>
            </div>
          )}
        </Droppable>

        <Dropdown
          icon="plus"
          labeled
          button
        >
          <Dropdown.Menu>
            <Dropdown.Menu scrolling>
              {addingOptions.map(option => (
                <Dropdown.Item key={option.value} {...option} />
              ))}
            </Dropdown.Menu>
          </Dropdown.Menu>
        </Dropdown>
      </S.Container>
    )}
  </Draggable>
);

List.propTypes = {
  listId: PropTypes.string.isRequired,
  listIndex: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired
};

export default List;
