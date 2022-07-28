import { useEffect, useReducer } from 'react'
import { toDoReducer } from './toDoReducer'

export const useTodo = ( initTodos ) => {

    const init = () =>{
        return JSON.parse( localStorage.getItem( 'todos' ) ) || []
    }
    
    const [ todos, dispatch ] = useReducer( todoReducer, initTodos, init )
    
    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) )
    }, [todos])
    
    
    const handleNewToDo = (todo) => {
        const action = {
            payload: todo,
            type: '[TASK] Add Task'
        }
        dispatch( action ) 
    }
    
    const onDeleteTask = (todo) => {
        const action = {
            payload: todo,
            type: '[TASK] Finish Task'
        }
        dispatch(action);
    }
    
    const onFinishTask = (todo) => {
        const action = {
            payload: todo,
            type: '[TASK] Task Done'
        }
        dispatch(action);
    }

    return {
        todos,
        handleNewToDo,
        onDeleteTask,
        onFinishTask,
        todosCount: todos.length,
        pendingTodos:  todos.filter( ({done}) => !done ).length
    }
}

