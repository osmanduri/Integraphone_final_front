import React, { useState, useRef } from 'react'
import logo from '../../../images/log/symbole.png'
//import Dropdown from 'react-dropdown';
import FormulaireOk from '../../../components/FormulaireOk'
import axios from 'axios'
import RetourRafraichir from '../../../components/RetourRafraichir'
import validation from '../../../images/stick_mark/correct.png'
export default function FormulaireDevisOperateur() {
    const [formulaireDevisOk, setFormulaireOk] = useState(true)
    const [typeDevis, setTypeDevis] = useState(true)
    const [typeDevisValue, setTypeDevisValue] = useState('')
    const [villeValue, setVilleValue] = useState('')
    const [ville, setVille] = useState()
    const [departementValue, setDepartementValue] = useState('')
    const [departement, setDepartement] = useState('')

    const nom = useRef()
    const prenom = useRef()
    const telephone = useRef()
    const entreprise = useRef()
    const adresse = useRef()
    const email = useRef()
    
    const devis = async (e) => {
        e.preventDefault();

        
        const payload = {
            nom:nom.current.value,
            prenom:prenom.current.value,
            telephone:telephone.current.value,
            entreprise:entreprise.current.value,
            type_devis:typeDevisValue,
            adresse:adresse.current.value,
            ville:villeValue,
            codePostal:departementValue,
            email:email.current.value,
            categorie:"OPERATEUR"
        } 

        await axios.post(`${process.env.REACT_APP_BASE_URL}/api/devis/new`, payload)
        .then(function(response){
            if(response.data){
                setFormulaireOk(false)
            }
        })
        .catch(function(response){
            console.log(response)
        })
    }

    const handleClickTypeDevis = () => {
        setTypeDevis(!typeDevis);
    }

    const handleClickChoixDevis = (choix) => {
        setTypeDevisValue(choix)
        setTypeDevis(true)

    }

    const handleDepartementChange = async (e) => {

        setDepartementValue(e.target.value)     

        if(e.target.value.length > 1){
            await axios.get(`https://vicopo.selfbuild.fr/cherche/${e.target.value}`)
            .then(function(response) {
                    setVilleValue(response.data.cities[0].city)
                    setVille(response.data.cities)
                    setDepartement(response.data.cities)             
            })
            .catch(function(err) {
                console.log(err)
            })
        }
    }

    const handleVilleChange = async (e) => {

        setVilleValue(e.target.value)

        if(e.target.value.length > 1){
            await axios.get(`https://vicopo.selfbuild.fr/ville/${e.target.value}`)
            .then(function(response) {
                    setDepartementValue(response.data.cities[0].code)
                    setDepartement(response.data.cities)
                    setVille(response.data.cities)
                
                
            })
            .catch(function(err) {
                console.log(err)
            })
        }      
    }

    const handleClickVille = async (e) => {
        setVilleValue(e.target.innerHTML)
        setVille(false);

        await axios.get(`https://vicopo.selfbuild.fr/ville/${e.target.innerHTML}`)
        .then(function(response) {
            setDepartementValue(response.data.cities[0].code)
            setDepartement(false)
        })
        .catch(function(err) {
            console.log(err)
        })
    }

    const handleClickDepartement = async (e) => {
        setDepartementValue(e.target.innerHTML)
        setDepartement(false);

        await axios.get(`https://vicopo.selfbuild.fr/cherche/${e.target.innerHTML}`)
        .then(function(response) {
                setVilleValue(response.data.cities[0].city)
                setVille(false)
                          
        })
        .catch(function(err) {
            console.log(err)
        })
    }
    
    

    return (
        <>
        <RetourRafraichir path=""/>
        {
            formulaireDevisOk ? (
                <div className="devis">
                <div className="devis_inside">
                    <div className="devis_logo">
                        <img src={logo} alt="logo"/>
                    </div>          
                    <p>Formulaire de devis<br/>Operateur</p>
                    <form type="submit" onSubmit={devis}>
                    <div  className="devis_inside_input">
                        <label>Nom</label>
                        <input type="text" placeholder="Ex : Doe" ref={nom} required />
                        <label>Prénom</label>
                        <input type="text" placeholder="Ex : John" ref={prenom} required/>
                        <label>Téléphone</label>
                        <input type="text" placeholder="Ex: 062792...." ref={telephone} required/>
                        <label>Entreprise</label>
                        <input type="text" placeholder="Ex: Integraphone" ref={entreprise} required/>
                        <label>Type de devis</label>
                        <div className="devis_password_eyes">
                            <input type="text" placeholder="Type de devis" onChange={() => null} value={typeDevisValue} onClick={handleClickTypeDevis} required/>
                            {
                                typeDevis ? (
                                    <i onClick={handleClickTypeDevis} className="fas fa-sort-down"></i>) 
                                : 
                                ( 
                                    <>
                                    <i onClick={handleClickTypeDevis} className="fas fa-sort-up"></i>
                                    <div className="liste_deroulant_severite">
                                        <p onClick={() => handleClickChoixDevis("Fibre Optique")}>Fibre Optique</p><br/><p onClick={() => handleClickChoixDevis("Telephonie Mobile")}>Telephonie Mobile</p><br/><p onClick={() => handleClickChoixDevis("Telephonie IP")}>Telephonie IP</p>
                                    </div>
                                    </>
                                ) 
                            }

                        </div>
                        <label>Mail</label>
                        <input type="text" placeholder="Ex: john.doe@gmail.com" ref={email} required/>
                        <label>Adresse</label>
                        <input type="text" placeholder="Ex: 31 avenue jean moulin" ref={adresse} required/>
                        <div className="input_ville_departement">
                            <input onChange={handleVilleChange} value={villeValue} type="text" placeholder="Ville" required/>
                            {ville && <div className="liste_deroulant_type_ville">
                        {
                            ville && ville.map((e,index) => {
                                return(
                                    
                                        <p key={index} onClick={handleClickVille} id="ville">{e.city}</p>                    
                                )     
                            })                           
                        }
                        </div>}
                            <input onChange={handleDepartementChange} value={departementValue} type="text" placeholder="Département" required/>
                            {departement && <div className="liste_deroulant_type_departement">
                        {
                            departement && departement.map((e,index) => {
                                return(
                                    
                                        <p key={index} onClick={handleClickDepartement} id="departement">{e.code}</p>                    
                                )     
                            })                           
                        }
                        </div>}
                                                    
                        </div>

                    </div>
                    <div className="devis_bouton_envoyer">
                        <button type="submit">Envoyer</button>  
                    </div>
                    </form>                 
                </div>
    
        </div>
            ) : (
                <FormulaireOk titre="Formulaire de Devis" texte="Votre Devis à bien été pris en compte" img={validation} email={email.current.value} />
            )

        }

        </>
    )
}
