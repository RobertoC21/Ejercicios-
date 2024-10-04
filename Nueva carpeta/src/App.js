// src/App.js
import React, { Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, incrementNum } from './store/slices/counterSlice';
import ExpensiveCalculation from './components/ExpensiveCalculation';
import MemoizedButton from './components/MemoizedButton';

// Usar Lazy para cargar el componente ItemList solo cuando sea necesario
const ItemList = React.lazy(() => import('./components/ItemList'));

function App() {
  const dispatch = useDispatch();
  // Acceder a los estados del contador y lista de items
  const count = useSelector((state) => state.counter.count);
  const num = useSelector((state) => state.counter.num);
  const items = useSelector((state) => state.items.items);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contador: {count}</h1>
      <button onClick={() => dispatch(incrementCount())}>Incrementar Contador</button>

      {/* Usar Suspense para cargar el componente ItemList de forma perezosa */}
      <Suspense fallback={<div>Cargando lista...</div>}>
        <ItemList items={items} />
      </Suspense>

      {/* Componente para cálculos costosos */}
      <ExpensiveCalculation num={num} />
      <button onClick={() => dispatch(incrementNum())}>Cambiar número</button>

      {/* Botón memorizado para incrementar el contador */}
      <MemoizedButton handleClick={() => dispatch(incrementCount())} />
    </div>
  );
}

export default App;
