import BannerApropos from '../../assets/images/ImageBannerApropos/BannerApropos.png'
import styled from 'styled-components'
import React from "react";
import './AproposBanner.scss'; // Import du fichier SCSS

function AproposBandeau() {
  return (
    <div className="bandeau">
      <img src={BannerApropos} alt="Image d'une montagne" />
    </div>
  );
}

export default AproposBandeau;