// importera det vi behöver från react-redux för att kunna prata med redux
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo } from "../features/todoSlice";
import { useState } from "react";

const TodoList = () => {
    // få hur statet i vår todo-store ser ut just nu
    const todos = useSelector((state) => state.todos);
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(addTodo(newTodo));
    };

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    return (
        <article>
            <h1>Todo List</h1>
            <h2>Add Todo:</h2>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={handleAddTodo}>Add Todo</button>

            <h3>Current Todos:</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
                        <p>{todo.text}</p>
                    </li>
                ))}
            </ul>
        </article>
    )
};
export default TodoList;
