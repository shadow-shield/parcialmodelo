import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title);

const GraficoRentabilidad = ({ datos }) => {
  const datosGrafico = {
    labels: datos.map(punto => punto.año),
    datasets: [
      {
        label: 'Rentabilidad Neta',
        data: datos.map(punto => punto.rentabilidadNeta),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Retorno de la Inversión (ROI)',
        data: datos.map(punto => punto.roi),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Rentabilidad del Proyecto</h2>
      <Line data={datosGrafico} />
    </div>
  );
};

export default GraficoRentabilidad;