import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CompaniesState = {
  search: string;
};

// Define the initial state using that type
const initialState: CompaniesState = {
  search: '',
};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = companiesSlice.actions;

export default companiesSlice.reducer;
