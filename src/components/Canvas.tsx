import React, { ReactElement, useEffect } from 'react';
import { renderCanvas } from './renderCanvas';
import './Canvas.css'; 
export default function Canvas(): ReactElement {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div className="canvas-container">
      <canvas className="canvas" id="canvas"></canvas>
    </div>
  );
}
