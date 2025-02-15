import { useState } from "react"

function Adddata(){
 const[data,setData]=useState({
    text:"",
    items:[]
 })
const inputchange=(e)=>{
    setData(prev => ({ ...prev, text: e.target.value }))
}
const inputadd=()=>{
    setData(prev => ({ items: [...prev.items, prev.text], text: "" }))

    }
 return(<>
      <input type="text" placeholder="add items" onChange={inputchange}></input>
      <button onClick={inputadd}>add</button>
      <ul> {data.items.map((val, index) => (
                 <li key={index}>{val}</li>
              ))}
        </ul>
 </>)
}
export default Adddata