import { getDatabase, ref, get, child } from 'firebase/database';
import firebase from '../../config/firebase';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobList: [],
};

export const jobList = createSlice({
  name: 'joblist',
  initialState,
  reducers: {
    getJobs: (state) => {},
    updateJob: (state, action) => {},
  },
});

export const { getJobs, updateJob } = jobList.actions;

export default jobList.reducer;
