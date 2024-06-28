import { useParams } from 'react-router-dom';
import React from 'react';
import ListeLogements from '../../Data/ListeLogements.json';
import Rating from '../Rating';
import Colapse from '../Colapses';
import './InformationLogement.scss';
 
function InformationLogement() {
  const { id } = useParams();
  const DataForId = ListeLogements.find(item => item.id === id);
  const TitreOfId = DataForId.title;
  const TagsData = DataForId.tags;
  const RatingId = DataForId.rating;
 
  return (
    <div className="container-main">
      <div className="container-titre">
  <div className="item1">
    <h1 className="titre-logement">{TitreOfId}</h1>
    <p className="localisation">{DataForId.location}</p>
  </div>

  <div className="item2">
    <div className="name-div">
      <p className="name">{DataForId.host.name}</p>
      <img className="name-photo" src={DataForId.host.picture} alt={`Votre hôte`} />
    </div>
  </div>

  <div className="item3">
    <div className="container-tags">
      {TagsData.map((Tag, index) => (
        <div className="tags-div" key={index}>
          <p className="tags-texte">{Tag}</p>
        </div>
      ))}
    </div>
  </div>
  <div className="item4">
  <Rating rating={RatingId} />
  </div>
</div>
      <div className="colapses">
        <Colapse content={DataForId.description} header="Description" />
        <Colapse content={DataForId.equipments} header="Equipements" />
      </div>
    </div>
  ); 
}

export default InformationLogement;