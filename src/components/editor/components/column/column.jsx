import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { Draggable } from 'react-beautiful-dnd';
import {
  List
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

const Column = ({ listId, listIndex, items }) => (
  <Draggable draggableId={listId} index={listIndex}>
    {(provided, snapshot) => (
      <S.Container
        {...provided.draggableProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
      >
        <S.Header
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        />
        <List
          listId={listId}
          items={items}
        />
        <Dropdown
          style={{
            margin: '0 0 30px 30px'
          }}
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

Column.propTypes = {
  listId: PropTypes.string.isRequired,
  listIndex: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired
};

export default Column;
