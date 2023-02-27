import React from 'react'
import logo from '../images/log/symbole.png'
export default function FormulaireOk(props) {
    return (
        <div className="formulaire_ok">
        <div className="formulaire_ok_inside">
            <div className="formulaire_ok_logo_integraphone">
                <img src={logo} alt="formulaire_logo_ok"/>
            </div>
            <h1>{props.titre}</h1>
            <div className="formulaire_ok_logo">
                <img src={props.img} alt="formulaire_logo_ok"/>
            </div>
            <p>{props.texte}</p><br/><p>un email détaillé a été envoyé à {props.email}</p>         
        </div>
        </div>

    )
}
