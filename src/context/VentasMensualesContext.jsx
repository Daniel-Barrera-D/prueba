import { createContext, useContext, useState } from "react";
import { getVentasMensualesRequest } from '../api/data';

const VentasContext = createContext();

export const useVentas = () => {

    const context = useContext(VentasContext);

    if(!context){
        throw new Error("useVentas must be used within a VentasProvider");
    }

    return context;
}

export function VentasProvider({children}) {

    const [ventas, setVentas] = useState([]);
    const [error, setError] = useState(false);


    const getVentas = async () => {
        try {
            const res = await getVentasMensualesRequest();
            setVentas(res.data.vehiculos);
        } catch (error) {
            setError(true)
            console.log(error);
        }
    }

    return(
        <VentasContext.Provider value={{
            ventas,
            error,
            getVentas,
        }}>
            {children}
        </VentasContext.Provider>
    )
}