import { useState,useEffect } from "react";


const Usehook =(props)=>{
    const [count,setcount] = useState(0)

    useEffect(()=>{
        document.title = count
    })

    return (
        <div>
            <p>Counter : {count}</p>
            <button onClick ={()=>setcount(count + 1)}>+1</button>
            <button onClick ={()=>setcount(0)}>Reset</button>
            <button onClick ={()=>setcount(count - 1)}>-1</button>
        </div>
    )
    
};

export default Usehook;