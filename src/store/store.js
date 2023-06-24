import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "./UserSlice/userSlice"

export default configureStore({
  reducer: {
    users: UserReducer,
  },
})