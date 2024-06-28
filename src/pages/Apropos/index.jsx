import React from "react"
import AproposBandeau from "../../composants/AproposBanner"
import './Apropos.scss'
import Colapse from "../../composants/Colapses"

function Apropos() {
    return (
         <main>
            <AproposBandeau />
            <div className="ContainerColapse">
                <Colapse header="Fiabilité" content="Les annonces postées su Kasa garantissent une fiabilité totale. les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
                <Colapse header="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme." />
                <Colapse header="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme." />
                <Colapse header="Securité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </main>
    )
  }

  export default Apropos