import { ActionTypes } from "../Constants/ActionTypes";

export const projectView = (data) =>{
    return {
        type : ActionTypes.PROJECTVIEW,
        payload: data
    }
}

export const projects = (data) =>{
    return {
        type : ActionTypes.PROJECTS,
        payload: data
    }
}