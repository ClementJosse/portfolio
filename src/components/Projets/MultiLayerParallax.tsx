import React, { useEffect, useRef } from 'react';
import './MultiLayerParallax.css';
import trianglesProche from '../../assets/background-projet/proche.png';
import trianglesMoitie from '../../assets/background-projet/moitié.png';
import trianglesLoin from '../../assets/background-projet/loin.png';

const MultiLayerParallax = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = window.pageYOffset;
        const containerTop = containerRef.current.offsetTop;
        const containerHeight = containerRef.current.offsetHeight;

        const scrollFactor = (scrollPosition - containerTop) / containerHeight;

        // Parallax effect
        const loin = containerRef.current.querySelector('.parallax-loin');
        const moitie = containerRef.current.querySelector('.parallax-moitie');
        const proche = containerRef.current.querySelector('.parallax-proche');

        loin.style.transform = `translateY(${scrollFactor * -0.5 * 100}px)`;
        moitie.style.transform = `translateY(${scrollFactor * -5 * 100}px)`;
        proche.style.transform = `translateY(${scrollFactor * -15 * 100}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container" ref={containerRef}>
      <img src={trianglesLoin} className="parallax-layer parallax-loin" alt="Triangles Loin" />
      <img src={trianglesMoitie} className="parallax-layer parallax-moitie" alt="Triangles Moitié" />
      <img src={trianglesProche} className="parallax-layer parallax-proche" alt="Triangles Proche" />
    </div>
  );
};

export default MultiLayerParallax;
