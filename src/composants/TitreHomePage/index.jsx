import BandeauTitre from '../../assets/images/FondTitreHome/BandeauTitre.png';
import './TitreHomePage.scss'; // Importez votre fichier SCSS ici

function HomeBandeau() {
    return (
        <div className="bandeau">
            <img src={BandeauTitre} alt="Image d'un bord de côte" className="image" />
            <h1 className="home-titre">Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default HomeBandeau;