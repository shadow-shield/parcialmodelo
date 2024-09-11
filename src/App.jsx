// src/App.jsx
import React, { useState } from 'react';
import GraficoRentabilidad from './components/GraficoRentabilidad';
import PanelDeControl from './components/PanelDeControl';
import FormularioDatos from './components/FormularioDatos';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
); // Importaciones correctas

const App = () => {
  const [datos, setDatos] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Simula los datos de rentabilidad en función de los datos ingresados
  const simularDatos = (datosIngresados) => {
    let datosSimulados = [];
    const años = 10; // Duración en años
    const { 
      precioCarbónLocal, 
      precioCarbónInternacional, 
      costoProducción, 
      inversiónInicial, 
      costosOperación, 
      demandaProyectada, 
      tasaInterés, 
      inflación, 
      tasaCambio, 
      capacidadInstalada 
    } = datosIngresados;

    for (let año = 1; año <= años; año++) {
      // Calcula los ingresos y costos
      const ingresosTotales = demandaProyectada * precioCarbónInternacional * (1 + inflación / 100);
      const costoTotal = costoProducción + costosOperación + (inversiónInicial / años);
      const rentabilidadNeta = ingresosTotales - costoTotal;
      const roi = (rentabilidadNeta / inversiónInicial) * 100;

      datosSimulados.push({ 
        año, 
        rentabilidadNeta,
        roi 
      });
    }
    
    setDatos(datosSimulados);
    setMostrarFormulario(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Simulación de Rentabilidad de Alternativas</h1>
      {!mostrarFormulario && (
        <PanelDeControl onMostrarFormulario={() => setMostrarFormulario(true)} />
      )}
      {mostrarFormulario && (
        <FormularioDatos onSimular={simularDatos} />
      )}
      {datos.length > 0 && <GraficoRentabilidad datos={datos} />}
    </div>
  );
};

export default App;