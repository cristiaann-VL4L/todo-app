import { mockTodos } from "../../utils/mockTodos";

export const ListTodos = () => {
    
    return(
        <div>
            {mockTodos.map(todo => (
                <li key={todo.id}>
                    <p>{todo.todo}</p>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <p>COMPLETED: {todo.completed ? "Yes":"No"}</p>
                        <button>{!todo.completed ? "Complete" : "Remove"}</button>
                    </div>
                </li>
            ))}
        </div>
    );
}