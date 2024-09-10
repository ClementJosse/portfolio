import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';

const CustomTooltip = ({ title, children }) => {
  const [mousePosition, setMousePosition] = useState({ top: 0, left: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      top: event.clientY + 10, // Décalage vertical
      left: event.clientX + 10, // Décalage horizontal
    });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <Tooltip
        title={title}
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: '15px', // Taille de la police
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Couleur de fond
              color: '#D4F0FA', // Couleur du texte
              padding: '10px 15px', // Espacement interne
              borderRadius: '50px', // Arrondir les coins
            },
          },
          arrow: {
            sx: {
              color: 'rgba(0, 0, 0, 0.5)', // Couleur de la flèche
            },
          },
        }}
        arrow // Pour afficher la flèche du tooltip
        PopperProps={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 10], // Décalage par rapport à la souris
              },
            },
            {
              name: 'preventOverflow',
              options: {
                boundary: 'viewport',
              },
            },
          ],
          anchorEl: {
            getBoundingClientRect: () => ({
              top: mousePosition.top,
              left: mousePosition.left,
              bottom: mousePosition.top,
              right: mousePosition.left,
              width: 0,
              height: 0,
            }),
          },
        }}
      >
        {children}
      </Tooltip>
    </div>
  );
};

export default CustomTooltip;
