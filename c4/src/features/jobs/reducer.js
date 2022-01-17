import { ADD_JOB,APPLY_JOB } from "./actionTypes";
const init={jobs:{}}

export const reducer=(state=init,{type,payload})=>{
    switch(type){
        case ADD_JOB:
            return{
                ...state,
                jobs:payload
            }

            case APPLY_JOB:
                return {
                    ...state,
                    jobs:payload

                }
                default:
                    return state;
    }
}