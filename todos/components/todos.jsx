function TodosDis(props) {
    // const Handledelete = (index) => {
    //     const updatedTodos = [...props.todos];
    //     updatedTodos.splice(index, 1);
    //     props.setTodos(updatedTodos);
    // };

    return (
        <>
        {props.todos.map((todo, index) => (
            <div key={index}>
                <h3>{todo}</h3>
                {/* <button onClick={() => handleDelete(index)}>delete</button> */}

            </div>
        ))}
        </>
    );
}
