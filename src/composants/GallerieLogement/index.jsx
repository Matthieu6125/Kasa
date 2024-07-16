import React, { useState } from 'react';
import ListeLogements from '../../Data/ListeLogements.json';
import { useParams } from 'react-router-dom';
import './GallerieLogement.scss';
import Error from '../Error';

const Gallery = () => {
  const { id } = useParams();
  const DataForId = ListeLogements.find(item => item.id === id);
  const Images = DataForId.pictures;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  if (!DataForId) {
    return null;
  }
  const nextImage = () => {
    setCurrentImageIndex((nextIndex) => (nextIndex === Images.length - 1 ? 0 : nextIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? Images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="gallery-container">
      {Images.length > 1 && (
        <button className="image-button" onClick={prevImage}>&lt;</button>
    )}
      <div className="image-wrapper">
        <img className="image" src={Images[currentImageIndex]} alt={`Gallerie ${currentImageIndex + 1}`} />
      </div>
      {Images.length > 1 && (
      <p className='index-image'> {currentImageIndex + 1} / {Images.length} </p>
      )}
      {Images.length > 1 && (
        <button className="image-button" onClick={nextImage}>&gt;</button>
      )}
    </div>
  );
};

export default Gallery;