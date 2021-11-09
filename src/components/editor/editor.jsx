import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { boardActionCreator } from 'src/store/actions';
import { Column } from './components/components';
import * as S from './styles';

const Editor = () => {
  const {
    boardColumns
  } = useSelector(store => ({
    boardColumns: store.board.boardColumns
  }));
  const dispatch = useDispatch();

  const onDragEnd = result => {
    const { source, destination, type } = result;

    if (!destination) {
      return;
    }

    if (type === 'COLUMN') {
      dispatch(boardActionCreator.reorderColumn({
        startIndex: source.index,
        endIndex: destination.index
      }));
    }
    if (type === 'LIST') {
      dispatch(boardActionCreator.reorderElement({
        source,
        destination
      }));
    }
  };

  const createColumn = () => {
    dispatch(boardActionCreator.createColumn({
      listId: uuid()
    }));
  };

  return (
    <S.Container>
      <S.Control>
        <S.AddGroupButton
          onClick={createColumn}
        >
          Add Group
        </S.AddGroupButton>
      </S.Control>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="board"
          type="COLUMN"
        >
          {provided => (
            <S.DndWrapper
              $justify="space-between"
              $align="flex-start"
              $wrap="wrap"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {boardColumns.map(({ listId, items }, listIndex) => (
                <Column
                  key={listId}
                  listId={listId}
                  listIndex={listIndex}
                  items={items}
                />
              ))}
              {provided.placeholder}
            </S.DndWrapper>
          )}
        </Droppable>
      </DragDropContext>
    </S.Container>
  );
};

export default Editor;
