import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { projectReducer, projectViewReducer } from "../Reducers/ProjectReducers";


const store = configureStore({
    reducer: {
     projectView : projectViewReducer,
     projects : projectReducer
    },
    middleware: [thunk],
    
  });
  
  export default store;