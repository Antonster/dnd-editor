import { configureStore } from '@reduxjs/toolkit';

// import { Home, Board } from './root-reducer';

const store = configureStore({
  reducer: {
    // Home,
    // Board
  }
});

// store.subscribe(() => {
//   localStorage.setItem('reduxState', JSON.stringify(store.getState()));
// });

export default store;
