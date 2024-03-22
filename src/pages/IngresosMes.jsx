/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useEntradas } from "../context/EntradasMensualesContext";
import BarsChart from "../components/BarsChart/BarsChart";
import useSEO from "../hooks/useSEO";
import Error from "./Error";
import '../assets/estilos.css'

const IngresosMes = () => {

    const { getEntradas, entradas, error } = useEntradas();

    useEffect(() => {
        getEntradas();
    }, [])

    useSEO({
        title: "Ingresos por mes"
    })

    //Se obtiene la llave y el respectivo valor del objeto obtenido en la petición.
    const keysData = Object.keys(entradas);
    const valuesData = Object.values(entradas);

    return(
        //Si hay un error, se renderiza el componente <Error />, de lo contrario se renderiza el componente <IngresosMes/>
        error ? <Error /> :
        <div className="contenido center">
            <h2>{document.title}</h2>
            <div className="grafico">
                <BarsChart labels={keysData} data={valuesData}/>
            </div>
            
        </div>
    )
}

export default IngresosMes;