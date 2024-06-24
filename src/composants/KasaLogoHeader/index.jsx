import React from 'react';
import K from '../../assets/images/KasaHeader/K.svg';
import A from '../../assets/images/KasaHeader/A.svg';
import S from '../../assets/images/KasaHeader/S.svg';
import Group from '../../assets/images/KasaHeader/Group.svg';
import './KasaLogoHeader.scss'

function KasaLogo() {
    return (
        <div className="logoHeader" aria-label="Logo Kasa">
            <img className="lettre" src={K} alt="K" />
            <img className="lettre" src={Group} alt="A" />
            <img className="lettre" src={S} alt="S" />
            <img className="lettre" src={A} alt="A" />
        </div>
    )
  }

  export default KasaLogo