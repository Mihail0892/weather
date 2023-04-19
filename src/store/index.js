import { configureStore } from "@reduxjs/toolkit";

import Request from "./reducers/request";

const store = configureStore({
  reducer: {
    Request:Request,
  },
});

export default store;