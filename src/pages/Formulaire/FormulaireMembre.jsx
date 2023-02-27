import React, { useState } from 'react'
import logo from '../../images/log/symbole.png'
import FormulaireOk from '../../components/FormulaireOk'
import RetourRafraichir from '../../components/RetourRafraichir'
export default function FormulaireMembre() {
    const [formulaireMembreOk, setFormulaireMembreOk] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        
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
                    <p>Formulaire Membre</p>
                    <form type="submit" onSubmit={handleSubmit}>
                    <div className="devis_inside_input">
                        <input type="text" placeholder="Nom"/>
                        <input type="text" placeholder="Prénom"/>
                        <input type="text" placeholder="Numéro de téléphone"/>
                        <input type="text" placeholder="Entreprise"/>      
                        <input type="text" placeholder="Mail"/>
                        <input type="text" placeholder="Mot de passe"/>
                        <input type="text" placeholder="Confirmation du mot de passe"/>
                    </div>
                    <div className="devis_bouton_envoyer">
                        <button type="submit">Envoyer</button>  
                    </div>
                    </form>                         
                </div>
    
            </div>
            ) : (
                <FormulaireOk titre="Formulaire Membre" texte="Votre demande de Membre va être étudié dans le plus bref délais "/>
            )
        }

        </>
    )
}
