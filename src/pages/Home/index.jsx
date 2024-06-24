import React from "react"
import HomeBandeau from "../../composants/TitreHomePage"
import FicheLogement from "../../composants/CardLogements"

function Home() {
    return (
        <main>
            <HomeBandeau /><FicheLogement />
        </main>
    )
  }

  export default Home