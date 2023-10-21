import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const fatchUserInfo = createAsyncThunk('userInfo/fatchUserInfo', async (sign) =>{
   const {data} = await axios.post('http://localhost:5500/user/signUp', sign)
   return data;
})
export const fatchUserInfoUsingLogin = createAsyncThunk('userInfo/fatchUserInfoUsingLogin', async (sign)=>{
   const {data} = await axios.post('http://localhost:5500/user/login', sign)
   return data;
} )
export const updateUserInfo = createAsyncThunk('userInfo/updateUserInfo',async (sign)=>{
  const {data} = await axios.post('http://localhost:5500/user/editprofile', sign);
  console.log("this is Response data-",data);
  return data;
})


export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState:{
    data:{}
  },
  reducers: {}
  ,
  extraReducers: (builder)=>{
    builder.addCase(fatchUserInfo.fulfilled,(state,action)=>{
      console.log("Data by dispathlogin- ",action.payload);
       state.data = action.payload;
    })
    .addCase(fatchUserInfoUsingLogin.fulfilled,(state,action)=>{
       console.log("Data by dispathLogin- ",action.payload);
       state.data = {...action.payload};
    })
    .addCase(updateUserInfo.fulfilled, (state,action)=>{
      console.log("Data by updateUserInfo - ",action.payload);
      // document.cookie = `sessionId= ${action.payload.sessionId}`;
       state.data = {...state.data ,...action.payload};
    } )
  },
})

// Action creators are generated for each case reducer function

export default userInfoSlice.reducer;