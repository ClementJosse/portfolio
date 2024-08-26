import React, { ReactElement, useEffect } from 'react';
import { renderCanvas } from './renderCanvas';

export default function Hero(): ReactElement {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div>
      <canvas className="tailed cursor" id="canvas"></canvas>
    </div>
  );
}
