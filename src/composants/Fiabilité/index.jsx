import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FiabiliteContainer = styled.div`
  width: 1023px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const FiabiliteHeader = styled.div`
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

const FiabiliteText = styled.p`
  margin-top: 10px;
  padding-left : 10px;
  display: ${props => (props.isVisible ? 'block' : 'none')};
`;

const Fiabilite = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <FiabiliteContainer>
      <FiabiliteHeader onClick={toggleVisibility}>
        <span>Fiabilité</span>
        <FontAwesomeIcon icon={isVisible ? faChevronUp : faChevronDown} />
      </FiabiliteHeader>
      <FiabiliteText isVisible={isVisible}>
        Les annonces postées su Kasa garantissent une fiabilité totale. les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
      </FiabiliteText>
    </FiabiliteContainer>
  );
};

export default Fiabilite;