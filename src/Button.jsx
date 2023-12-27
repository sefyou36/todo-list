const Button = ({handleSubmit,action,color,handleDelete}) => {
    return (
    <button onClick={()=>handleSubmit()} onDoubleClick={()=>handleDelete()} style={{backgroundColor:color}}> {action}</button>

        )
}
export default Button