import { Bar } from "react-chartjs-2";

import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const BarsChart = ({ labels, data }) => {

    //Máximo limite en el eje Y del grafico
    const maxValue = Math.max(...data) + 20;

    //Configuración del grafico
    const myOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: true,
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                min: 0,
                max: maxValue
            },
            x: {
                ticks: {color: '#6e6e6e'}
            }
        }
    };

    //Datos con los que se dibujará el grafico, estos datos vienen en un array recibido por props
    const myData = {
        labels: labels,
        datasets: [
            {
                label: document.title,
                data: data,
                backgroundColor: '#70CFF5'
            },
        ]
    };

    return(
        <Bar data={myData} options={myOptions}/>
    )
}

export default BarsChart;