
import { createSlice } from '@reduxjs/toolkit';

const trackSlice = createSlice({
  name: 'tracks',
  initialState:{
    audio:[]
  },
  reducers: {
    setData: (state, action) => {
        state.audio = action.payload;
    },
  }
});

export const {setData} = trackSlice.actions

export default trackSlice.reducer;