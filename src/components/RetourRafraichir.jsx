import React from 'react'
import fleche from '../images/retour_rafraichir/fleche-arriere.png'
import rafraichir from '../images/retour_rafraichir/refresh.png'
import { useHistory } from "react-router-dom";
export default function RetourRafraichir() {
    let history = useHistory();
    function refreshPage(){
        window.location.reload(false)
    }

    return (
        <div className="retour_rafraichir">
            <div className="fleche_retour">
                <img onClick={history.goBack} src={fleche} alt="fleche_retour"/>
                <p>Retour</p>
            </div>
            <div className="rafraichir">
                <img onClick={refreshPage} src={rafraichir} alt="fleche_retour"/>
                <p>Rafraîchir</p>
            </div>
        </div>

    )
}
