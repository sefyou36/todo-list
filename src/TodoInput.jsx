import Button from "./Button"
import { useState } from "react"
const TodoInput = ({data,setData}) => {

    const [myInput,setMyInput] = useState("")

    const handleInput = (e) => {
        console.log(e.target.value)
        setMyInput(e.target.value)
    }
    const handleSubmit = ()=>{
        setData([...data,myInput])
        setMyInput("")

    }
  
return (
    <>
    <input type="text" value={myInput} onChange={handleInput} />
    
    <Button handleSubmit={handleSubmit}  action="Add" color="green" />
    {/* <button onClick={handleSubmit}>Add</button> */}
    </>
)

}

export default TodoInput