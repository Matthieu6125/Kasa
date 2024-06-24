import React from "react";
import KasaLogoFooter from "../KasaLogoFooter";
import './Footer.scss';

function Footer() {
    return (
      <div className="div-footer">
        <KasaLogoFooter />
        <p className="copyright">© 2020 Kasa. All rights reserved</p>
      </div>
    )
}

export default Footer;