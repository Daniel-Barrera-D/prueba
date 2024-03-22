import { createContext, useContext, useState } from "react";
import { getVehiculosRequest } from '../api/data';

// Se crea un contexto React para poder acceder a la información que obtengo de la petición Get en cualquier alcance
// de la aplicación

const VehiculosContext = createContext();

export const useVehiculos = () => {

    const context = useContext(VehiculosContext);

    if(!context){
        throw new Error("useVehiculos must be used within a VehiculosProvider");
    }

    return context;
}

export function VehiculosProvider({children}) {

    const [vehiculos, setVehiculos] = useState([]);
    const [error, setError] = useState(false);


    const getVehiculos = async () => {
        try {
            const res = await getVehiculosRequest();
            setVehiculos(res.data.vehiculos);
        } catch (error) {
            setError(true)
            console.log(error);
        }
    }

    return(
        <VehiculosContext.Provider value={{
            vehiculos,
            error,
            getVehiculos,
        }}>
            {children}
        </VehiculosContext.Provider>
    )
}