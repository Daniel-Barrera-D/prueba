import * as FaIcons from 'react-icons/fa'
import '../assets/estilos.css'

const Error = () => {
    return(
        <div className='contenedor-error'>
            <FaIcons.FaRegTimesCircle/>
            <p>Ha ocurrido un error al obtener los datos</p>
        </div>
    )
}

export default Error;