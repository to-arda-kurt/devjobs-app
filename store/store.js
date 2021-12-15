import { configureStore } from '@reduxjs/toolkit';
import jobListReducer from './features/joblist';

export const store = configureStore({
  reducer: {
    jobList: jobListReducer,
  },
});
