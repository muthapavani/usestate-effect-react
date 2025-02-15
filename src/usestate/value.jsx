import { useState } from "react"

function Value (){
    const[value,setvalue]=useState("mahi")
    const handlechange =(e)=>{
        setvalue(e.target.value)
    }
    return(<>
    <h2>typed value:{value} </h2>
    <input type="text" placeholder="type something" name="text"onChange={handlechange}>
    </input>
    
    
    </>)

}
export default Value