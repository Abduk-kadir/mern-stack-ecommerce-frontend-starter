import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL";
import { resetErrAction } from "../globalactions/globalAction";
//initial state
const initialState={
    loading:false,
    error:null,
    users:[],
    user:{},
    profile:{},
    userAuth:{
        loading:false,
        error:null,
        userInfo:{}
    }
}

//registerAction
export const registerUserAction=createAsyncThunk('/users/register',async({fullname,email,password},{rejectWithValue,getState,dispatch})=>{
   
    try{
        const {data}=await axios.post(`${baseURL}/users/register`,{email,password,fullname})
        return data
    }
    catch(err){
    
      return rejectWithValue(err?.response?.data)
    }
    
})


//login Action

export const loginUserAction=createAsyncThunk('/users/login',async({email,password},{rejectWithValue,getState,dispatch})=>{
   
    try{
        const {data}=await axios.post(`${baseURL}/users/login`,{email,password})
        console.log('data is:',data)
        localStorage.setItem('userInfo',JSON.stringify(data))
        return data
    }
    catch(err){
      console.log(err)  
      return rejectWithValue(err?.response?.data)
    }
    
})

//userSlice
const usersSlice=createSlice({
     name:"users",
     initialState,
     extraReducers:(builder)=>{

        builder.addCase(loginUserAction.pending,(state,action)=>{
           
            state.userAuth.loading=true;
        });

        builder.addCase(loginUserAction.fulfilled,(state,action)=>{
           
            state.userAuth.userInfo=action.payload
            state.userAuth.loading=false;
        });

        builder.addCase(loginUserAction.rejected,(state,action)=>{
          
            state.userAuth.error=action.payload
            state.userAuth.loading=false;
           
        });

        builder.addCase(registerUserAction.pending,(state,action)=>{
         
            state.loading=true;
        });

        builder.addCase(registerUserAction.fulfilled,(state,action)=>{
           
            state.user=action.payload
            state.loading=false;
        });

        builder.addCase(registerUserAction.rejected,(state,action)=>{
          
            state.error=action.payload
            state.loading=false;
           
        });

        builder.addCase(resetErrAction.pending,(state)=>{
           
            state.error=false;
        })
     }
   
})

//generate reducer
const usersReducer=usersSlice.reducer
export default usersReducer
