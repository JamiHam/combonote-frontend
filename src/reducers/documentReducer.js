import { createSlice } from '@reduxjs/toolkit'

const documentSlice = createSlice({
  name: 'document',
  initialState: null,
  reducers: {
    setDocument(state, action) {
      return action.payload
    }
  }
})

export const { setDocument } = documentSlice.actions
export default documentSlice.reducer