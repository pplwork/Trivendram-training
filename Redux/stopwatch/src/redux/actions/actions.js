import { UPDATE,RESET,ADDLAP,DROPLAP } from "../constants/constants"

export const updateTime  = (value)=>{
    return{
        type:UPDATE,
        payload:value,
    }
}

export const resetTime = ()=>{
    return{
        type:RESET
    }
}

export const addLap = (lap)=>{
    return{
        type:ADDLAP,
        payload:lap,
    }
}

export const dropLap = () =>{
    return {
        type:DROPLAP
    }
}