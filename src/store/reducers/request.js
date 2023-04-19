import { createSlice } from "@reduxjs/toolkit";
import {fetchWeatherData} from '../../api/requests/index'

const request = createSlice({
  name: "request",
  initialState: {
    weatherData: [],
    loading:false,
    error:null,
  },
  extraReducers: {
    [fetchWeatherData.fulfilled]:(state, action)=>{
        state.weatherData=action.payload;
        state.loading=false;
        state.error=null;
    },
    [fetchWeatherData.pending]:(state)=>{
        state.loading=true;
    },
    [fetchWeatherData.rejected]:(state,action)=>{
        state.error=action.error;
        state.loading=false;
    }
  },
});

export default request.reducer;
