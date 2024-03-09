export function Todos({todos}){
    return (
        <div>
            {todos.map((todo)=>{
                return (
                    <div>
                        <h1>Title: {todo.title}</h1>
                        <h2>Description: {todo.description}</h2>
                        <button>{todo.completed == true? "Completed" : "Mark as Completed "}</button>
                    </div>
                )
            })}
        </div>
    )
}