import React from 'react'
import { Link } from 'react-router-dom'
import fleche from '../images/retour_rafraichir/fleche-arriere.png'
import rafraichir from '../images/retour_rafraichir/refresh.png'
import plus from '../images/retour_rafraichir/plus.png'
import { useHistory } from "react-router-dom";
export default function RetourRafraichirNouveau(props) {
    let history = useHistory()
    function refreshPage(){
        window.location.reload(false)
    }

    return (
        <div className="retour_rafraichir_nouveau">
            <div className="fleche_retour">
                <img onClick={history.goBack} src={fleche} alt="fleche_retour"/>
                <p>Retour</p>
            </div>
            <div className="rafraichir">
                <img onClick={refreshPage} src={rafraichir} alt="fleche_retour"/>
                <p>Rafraîchir</p>
            </div>
            <div className="nouveau">
                <Link to={props.path}><img onClick={null} src={plus} alt="fleche_retour"/></Link>
                <p>Nouveau ticket</p>
            </div>
        </div>

    )
}
