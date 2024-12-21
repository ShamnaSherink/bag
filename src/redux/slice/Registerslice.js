import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState={
    registration:[],
    error:'',
    loading:false
    

}
export const register=createAsyncThunk('register',async(object)=>{
    console.log(object);
    
    const response=await axios.post('http://127.0.0.1:8000/registration/',object)
    return response;
})

    
const registertSlice=createSlice({
    name:'register',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(register.pending,(state)=>{
            state.loading=true
        })

        builder.addCase(register.fulfilled,(state,action)=>{
            state.loading=false
            console.log(action);
            state.registration=action.payload
            
        }) 
        builder.addCase(register.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload|| action.error.message
        })
    }

});



export default registertSlice.reducer;


