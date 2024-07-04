import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';
import useWindowWidth from '../TitreHomePage/HookTaillePage'

function Error() {

    const width = useWindowWidth();

  return (
    <div className="error-wrapper">
      <h1 className="error-404">404</h1>
      <h2 className="error-subtitle">
        
        {width <= 600 ? (
                <>Oups la page que <br /> vous demandez n’existe pas.</>
                ) : (
                <>Oups la page que vous demandez n’existe pas.</>
                )}
      </h2>
      <Link className="link-home" to={`/`}>
        Retourner sur la page d'accueil.
      </Link>
    </div>
  );
}

export default Error;