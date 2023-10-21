import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const findUserInfo = createAsyncThunk('findUser/fatchUserInfo', async (sendData) =>{
   const {data} = await axios.post(`http://localhost:5500/user/findusers`, sendData);
   return data;
})



export const findUserSlice = createSlice({
  name: 'findUser',
  initialState:{
    data:[]
  },
  reducers: {}
  ,
  extraReducers: (builder)=>{
    builder.addCase(findUserInfo.fulfilled,(state,action)=>{
      console.log("Data by dispathfindUser- ",action.payload);
       state.data = [...action.payload];
    })
   
  },
})

// Action creators are generated for each case reducer function

export default findUserSlice.reducer;