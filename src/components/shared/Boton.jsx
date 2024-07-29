import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Boton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/AllCourses'); // Asegúrate de que la ruta coincide con la definida en App.jsx
  };

  return (
    <div className='flex justify-center'>
      <button
        className='btn btn-primary bg-red-500 font-bold py-2 px-7 rounded-lg shadow-md
        hover:bg-gradient-to-r hover:scale-105 hover:from-red-500 hover:to-red-400
        dark:hover:from-gray-700 dark:hover:to-gray-600 transition duration-300'
        onClick={handleClick}
      >
        Ver más
      </button>
    </div>
  );
};
