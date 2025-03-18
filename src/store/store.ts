import { configureStore } from '@reduxjs/toolkit';
import dataSliceReducer from './dataState';


export const store = configureStore({
  reducer: {
    dataState: dataSliceReducer,
  }
})

// Выведит типы RootState и AppDispatch из самого store.
export type RootState = ReturnType<typeof store.getState>
// Предполагает type: {dataState: dataSliceReducer}
export type AppDispatch = typeof store.dispatch