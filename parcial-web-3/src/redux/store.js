import { configureStore } from '@reduxjs/toolkit';
import DigimonReducer from './cahracterSlice.js';

export const store = configureStore({
  reducer: {
    character: DigimonReducer,
    
  }
});

