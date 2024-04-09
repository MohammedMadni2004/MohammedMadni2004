function TodosDis(props){
    return(
        <>
        {props.todos.map((todo,index)=>(
            <div key={index}><h3>{todo}</h3></div>
        ))}
        </>
    )
}
export default TodosDis