import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

export const Donations = createSlice({
  name: 'donations',
  initialState: initialState,
  reducers: {
    resetDonations: () => {
      return initialState;
    },
  },
});

export const {} = Donations.actions;

export default Donations.reducer;
