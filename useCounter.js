//Contador de uno en uno
import { useState } from "react"

export const useCounter= (initialState=100)=>{
    
    const [state, setState] = useState(initialState);
    
    const increment = ()=>{
        setState(state+1);
    }

    const decrement = ()=>{
        setState(state-1);
    }

    const reset = ()=>{
        setState(initialState);
    }

    return {
        state,
        increment,
        decrement,
        reset,
    };
}


