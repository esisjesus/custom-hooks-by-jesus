export const toDoReducer = ( initialState = [] , action ) => {

        switch ( action.type ) {
            case '[TASK] Add Task':
                return [...initialState, action.payload]
            case '[TASK] Finish Task':
                return initialState.filter(({id}) => id != action.payload.id)
            case '[TASK] Task Done': 
                return initialState.map( task => task.id === action.payload.id? {...task, done: !task.done}: task )
            default:
                return initialState
        }

} 