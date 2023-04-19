import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../index";

const mykey=process.env.REACT_APP_KEY;

export const fetchWeatherData = createAsyncThunk(
  "request/fetchWeatherData",
  async (arg) => {
    return instance.get(`/forecast?q=${arg}&appid=${mykey}&units=metric`).then((res) => res.data);
  }
);
