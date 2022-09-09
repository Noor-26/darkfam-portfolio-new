import { ActionTypes } from "../Constants/ActionTypes";


const defState = {
    projectView : {},
    projects : []
}

export const projectViewReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.PROJECTVIEW:
          
            return {
                projectView : payload
            };
    
        default:
            return state;
    }
}

export const projectReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.PROJECTS:
          
            return {
                projects : payload
            };
    
        default:
            return state;
    }
}