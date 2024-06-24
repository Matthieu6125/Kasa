import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const SecuriteContainer = styled.div`
  width: 1023px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const SecuriteHeader = styled.div`
  border-radius: 5px;
  display: flex;
  height : 52px;
  width : 100%;
  font-weight : 700;
  font-size : 18px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color : white;
  background-color: #FF6060;
  padding : 10px;
`;

const SecuriteText = styled.div`
  margin-top: 10px;
  padding-left : 10px;
  display: ${props => (props.isVisible ? 'block' : 'none')};
`;

const Securite = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SecuriteContainer>
      <SecuriteHeader onClick={toggleVisibility}>
        <span>Fiabilité</span>
        <FontAwesomeIcon icon={isVisible ? faChevronUp : faChevronDown} />
      </SecuriteHeader>
      <SecuriteText isVisible={isVisible}>
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. 
      </SecuriteText>
    </SecuriteContainer>
  );
};

export default Securite;