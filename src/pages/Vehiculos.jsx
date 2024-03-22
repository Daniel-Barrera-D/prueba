/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useVehiculos } from "../context/DatosVehiculosContext";
import DataTable, { createTheme } from "react-data-table-component";
import useSEO from "../hooks/useSEO";
import Error from "./Error";
import '../assets/estilos.css'

const Vehiculos = () => {

    const { getVehiculos, vehiculos, error } = useVehiculos();

    useEffect(() => {
        getVehiculos();
    }, []);

    useSEO({
        title: "Información vehiculos"
    })

    //Para generar la tabla, se usó la librería 'react-data-table-component' 

    //Se definen las columnas que tendrá la tabla
    const columns = [
        {
            name: "Placa",
            //criterio de selección para mostrar la información de la columna
            //En este caso será la propiedad 'placa' extraida de la respuesta que se retorna al hacer Get al endpoint correspondiente 
            selector: row => row.placa,
            center: "true"
        },
        {
            name: "Aseguradora",
            selector: row => row.aseguradora,
            sortable: true,
            center: "true"
        },
        {
            name: "Mano de obra",
            selector: row => row.valorFacturadoMO,
            center: "true"
        },
        {
            name: "Repuestos",
            selector: row => row.valorFacturadoRptos,
            center: "true"
        }
    ]

    createTheme('solarized', {
        text: {
          primary: '#000000',
          secondary: '#030303',
        },
        background: {
          default: '#B9E7F8',
        },
        context: {
          background: '#cb4b16',
          text: '#d41414',
        },
        divider: {
          default: '#CFEFFC',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'light');

    return (
        //Si hay un error, se renderiza el componente <Error />, de lo contrario se renderiza el componente <Vehiculos/>
        error ? <Error/> :
        <div className="contenido">
            <h2>{document.title}</h2>
            <DataTable
                responsive
                columns={columns}
                data={vehiculos}
                pagination
                fixedHeader
                theme="solarized"
                highlightOnHover
                conditionalRowStyles={[
                    {
                        when: row => vehiculos.indexOf(row) % 2 === 0,
                        style: {
                            backgroundColor: "#A0DFF8"
                        }
                    }
                ]}
            />
        </div>
    )
}

export default Vehiculos;