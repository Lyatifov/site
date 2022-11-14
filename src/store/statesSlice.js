import { createSlice } from "@reduxjs/toolkit"

const statesSlice = createSlice({
    name: "states",
    initialState: {
        isActiveMiniMenu: false,
        loading: true,
        error: null
    },

    reducers: {
        toggleIsActiveMiniMenu(state, action) {
            state.isActiveMiniMenu = !state.isActiveMiniMenu
        }


        // createTodo(state, action) {
        //     state.todos.push(action.payload)
        // },

        // removeTodo(state, action) {
        //     state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        // },

        // toggleTodo(state, action) {
        //     const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
        //     toggledTodo.completed = !toggledTodo.completed
        // }
    },

    // extraReducers: {
    //     [fetchTodos.pending]: (state, action) => {
    //         state.loading = true
    //     },
    //     [fetchTodos.fulfilled]: (state, action) => {
    //         state.loading = false
    //         state.todos = action.payload
    //     },
    //     [fetchTodos.rejected]: (state, action) => {
    //         state.loading = false
    //         state.error = action.payload
    //     }
    // }

})

export const { toggleIsActiveMiniMenu } = statesSlice.actions

export default statesSlice.reducer




// export const fetchTodos = createAsyncThunk()

    //     "todos/fetchTodos",
    //     async function (_, { rejectWithValue }) {
    
    //         try {
    //             const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    
    //             if (!response.ok) {
    //                 throw new Error("Server Error")
    //             }
    
    //             const data = await response.json()
    
    //             return data
    //         } catch (error) {
    //             return rejectWithValue(error.message)
    //         }
    
    
    //     }
    // )
    
    // export const deleteTodo = createAsyncThunk(
    //     "todos/deleteTodo",
    //     async function (id, { rejectWithValue, dispatch }) {
    
    //         try {
    //             const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    //                 method: "DELETE",
    //             })
    
    //             if (!response.ok) {
    //                 throw new Error("Server Error")
    //             }
    
    //             dispatch(removeTodo({ id }))
    
    //         } catch (error) {
    //             return rejectWithValue(error.message)
    //         }
    //     }
    // )
    
    // export const toggleStatus = createAsyncThunk(
    //     "todos/toggleStatus",
    //     async function (id, { rejectWithValue, dispatch, getState }) {
    
    //         const todo = getState().todos.todos.find(todo => todo.id === id)
    
    //         try {
    //             const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    //                 method: "PATCH",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify({
    //                     completed: !todo.completed
    //                 })
    //             })
    
    //             if (!response.ok) {
    //                 throw new Error("Server Error")
    //             }
    
    //             dispatch(toggleTodo({ id }))
    
    //         } catch (error) {
    //             return rejectWithValue(error.message)
    //         }
    //     }
    // )
    
    // export const addNewTodo = createAsyncThunk(
    //     "todos/addNewTodo",
    //     async function (text, { rejectWithValue, dispatch }) {
    
    //         if (!text.trim()) return rejectWithValue("Input has empty!")
    
    //         const todo = todoForm(text)
    
    //         try {
    //             const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify(todo)
    //             })
    
    //             if (!response.ok) {
    //                 throw new Error("Server Error")
    //             }
    
    //             dispatch(createTodo(todo))
    
    //         } catch (error) {
    //             return rejectWithValue(error.message)
    //         }
    //     }
    // )