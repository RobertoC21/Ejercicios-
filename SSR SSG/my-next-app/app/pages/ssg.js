// pages/ssg.js
import React from 'react';

function SSGPage({ data }) {
  return (
    <div>
      <h1>Datos obtenidos estáticamente</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// `getStaticProps` se ejecuta en el momento de construcción
export async function getStaticProps() {
  // Lógica para obtener datos
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default SSGPage;
