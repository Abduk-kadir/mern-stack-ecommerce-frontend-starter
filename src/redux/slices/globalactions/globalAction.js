import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// reset  error action

export const resetErrAction=createAsyncThunk('resetErr-Action',()=>{
   console.log('fhjdfjdhfjdhfhjdhfjdhfjdhfjd')
    return {};
})

export const resetSuccAction=createAsyncThunk('resetErr-Action',()=>{

    return {};
})
