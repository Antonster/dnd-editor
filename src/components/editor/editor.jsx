import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { List } from './components/components';
import * as S from './styles';

const fakeData = [
  {
    listId: '1234',
    items: [
      {
        id: '1',
        type: 'Title',
        content: 'Title'
      },
      {
        id: '2',
        type: 'Text',
        content: 'Text'
      },
      {
        id: '3',
        type: 'Text',
        content: 'Big text'
      }
    ]
  },
  {
    listId: '4321',
    items: [
      {
        id: '4',
        type: 'Text',
        content: 'Text'
      },
      {
        id: '5',
        type: 'Text',
        content: 'Big text'
      }
    ]
  }
];

const Editor = () => {
  const onDragEnd = result => {
    const { source, destination, type } = result;

    if (!destination) {
      return;
    }
    console.log(source, destination, type);

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId
      && source.index === destination.index
    ) {
      // eslint-disable-next-line no-useless-return
      return;
    }
  };

  return (
    <S.Container>
      <S.Control>
        <S.AddGroupButton>Add Group</S.AddGroupButton>
      </S.Control>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="board"
          type="COLUMN"
          direction="horizontal"
        >
          {provided => (
            <S.DndWrapper
              $justify="space-between"
              $align="flex-start"
              $wrap="wrap"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {fakeData.map(({ listId, items }, listIndex) => (
                <List
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
