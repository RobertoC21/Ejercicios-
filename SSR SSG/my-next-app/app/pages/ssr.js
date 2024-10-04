// pages/ssr.js
import React from 'react';

// Este es el componente de la página
function SSRPage({ data }) {
  return (
    <div>
      <h1>Datos obtenidos en el servidor</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// `getServerSideProps` se ejecuta en el servidor en cada solicitud
export async function getServerSideProps() {
  // Lógica para obtener datos, podría ser una llamada a una API o base de datos
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

  return {
    props: {
      data, // Estos datos se pasan como props a la página
    },
  };
}

export default SSRPage;
