import { createReducer } from '@reduxjs/toolkit';
import {
  setBoardColumns
} from './actions';

const initialState = {
  boardColumns: []
};

const reducer = createReducer(initialState, builder => {
  builder.addCase(setBoardColumns, (state, action) => {
    const { boardColumns } = action.payload;

    state.boardColumns = boardColumns;
  });
});

export { reducer };
