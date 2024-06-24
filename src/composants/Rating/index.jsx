import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Rating.scss'; // Importez votre fichier SCSS

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} className={`star ${i <= rating ? 'active' : ''}`} />);
  }

  return <div className="StarsContainer">{stars}</div>;
};

export default Rating;