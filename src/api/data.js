import axios from 'axios'

const API = 'https://pruebas.tracecar.co/data/'

export const getEntradasMensualesRequest = () => axios.get(`${API}/entradasMensuales.php`);
export const getVentasMensualesRequest = () => axios.get(`${API}/ventasMensuales.php`);
export const getVehiculosRequest = () => axios.get(`${API}/datosVehiculos.php`);