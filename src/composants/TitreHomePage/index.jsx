import BandeauTitre from '../../assets/images/FondTitreHome/BandeauTitre.png';
import './TitreHomePage.scss';
import useWindowWidth from './HookTaillePage'

function HomeBandeau() {
    
      const width = useWindowWidth();

    return (
        <div className="bandeau">
            <img src={BandeauTitre} alt="Un bord de côte" className="imageBandeau" />
            <h1 className="home-titre">
                {width <= 600 ? (
                <>Chez vous,<br /> partout et ailleurs</>
                ) : (
                <>Chez vous, partout et ailleurs</>
                )}
            </h1>  
      </div>
    );
}

export default HomeBandeau; 