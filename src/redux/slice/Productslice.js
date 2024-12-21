import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState={
    viewproducts:[],
    error:'',
    loading:false
    

}

export const getproducts=createAsyncThunk('getproducts',async()=>{
    const response=await axios.get('http://127.0.0.1:8000/view_product_api/')
    return response.data.data;
})



const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getproducts.pending,(state)=>{
            state.loading=true
        })

        builder.addCase(getproducts.fulfilled,(state,action)=>{
            state.loading=false
            console.log(action);
            state.viewproducts=action.payload
            
        }) 
        builder.addCase(getproducts.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }

});



export default productSlice.reducer;




