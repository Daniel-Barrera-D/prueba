/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useVentas } from "../context/VentasMensualesContext";
import BarsChart from "../components/BarsChart/BarsChart";
import useSEO from "../hooks/useSEO";
import Error from "./Error";
import '../assets/estilos.css'

const VentasMes = () => {

    const {getVentas, ventas, error} = useVentas();

    useEffect(() => {
        getVentas();
    }, [])

    useSEO({
        title: "Ventas por mes"
    })

    //Se obtiene la llave y el respectivo valor del objeto obtenido en la petición.
    const keysData = Object.keys(ventas);
    const valuesData = Object.values(ventas);

    return(
        //Si hay un error, se renderiza el componente <Error />, de lo contrario se renderiza el componente <VentasMes/>
        error ? <Error/> :
        <div className="contenido center">
            <h2>{document.title}</h2>
            <div className="grafico">
                <BarsChart labels={keysData} data={valuesData}/>
            </div>
        </div>
    )
}

export default VentasMes;