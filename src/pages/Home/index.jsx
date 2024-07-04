import React from "react"
import Banner from "../../composants/Banner"
import FicheLogement from "../../composants/CardLogements"
import Title from "../../composants/title"
import BandeauTitre from '../../assets/images/FondTitreHome/BandeauTitre.png';

function Home() {
    return (
        <main>
            <Banner title={<Title />} imageSrc={BandeauTitre} />
            <FicheLogement />
        </main>
    )
  }

  export default Home 