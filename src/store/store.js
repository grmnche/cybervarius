import { configureStore } from '@reduxjs/toolkit';
import libraryReducer from '../features/library/librarySlice.js';

export default configureStore({
  reducer: {
    library: libraryReducer,
  },
});
