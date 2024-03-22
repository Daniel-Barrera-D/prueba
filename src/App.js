import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import VentasMes from './pages/VentasMes';
import IngresosMes from './pages/IngresosMes';
import Vehiculos from './pages/Vehiculos'
import { EntradasProvider } from './context/EntradasMensualesContext';
import { VentasProvider } from './context/VentasMensualesContext';
import { VehiculosProvider } from './context/DatosVehiculosContext';

function App() {
  return (
    <EntradasProvider>
      <VentasProvider>
        <VehiculosProvider>
          <div className="App">
            <Router>
              <div className='flex'>
                <Sidebar />
                <Routes>
                  <Route path='/' element={ <IngresosMes />}/>
                  <Route path='/ingresos-mes' element={ <IngresosMes />}/>
                  <Route path='/ventas-mes' element={ <VentasMes /> }/>
                  <Route path='/vehiculos' element={ <Vehiculos />}/>
                </Routes>
              </div>
            </Router>
          </div>
        </VehiculosProvider>
      </VentasProvider>
    </EntradasProvider>
  );
}

export default App;
