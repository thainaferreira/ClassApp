import {createContext, useContext, useEffect, useState  } from "react"
import api from "../../services/api";

export const classContext = createContext()

export const ClassProvider = ({children}) => {
    const [class, setClass] = useState([]);

    const token = JSON.parse(localStorage.getItem('@ClassApp:token')) || null
    

    useEffect(() => {
        api.get('/class', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => setClass(response.data)).catch((err) => console.log(err))
    }, [])

    return (
        <ClassContext.Provider value={{class, setClass}}>
            {children}
        </ClassContext.Provider>
    )
}

export const useClass = useContext(classContext)