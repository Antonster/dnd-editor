import { createReducer } from '@reduxjs/toolkit';
import {
  setBoardColumns
} from './actions';

const localData = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const initialState = {
  boardColumns: [],
  ...localData.board
};

const reducer = createReducer(initialState, builder => {
  builder.addCase(setBoardColumns, (state, action) => {
    const { boardColumns } = action.payload;

    state.boardColumns = boardColumns;
  });
});

export { reducer };
