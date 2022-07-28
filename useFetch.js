import { useEffect, useState } from 'react'

export const useFetch = ( url ) => {
    
    const [state, setState] = useState({
        data:null,
        isLoading: true,
        hasError : null,
    })

    const fireFetch = async() => {
        
        setState({
            ...state,
            isLoading: true,
        })

        try{
            const response = await fetch(url)
            const data = await response.json()
            setState({
                data,
                isLoading: false, 
                hasError: false
            })

            return data 

        }catch{
            console.error
            setState({
                ...state,
                isLoading: false,
                hasError: true,
            })
        }
    }

    useEffect(() => {
        fireFetch()
    }, [url])
    

    return{
        ...state
    }
}
