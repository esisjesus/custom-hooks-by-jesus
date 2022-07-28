import { useState } from "react"

export const useForm = ( initialForm = {} ) => {
    
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ( { target } ) => {
        const { name, value } = target
        setFormState( prevState => ( {...prevState, [ name ]: value } ) )
    }

    const onClearFields = () => {
        setFormState(initialForm)
    }

    return{
        ...formState,
        onInputChange,
        onClearFields
    }
}
