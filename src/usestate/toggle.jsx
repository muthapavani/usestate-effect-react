import { useState } from "react";

function Toggle (){
  const[data,setdata]=useState({
    name:"pavani",
   isvisible:true 
})
   const htoggle =()=>{
    setdata(prev => ({ ...prev, isvisible: !prev.isvisible }))
   }
   return(<>
   <div>
    <h1>Toggle task: </h1>
    <h3>{data.isvisible && data.name}</h3>
    <button onClick={htoggle}>{data.isvisible ? "hide":"show"}</button>
    </div>
    </>)

}
export default Toggle