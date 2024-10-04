// src/components/MemoizedButton.js
import React from 'react';

const MemoizedButton = React.memo(({ handleClick }) => (
  <button onClick={handleClick}>Incrementar Contador (Memorizado)</button>
));

export default MemoizedButton;
