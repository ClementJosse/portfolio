import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const CustomTooltip = ({ title, children }) => {
  return (
    <Tooltip
      title={title}
      componentsProps={{
        tooltip: {
          sx: {
            fontSize: '15px',         // Taille de la police
            backgroundColor: 'rgba(0, 0, 0, 0.5)',    // Couleur de fond
            color: '#D4F0FA',              // Couleur du texte
            padding: '10px 15px',       // Espacement interne
            borderRadius: '50px',        // Arrondir les coins
          },
        },
        arrow: {
          sx: {
            color: 'rgba(0, 0, 0, 0.5)',              // Couleur de la flèche
          },
        },
      }}
      arrow // Pour afficher la flèche du tooltip
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
