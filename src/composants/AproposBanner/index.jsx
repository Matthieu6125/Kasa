import BannerApropos from '../../assets/images/ImageBannerApropos/BannerApropos.png'
import React from "react";
import './AproposBanner.scss'; // Import du fichier SCSS

function AproposBandeau() {
  return (
    <div className="bandeauApropos">
      <img src={BannerApropos} alt="Une montagne" />
    </div>
  );
}

export default AproposBandeau;