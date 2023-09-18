import { configureStore } from '@reduxjs/toolkit'
import dateReducer from "../features/dateSlice"
import eventReducer from "../features/postSlice"
export const store = configureStore({
  reducer: {
    date: dateReducer,
    events: eventReducer
  },
})