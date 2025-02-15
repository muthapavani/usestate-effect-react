import { useState } from "react"

function Formdata (){
    const[Formdata,setfdata]=useState({
        username:"",
        email:"",
        password:""
    })
    const[data,setdata]=useState(null)
    const handlechange =(e)=>{
        const{name,value}=e.target;
        setfdata({...Formdata,[name]:value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        setdata(Formdata)
    }
    return(<>
    <h1>Formdata</h1>
      <form onSubmit={handleSubmit}>
        <label for="username">username</label>
        <input type="name" placeholder="entername" id="username" name="username" onChange={handlechange}>
        </input><br></br>
        <label for="email">email</label>
        <input type="email " placeholder="email" id="email"name="email" onChange={handlechange}></input>
        <br></br>
        <label for="password">password</label>
        <input type="password" placeholder="password" id="password"  name="password" onChange={handlechange}></input>
        <br></br>
        <button type="submit">submit</button>
        </form>
        <div>
            {data && <div>
                <h1>{data.username}</h1>
                <h2>{data.email}</h2>
                <h2>{data.password}</h2>

                </div>}

        </div>
    </>)
   

}
export default Formdata
