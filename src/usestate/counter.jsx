import { useState } from "react";

function Counter (){
    console.log(useState())
    const[count,setcount]=useState(0)
    const increment=()=>{
        setcount((prev)=>prev+1)
    }
    const decrement=()=>{
        setcount((prev)=>prev-1)
    }
    const reset=()=>{
        setcount(0)
    }
    return(<>
    <h1>counter: {count}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>
    </>)
}
export default Counter