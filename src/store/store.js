import { configureStore } from '@reduxjs/toolkit';

import { board } from './root-reducer';

const store = configureStore({
  reducer: {
    board
  }
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
