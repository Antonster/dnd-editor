import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { Draggable } from 'react-beautiful-dnd';
import { boardActionCreator } from 'src/store/actions';
import {
  List
} from './partials/partials';
import * as S from './styles';

const addingOptions = [
  {
    text: 'Add Title',
    type: 'Title'
  },
  {
    text: 'Add Text',
    type: 'Text'
  }
];

const Column = ({ listId, listIndex, items }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const createElement = type => {
    dispatch(boardActionCreator.createElement({
      elemId: uuid(),
      type,
      listId
    }));
    setInputValue('');
  };

  return (
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
          <S.MenuContainer>
            <S.Input
              type="text"
              placeholder="Type '/' for commands"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            {inputValue === '/'
            && (
              <S.Menu>
                {addingOptions.map(({ type, text }) => (
                  <S.MenuItem key={type} onClick={() => createElement(type)}>
                    {text}
                  </S.MenuItem>
                ))}
              </S.Menu>
            )}
          </S.MenuContainer>
        </S.Container>
      )}
    </Draggable>
  );
};

Column.propTypes = {
  listId: PropTypes.string.isRequired,
  listIndex: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired
};

export default Column;
