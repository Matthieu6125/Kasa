import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logementsData from '../../Data/ListeLogements.json';
import './CardLogement.scss';

function FicheLogement() {
    const [LogementList, setLogementList] = useState([]);

    useEffect(() => {
        // Charger les données depuis le fichier JSON
        setLogementList(logementsData);
    }, []);

    return (
        <div className="card-container">
            {LogementList.map((logement) => 
                <Link key={logement.id} className="card-logement" to={`/pages/FicheLogement/${logement.id}`}>
                    {logement.cover && <img className="card-image" src={logement.cover} alt={logement.title} />}
                    {logement.title && <h2 className="location-titre">{logement.title}</h2>}
                </Link>
            )}
        </div>
    )
}

export default FicheLogement