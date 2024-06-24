import React from "react"
import Fiabilite from "../../composants/Fiabilité"
import Securite from "../../composants/Securite"
import Service from "../../composants/Service"
import Respect from "../../composants/Respect"
import AproposBandeau from "../../composants/AproposBanner"


function Apropos() {
    return (
         <main>
            <AproposBandeau />
            <Fiabilite />
            <Respect />
            <Service />
            <Securite />
        </main>
    )
  }

  export default Apropos