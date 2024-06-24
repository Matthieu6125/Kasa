import React from 'react';
import K from '../../assets/images/KasaFooter/K.svg';
import A from '../../assets/images/KasaFooter/A.svg';
import S from '../../assets/images/KasaFooter/S.svg';
import Group from '../../assets/images/KasaFooter/Group.svg';
import './KasaLogoFooter.scss';

function KasaLogoFooter() {
    return (
        <div className="logo" aria-label="Logo Kasa">
            <img className="lettre" src={K} alt="K" />
            <img className="lettre" src={Group} alt="A" />
            <img className="lettre" src={S} alt="S" />
            <img className="lettre" src={A} alt="A" />
        </div>
    )
}

export default KasaLogoFooter;