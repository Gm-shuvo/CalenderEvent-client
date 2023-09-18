import {createSlice} from "@reduxjs/toolkit"


const initialState = {
  date: '',
}

export const dateSlicer = createSlice({
  name: 'date',
  initialState,
  reducers:{
    setDate: (sate, action) =>{
      sate.date = action.payload
    }
  }
})

export const getSelectDate = (sate) =>{
  return sate.date;
}

export const {setDate} = dateSlicer.actions
export default dateSlicer.reducer