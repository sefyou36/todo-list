import Todo from "./Todo";
import Button from "./Button";
import { useState } from "react";
const TodoList = ({data,setData}) => {
    const [isDelete,setIsDelete] = useState('')
    const handleDelete = () =>{
            setData([...data,''])
    }
    return( 
        <>
    {data.map((item, index) => (
        < div key={index}>

                <Todo  data ={item}/>
                <Button action="delete" color='red' handleDelete={handleDelete}/>
        </div>
        
        ))}
        </>
    )
}


export default TodoList