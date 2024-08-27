import React from 'react';
import Canvas from './components/Canvas.tsx';
import HomeInfos from './components/HomeInfos.tsx';
function App() {
  return (
    <div className="main-page">
      <div className="canvas-container">
        <Canvas className="canvas"/>
        <HomeInfos className="home-infos"/>
      </div>
    </div>
  );
}

export default App;