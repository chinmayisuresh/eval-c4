import { ADD_JOB,APPLY_JOB } from "./actionTypes";
export const addJob=(data)=>{
    return{
        type:ADD_JOB,
        payload:data
    }
}

export const applyJob=(data)=>{
    return {
        type:APPLY_JOB,
        payload:data
    }
}