import React from 'react';
import Canvas from './components/Canvas.tsx';
import HomeInfos from './components/HomeInfos.tsx';

function App() {
  return (
    <div className="main-page">
      <div className="home-container">
        <Canvas className="canvas"/>
        <HomeInfos className="HomeInfos"/>
      </div>
    </div>
  );
}

export default App;