import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
      openProjects: [],
      isOpen: false // none = 0, projects 1 - whatever
  },
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setOpenProject: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.openProjects = action.payload
    },
    setIsOpen: (state, action) => {
      state.value.isOpen = action.payload
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { setOpenProject, setIsOpen } = projectSlice.actions

export default projectSlice.reducer