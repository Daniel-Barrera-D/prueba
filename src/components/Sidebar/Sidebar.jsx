import { NavLink } from "react-router-dom"
import './Sidebar.css'
import * as FaIcons from 'react-icons/fa'

const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul>
                <NavLink className='link' to='/ingresos-mes'><FaIcons.FaChartLine/>Ingresos por mes</NavLink>
            </ul>
            <ul>
                <NavLink className='link' to='/ventas-mes'><FaIcons.FaChartBar/>Ventas por mes</NavLink>
            </ul>
            <ul>
                <NavLink className='link' to='/vehiculos'><FaIcons.FaCar/>Vehiculos</NavLink>
            </ul>
        </div>
    )
}

export default Sidebar;