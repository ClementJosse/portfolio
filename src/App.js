import React from 'react';
import Canvas from './components/Canvas.tsx';
import HomeInfos from './components/HomeInfos.tsx';
function App() {
  return (
    <div className="canvas-container">
      <HomeInfos className="home-infos"/>
      <Canvas className="canvas"/>
    </div>
  );
}

export default App;