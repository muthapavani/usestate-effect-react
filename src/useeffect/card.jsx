import { useEffect, useState } from "react"

function Card (){
    const[count,setCount]=useState(1)
    const[data,setData]=useState([])
    const previous=()=>{
        setCount(prev=> prev-1)
       } 
    const next=()=>{
        setCount(prev=> prev+1)
       }
   useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${count}`)
    .then((res)=>res.json())
    .then((data)=>setData(data))
   },[count])
   console.log(data)

return(<>

<h1> {data.title}</h1>
<button onClick={previous}>previous</button>
<button onClick={next}>next</button>

</>)
}
export default Card