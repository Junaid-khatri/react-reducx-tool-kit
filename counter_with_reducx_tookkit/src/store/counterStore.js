import counterReducer from '../slice/CounterSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

export default store;
  