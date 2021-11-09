import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  SET_BOARD_COLUMNS: 'board/set-board-columns'
};

const setBoardColumns = createAction(
  ActionType.SET_BOARD_COLUMNS,
  boardColumns => ({
    payload: {
      boardColumns
    }
  })
);

const createColumn = ({ listId }) => (dispatch, getRootState) => {
  const { board: { boardColumns } } = getRootState();

  const result = [
    ...boardColumns,
    {
      listId,
      items: []
    }
  ];

  dispatch(setBoardColumns(result));
};

const createElement = ({ elemId, type, listId }) => (dispatch, getRootState) => {
  const { board: { boardColumns } } = getRootState();

  const result = boardColumns.map(elem => {
    if (elem.listId === listId) {
      return {
        ...elem,
        items: [
          ...elem.items,
          {
            id: elemId,
            type,
            content: `Some ${type}`
          }
        ]
      };
    }

    return elem;
  });

  dispatch(setBoardColumns(result));
};

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const reorderColumn = ({ startIndex, endIndex }) => (dispatch, getRootState) => {
  const { board: { boardColumns } } = getRootState();

  const result = reorder(boardColumns, startIndex, endIndex);

  dispatch(setBoardColumns(result));
};

const reorderElement = ({ source, destination }) => (dispatch, getRootState) => {
  const { board: { boardColumns } } = getRootState();

  if (source.droppableId === destination.droppableId) {
    const result = boardColumns.map(elem => {
      if (elem.listId === destination.droppableId) {
        const elemItems = reorder(elem.items, source.index, destination.index);

        return {
          ...elem,
          items: elemItems
        };
      }

      return elem;
    });

    dispatch(setBoardColumns(result));
  } else {
    const target = boardColumns.find(elem => elem.listId === source.droppableId).items[source.index];

    const result = boardColumns.map(elem => {
      if (elem.listId === source.droppableId) {
        const elemItems = [...elem.items];
        elemItems.splice(source.index, 1);

        return {
          ...elem,
          items: elemItems
        };
      }
      if (elem.listId === destination.droppableId) {
        const elemItems = [...elem.items];
        elemItems.splice(destination.index, 0, target);

        return {
          ...elem,
          items: elemItems
        };
      }

      return elem;
    });

    dispatch(setBoardColumns(result));
  }
};

export {
  setBoardColumns,
  createColumn,
  createElement,
  reorderColumn,
  reorderElement
};
