import React, { useState } from 'react';
import ListeLogements from '../../Data/ListeLogements.json';
import { useParams } from 'react-router-dom';
import './GallerieLogement.scss';

const Gallery = () => {
  const { id } = useParams();
  const DataForId = ListeLogements.find(item => item.id === id);
  const Images = DataForId.pictures;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((nextIndex) => (nextIndex === Images.length - 1 ? 0 : nextIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? Images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="gallery-container">
      <button className="image-button" onClick={prevImage}>&lt;</button>
      <div className="image-wrapper">
        <img className="image" src={Images[currentImageIndex]} alt={`Gallerie ${currentImageIndex + 1}`} />
      </div>
      <button className="image-button" onClick={nextImage}>&gt;</button>
    </div>
  );
};

export default Gallery;