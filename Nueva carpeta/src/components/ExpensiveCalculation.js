// src/components/ExpensiveCalculation.js
import React from 'react';

const ExpensiveCalculation = ({ num }) => {
  const result = num * 1000; // Simulación de una operación costosa

  return (
    <div>
      <h2>Resultado de cálculo: {result}</h2>
    </div>
  );
};

export default ExpensiveCalculation;
