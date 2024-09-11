import React, { useState } from 'react';

const FormularioDatos = ({ onSimular }) => {
  const [precioCarbónLocal, setPrecioCarbónLocal] = useState('');
  const [precioCarbónInternacional, setPrecioCarbónInternacional] = useState('');
  const [costoProducción, setCostoProducción] = useState('');
  const [inversiónInicial, setInversiónInicial] = useState('');
  const [costosOperación, setCostosOperación] = useState('');
  const [demandaProyectada, setDemandaProyectada] = useState('');
  const [tasaInterés, setTasaInterés] = useState('');
  const [inflación, setInflación] = useState('');
  const [tasaCambio, setTasaCambio] = useState('');
  const [capacidadInstalada, setCapacidadInstalada] = useState('');

  const manejarEnvioFormulario = (e) => {
    e.preventDefault();
    onSimular({
      precioCarbónLocal: parseFloat(precioCarbónLocal),
      precioCarbónInternacional: parseFloat(precioCarbónInternacional),
      costoProducción: parseFloat(costoProducción),
      inversiónInicial: parseFloat(inversiónInicial),
      costosOperación: parseFloat(costosOperación),
      demandaProyectada: parseFloat(demandaProyectada),
      tasaInterés: parseFloat(tasaInterés),
      inflación: parseFloat(inflación),
      tasaCambio: parseFloat(tasaCambio),
      capacidadInstalada: parseFloat(capacidadInstalada),
    });
  };

  return (
    <div>
      <h2>Ingresar Datos</h2>
      <form onSubmit={manejarEnvioFormulario}>
        <div>
          <label>Precio del Carbón Local (USD/tonelada):</label>
          <input
            type="number"
            value={precioCarbónLocal}
            onChange={(e) => setPrecioCarbónLocal(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Precio del Carbón Internacional (USD/tonelada):</label>
          <input
            type="number"
            value={precioCarbónInternacional}
            onChange={(e) => setPrecioCarbónInternacional(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Costos de Producción y Transporte (USD):</label>
          <input
            type="number"
            value={costoProducción}
            onChange={(e) => setCostoProducción(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Inversión Inicial (USD):</label>
          <input
            type="number"
            value={inversiónInicial}
            onChange={(e) => setInversiónInicial(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Costos de Operación (USD):</label>
          <input
            type="number"
            value={costosOperación}
            onChange={(e) => setCostosOperación(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Demanda Proyectada (toneladas):</label>
          <input
            type="number"
            value={demandaProyectada}
            onChange={(e) => setDemandaProyectada(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tasa de Interés (%) :</label>
          <input
            type="number"
            step="0.01"
            value={tasaInterés}
            onChange={(e) => setTasaInterés(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Inflación (%) :</label>
          <input
            type="number"
            step="0.01"
            value={inflación}
            onChange={(e) => setInflación(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tasa de Cambio (USD/moneda local):</label>
          <input
            type="number"
            step="0.01"
            value={tasaCambio}
            onChange={(e) => setTasaCambio(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Capacidad Instalada (toneladas/año):</label>
          <input
            type="number"
            value={capacidadInstalada}
            onChange={(e) => setCapacidadInstalada(e.target.value)}
            required
          />
        </div>
        <button type="submit">Simular</button>
      </form>
    </div>
  );
};

export default FormularioDatos;