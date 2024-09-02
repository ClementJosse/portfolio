import React, { useEffect, useRef } from 'react';
import './MultiLayerParallax.css';

const MultiLayerParallax = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = window.pageYOffset;
        const containerTop = containerRef.current.offsetTop;
        const containerHeight = containerRef.current.offsetHeight;

        const scrollFactor = (scrollPosition - containerTop) / containerHeight;

        // Calculate screen size factor based on a reference width of 1920px
        const screenSizeFactor = (((window.innerHeight/window.innerWidth)^2)/2)+0.25;

        // Parallax effect with screen size adjustment
        const loin = containerRef.current.querySelector('.parallax-loin');
        const moitie = containerRef.current.querySelector('.parallax-moitie');
        const proche = containerRef.current.querySelector('.parallax-proche');

        loin.style.backgroundPositionY = `${(scrollFactor * -0.5 * 100) * screenSizeFactor}%`;
        moitie.style.backgroundPositionY = `${(scrollFactor * -1.5 * 100) * screenSizeFactor}%`;
        proche.style.backgroundPositionY = `${(scrollFactor * -3 * 100) * screenSizeFactor}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const commonStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'top left',
  };

  return (
    <div className="parallax-container" ref={containerRef}>
      <div className="parallax-loin" style={commonStyles}></div>
      <div className="parallax-moitie" style={commonStyles}></div>
      <div className="parallax-proche" style={commonStyles}></div>
    </div>
  );
};

export default MultiLayerParallax;
