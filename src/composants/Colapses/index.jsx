import React, { useState } from 'react';
import './Colapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Colapse = ({ header, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  const ChangeAffichage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="colapse-container">
      <div className="colapse-header" onClick={ChangeAffichage}>
        <span>{header}</span>
        <FontAwesomeIcon icon={isVisible ? faChevronDown : faChevronUp } />
      </div>
      <div className={`colapse-text ${isVisible ? 'visible' : 'hidden'}`}>
        {Array.isArray(content) ? (
          content.map((item, index) => (
            <p className="equipement-ligne" key={index}>{item}</p>
          ))
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default Colapse;