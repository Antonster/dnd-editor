import { createReducer } from '@reduxjs/toolkit';
import {
  setBoardColumns
} from './actions';

const initialState = {
  boardColumns: [
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
  ]
};

const reducer = createReducer(initialState, builder => {
  builder.addCase(setBoardColumns, (state, action) => {
    const { boardColumns } = action.payload;

    state.boardColumns = boardColumns;
  });
});

export { reducer };
