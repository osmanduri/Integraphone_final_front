import React, { useState } from 'react'
import logo from '../../images/log/symbole.png'
import FormulaireOk from '../../components/FormulaireOk'
import RetourRafraichir from '../../components/RetourRafraichir'
import stick from '../../images/stick_mark/tick-mark.png'
import axios from 'axios'
import isEmail from 'validator/lib/isEmail'

export default function FormulairePartenaire() {
    const [formulairePartenaireOk, setFormulairePartenaireOk] = useState(true)

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [telephone, setTelephone] = useState('')
    const [entreprise, setEntreprise] = useState('')
    const [email, setEmail] = useState('') 
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormulairePartenaireOk(true)

        const payload = {
            nom,
            prenom,
            telephone,
            entreprise,
            email
        }

        await axios.post(`${process.env.REACT_APP_BASE_URL}/api/partenaire/new` , payload)
        .then((res) => {
            if(res.data){
                setFormulairePartenaireOk(false)
            } 
            
        })
        .catch((err) => {
            console.log(err)
            setFormulairePartenaireOk(true)
        })
        
        
    }

    return (
        <>
        <RetourRafraichir path="/inscription"/>
        {
            formulairePartenaireOk ? (
                <div className="devis">
                <div className="devis_inside">
                    <div className="devis_logo">
                        <img src={logo} alt="logo"/>
                    </div>          
                    <p>Formulaire Partenaire</p>
                    <form type="submit" onSubmit={handleSubmit}>
                    <div className="devis_inside_input">
                        <label>Nom</label>
                        <input type="text" placeholder="Ex : Doe" onChange={e => setNom(e.target.value)} required/>
                        <label>Prénom</label>
                        <input type="text" placeholder="Ex : John" onChange={e => setPrenom(e.target.value)} required/>
                        <label>Téléphone</label>
                        <input type="text" placeholder="Ex: 062792...." onChange={e => setTelephone(e.target.value)} required/>
                        <label>Entreprise</label>
                        <input type="text" placeholder="Ex: Integraphone" onChange={e => setEntreprise(e.target.value)} required />
                        <label>Email</label>   
                        <input type="text" placeholder="Ex: john.doe@gmail.com" onChange={e => setEmail(e.target.value)} value={email} required/>                      
                    </div>
                    <div className="devis_bouton_envoyer">
                        <button type="submit">Envoyer</button>  
                    </div>
                    </form>                         
                </div>
    
            </div>
            ) : (
                <>
                <FormulaireOk titre="Formulaire Partenaire" texte={"Votre demande de Partenariat va être étudié dans les plus bref délais, "} email={email}  img={stick}/>
                </>
            )
        }

        </>
    )
}
