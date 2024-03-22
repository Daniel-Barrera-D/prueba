import { createContext, useContext, useState } from "react";
import { getEntradasMensualesRequest } from '../api/data';

const EntradasContext = createContext();

export const useEntradas = () => {

    const context = useContext(EntradasContext);

    if(!context){
        throw new Error("useEntradas must be used within a EntradasProvider");
    }

    return context;
}

export function EntradasProvider({children}) {

    const [entradas, setEntradas] = useState([]);
    const [error, setError] = useState(false);

    const getEntradas = async () => {
        try {
            const res = await getEntradasMensualesRequest();
            setEntradas(res.data.vehiculos);
        } catch (error) {
            setError(true)
            console.log(error);
        }
    }

    return(
        <EntradasContext.Provider value={{
            entradas,
            error,
            getEntradas,
        }}>
            {children}
        </EntradasContext.Provider>
    )
}