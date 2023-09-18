import {createSlice} from "@reduxjs/toolkit"


const initialState = {
  events: [],
}

export const eventsSlicer = createSlice({
  name: 'events',
  initialState,
  reducers:{
    setEvent: (sate, action) =>{
      sate.events = action.payload
    }
  }
})

export const getSelectEvent = (sate) =>{
  return sate.events;
}

export const {setEvent} = eventsSlicer.actions
export default eventsSlicer.reducer