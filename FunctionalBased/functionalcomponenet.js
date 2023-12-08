import { useState } from "react"

const Functional=()=>{

const [count,setCount]=useState(0)

// const increment=()=>{
//     setCount(count=>count+2)
// }
// const dec=()=>{
//     setCount(count-2)
// }
// const rest=()=>{
//     setCount(count=>0)
// }




    return(<>
    <h1>count is-----{count}</h1>
    {/* <button onClick={increment}>plus 2</button>
    <button onClick={dec}>minus 2</button>
    <button onClick={rest}>reset</button> */}
    
    
    
    
    
    </>)
}

export default Functional