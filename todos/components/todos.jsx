
function TodosDis(props) {
    const handleDelete = (index) => {
        console.log("called");
        const updatedTodos = [...props.todos];
        updatedTodos.splice(index, 1);
        props.setTodos(updatedTodos);
        //console.log(abc);
    };
    

    return (
        <>
        {props.todos.map((todo, index) => (
            <div key={index}>
                <h3>{todo}</h3>
                { <button onClick={() => handleDelete(index)}>delete</button> }

            </div>
        ))}
        </>
    );
}
export default TodosDis;