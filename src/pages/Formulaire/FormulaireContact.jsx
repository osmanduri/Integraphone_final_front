import React, { useState } from 'react'
import logo from '../../images/log/symbole.png'
import FormulaireOk from '../../components/FormulaireOk'
import RetourRafraichir from '../../components/RetourRafraichir'
export default function FormulaireContact() {
    const [formulaireMembreOk, setFormulaireMembreOk] = useState(true)

    const handleSubmit = (e) => {

        setFormulaireMembreOk(false)
    }
    return (
        <>
        <RetourRafraichir path="/"/>
        {
            formulaireMembreOk ? (
                <div className="devis">
                <div className="devis_inside">
                    <div className="devis_logo">
                        <img src={logo} alt="logo"/>
                    </div>          
                    <p>Formulaire de contact</p>
                    <form type="submit" onSubmit={handleSubmit}>
                    <div className="devis_inside_input">
                        <input type="text" placeholder="Nom"/>
                        <input type="text" placeholder="Prénom"/>
                        <input type="text" placeholder="Numéro de téléphone"/>   
                        <input type="text" placeholder="Mail"/>
                    </div>
                    <div className="devis_textarea">
                    <textarea type="text" rows="10" placeholder="Commentaire"/>
                    </div>
                    <div className="devis_bouton_envoyer">
                        <button type="submit">Envoyer</button>  
                    </div>
                    </form>                         
                </div>
    
            </div>
            ) : (
                <FormulaireOk titre="Formulaire de Contact" texte="Votre demande est bien prise en compte et un conseillé vous contactera dans les plus bref délais."/>
            )
        }

        </>
    )
}
