import { createSlice } from "@reduxjs/toolkit";
import todosData from '../assets/todos.json';

// todo = {
//     id: 234423,
//     text: "Laga pannkakor",
//     completed: false
// }

const todoSlice = createSlice({
    name: 'todos',
    initialState: todosData.todos,
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            const todo = state.find((todo) => todo.id === id);

            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;