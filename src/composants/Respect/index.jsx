import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const RespectContainer = styled.div`
  width: 1023px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const RespectHeader = styled.div`
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

const RespectText = styled.p`
  margin-top: 10px;
  padding-left : 10px;
  display: ${props => (props.isVisible ? 'block' : 'none')};
`;

const Respect = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <RespectContainer>
      <RespectHeader onClick={toggleVisibility}>
        <span>Respect</span>
        <FontAwesomeIcon icon={isVisible ? faChevronUp : faChevronDown} />
      </RespectHeader>
      <RespectText isVisible={isVisible}>
      La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.
      </RespectText>
    </RespectContainer>
  );
};

export default Respect;