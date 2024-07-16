import { useParams } from 'react-router-dom';
import React from 'react';
import ListeLogements from '../../Data/ListeLogements.json';
import Rating from '../Rating';
import Colapse from '../Colapses';
import './InformationLogement.scss';
import Error from '../Error';
 
function InformationLogement() {
  const { id } = useParams();
  const DataForId = ListeLogements.find(item => item.id === id);

  if (!DataForId) {
    return (<Error />); 
  }

  const TitreOfId = DataForId.title;
  const TagsData = DataForId.tags;
  const RatingId = DataForId.rating;
 
  return (
    <div className="container-main">
      <div className="container-titre">
        <div className="titre-tags">
          <h1 className="titre-logement">{TitreOfId}</h1>
          <p className="localisation">{DataForId.location}</p>
          <div className="container-tags">
            {TagsData.map((Tag, index) => (
              <div className="tags-div" key={index}>
                <p className="tags-texte">{Tag}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="name-rating">
          <div className="name-div">
            <p className="name">{DataForId.host.name}</p>
            <img className="name-photo" src={DataForId.host.picture} alt={`Votre hôte`} />
          </div>
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