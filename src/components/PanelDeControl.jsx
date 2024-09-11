import React from 'react';

const PanelDeControl = ({ onMostrarFormulario }) => {
  const manejarClicMostrarFormulario = () => {
    onMostrarFormulario();
  };

  return (
    <div>
      <h2>Panel de Control</h2>
      <button onClick={manejarClicMostrarFormulario}>Ingresar Datos</button>
    </div>
  );
};

export default PanelDeControl;