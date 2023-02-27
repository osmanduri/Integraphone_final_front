import React, { useState, useEffect } from 'react'
import logo from '../images/log/symbole.png'
import {strNoAccent_Apostrophe , lessExpensivePrice_ftto, lessExpensivePrice_ftte} from '../fonctions/fonction_eligibilite'
import axios from 'axios'
import chargement from '../images/chargement/worldwide.gif'
import chargment_bar_recherche from '../images/chargement/loading-spin.gif'
import cross from '../images/stick_mark/xmark-solid.svg'
import tick_mark from '../images/stick_mark/tick-mark.png'
import cancel from '../images/stick_mark/cancel.png'
import CardsEligiblite from '../components/Eligibilite/CardsEligiblite'
import ftto from '../data/ftto_ftth_ftte/output_ftto_36_mois.json'
import ftth from '../data/ftto_ftth_ftte/output_ftth_36_mois.json'
import ftte from '../data/ftto_ftth_ftte/output_ftte_36_mois.json'
import info from '../images/ticket/info.png'

export default function Eligibilite() {
    const [numero, setNumero] = useState('')
    const [erreurNumero, setErreurNumero] = useState('')
    const [adresseInputValue, setAdresseInputValue] = useState('')
    const [codeCommune, setCodeCommune] = useState('')
    const [ville, setVille] = useState('')
    const [codeVoie, setCodeVoie] = useState('')

    const [listeAdresse, setListeAdresse] = useState([])
    const [listeDetailAdress, setListeDetailAdress] = useState([])

    const [sendAdress, setSendAdress] = useState(false)
    const [sendLoading, setSendLoading] = useState(false)
    const [messageEligibilite, setMessageEligibilite] = useState('')
    const [adresseCompleteAppliwave, setadresseCompleteAppliwave] = useState('')

    const [offres, setOffres] = useState([])
    const [offresFttoAll, setOffresFttoAll] = useState([])
    const [offresFtteAll, setOffresFtteAll] = useState([])
    const [offresFtthAll, setOffresFtthAll] = useState([])

    const [loadingSearchBar, setLoadingSearchbar] = useState(false)

    const [fullAdress, setFullAdress] = useState('')

    const [coefficientFtto, setCoefficientFtto] = useState(1)
    const [coefficientFtte, setCoefficientFtte] = useState(1)
    const [coefficientFtth, setCoefficientFtth] = useState(1)

    useEffect(() => {
        if(adresseInputValue.length > 6){
            const timeoutId = setTimeout(handleAdrress, 1000); // la fonction handleAddress s'execute 1 seconde par taper une adresse dans le input
            return () => clearTimeout(timeoutId);
        }
        console.log(ftte)
    }, [adresseInputValue]); // useEffect se declenche à chaque fois que adresse change dans le input

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/coefficient/${process.env.REACT_APP_COEFFICIENT}`)
        .then((res) => {
            if(res.data.fibreFTTO){
                setCoefficientFtto(res.data.fibreFTTO)
            }else{
                setCoefficientFtto(1)
            }
            if(res.data.fibreFTTE){
                setCoefficientFtte(res.data.fibreFTTE)
            }else{
                setCoefficientFtte(1)
            }
            if(res.data.fibreFTTH){
                setCoefficientFtth(res.data.fibreFTTH)
            }else{
                setCoefficientFtth(1)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const adresse = document.getElementById('id_adresse').value
        let isFibre = false;

        setFullAdress(adresse)

        if(numero && codeCommune && codeVoie){
            setSendAdress(true)
            setSendLoading(true)
            setErreurNumero('')
            setOffresFttoAll([])
            setOffresFtteAll([])
            setOffresFtthAll([])
            setOffres([])
            setadresseCompleteAppliwave('')

            const offresTab_Appliwave = []


            const final_tab_ftto = []
            const final_tab_ftte = []
            const final_tab_ftth = []

            await axios.get(`https://wazabi.appliwave.com/api/wholesale/eligibiliteviaadresse?codecommune=${codeCommune}&codevoie=${codeVoie}&numerovoie=${numero}`)
            .then( async (res) => {
                setadresseCompleteAppliwave(res.data.adresseComplete)
                setSendLoading(true)
                setOffres(res.data.offres)
                //console.log(res.data.offres)
                res.data.offres.forEach(e => {
                    if(e.technologie.includes('Fibre')){
                        isFibre = true;
                    }
                })

                if(isFibre){
                    setMessageEligibilite(`Félicitations vous êtes bien éligible à la fibre à l'adresse: `)
                    res.data.offres.forEach(e => {
                        if(e.operateur === 'Appliwave' && e.code.includes('36') && e.technologie === 'Fibre FTTO'){
                            offresTab_Appliwave.push(e)
                        }

                        if(e.code.includes('36') && e.technologie === "Fibre FTTO"){
                            final_tab_ftto.push(e)
                        }

                        if(e.code.includes('36') && e.technologie === "Fibre FTTE"){
                            final_tab_ftte.push(e)
                        }

                        if(e.code.includes('36') && e.technologie === "Fibre FTTH"){
                            final_tab_ftth.push(e)
                        }

                        
                    })

                    ///////////////////// FTTO //////////////////////////////////////
                    if(offresTab_Appliwave.length > 0){ // Priorité aux offres Appliwaves, s'il y a des offres Appliwaves on affiche les offres Appliwave

                        ftto.forEach(offre_ftto => {
                        offresTab_Appliwave && offresTab_Appliwave.forEach(e_offre => {
                            if(e_offre.code === offre_ftto.Reference){
                                e_offre.prix = Math.floor(parseFloat(offre_ftto.Prix) * coefficientFtto)
                            }
                        })
                    })
                        setOffresFttoAll(offresTab_Appliwave)
                    }else{ // En revanche s'il n'y a pas d'offre Appliwave on prend les offres les moins chers de tout les opérateurs
                        setOffresFttoAll(lessExpensivePrice_ftto(final_tab_ftto , coefficientFtto))
                    }

                    /////////////////// FTTE ////////////////////////////////////////
                    if(final_tab_ftte.length > 0){ // S'il y a des offres FTTE on affiche les prix les moins cher (à noter que Appliwave ne propose pas de FTTE)
                        setOffresFtteAll(lessExpensivePrice_ftte(final_tab_ftte, coefficientFtte))
                    }

                    //////////////////// FTTH ///////////////////////////////////////
                    if(final_tab_ftth.length > 0){

                        ftth.forEach(offre_ftth => {
                            final_tab_ftth && final_tab_ftth.forEach(e_offre => {
                                if(e_offre.code === offre_ftth.Reference){
                                    e_offre.prix = Math.floor(parseFloat(offre_ftth.RecurentCharge) * coefficientFtth)
                                }
                            })
                        })
                        setOffresFtthAll(final_tab_ftth)
                    }
                    //setOffresFttoAll(RemoveDoubleValue(offresTab_Appliwave))
                    
                    setSendLoading(false)

                }else{
                    setSendLoading(false)
                    setMessageEligibilite(`Malheuresement vous n'êtes pas éligible à la fibre à l'adresse: `)
                }
            })
            .catch((err) => {
                console.log(err.data)
                setSendAdress(false)
            })
        }else if(!numero && codeCommune && codeVoie){
            //console.log('Veuillez Selectionner un numero')
            setSendAdress(false)
            setErreurNumero('Veuillez Selectionner un numero de voie')
        }else{
            //console.log('Veuillez Selectionner une adresse dans la liste')
            setErreurNumero('Veuillez être précis en selectionnant une adresse dans la liste')
            setSendAdress(false)
        }

    }

    const handleAdrress = () => { //onChange handleAdrress s'execute lorsque l'on arrete de taper une adresse dans le input
        
        setLoadingSearchbar(true)
        //setAdresseInputValue(e.target.value)
        setMessageEligibilite('')
        setNumero('')
        setSendAdress(false)
        setListeDetailAdress([])
        setOffresFttoAll([])
        setOffresFtteAll([])
        setOffresFtthAll([])
        setErreurNumero('')

            axios.get(`https://api-adresse.data.gouv.fr/search/?q=${adresseInputValue}&limit=10`)
            .then((res) => {
                setListeAdresse(res.data.features)
                setLoadingSearchbar(false)
            })
            .catch((err) => {
                setLoadingSearchbar(false)
                console.log(err)
            })
    }



    const handleListeAdresse = async (choix) => {
        setListeAdresse([])
        setMessageEligibilite('')
        let listePrecision = [];
        
        const p = document.getElementById('id_adresse')
        const arrayAdress = []

        p.value = choix.properties.label

        setCodeCommune(choix.properties.citycode)
        setVille(choix.properties.city)
        if(choix.properties.housenumber){
            setNumero(choix.properties.housenumber)
        }else{
            setErreurNumero('Veuillez définir un numero de voie')
        }

        let nomVoie = strNoAccent_Apostrophe(choix.properties.street || choix.properties.name); // Permet de supprimer les accents et les apostrophes
        console.log(nomVoie)

        await axios.get(`https://plateforme.adresse.data.gouv.fr/api-fantoir/communes/${choix.properties.citycode}/voies`)
        .then((res) => {

            res.data.forEach(e => {
                if(nomVoie.includes(e.motDirecteur)){               
                    arrayAdress.push(e);
                    //setListeDetailAdress(arrayAdress);
                }else{
                    //console.log('Aucune rue ne correspond')
                }
            })
        })
        .catch((err) => {
            console.log(err)
        })
        console.log(arrayAdress)
        if(arrayAdress.length > 0){
            if(arrayAdress.length === 1){
                setCodeVoie(arrayAdress[0].codeRivoli)
            }else if(arrayAdress.length > 1){
                arrayAdress.forEach(e => {
                    if(nomVoie.includes(e.natureVoie)){
                        listePrecision.push(e)                   
                    }
                })
                console.log(listePrecision)
                if(listePrecision.length === 1){
                    setCodeVoie(listePrecision[0].codeRivoli)
                }

                if(listePrecision.length > 1){
                    setListeDetailAdress(listePrecision);
                }
            }
        }else{
            console.log("Nous n'avons pas trouvé l'adresse veuillez reessayer")
        }
    }

      const handleListeAdressDetail = (e) => {
        const p = document.getElementById('id_adresse');
        p.value = `${numero + " " + e.libelleVoieComplet + " " + codeCommune + " " + ville}`;
        setCodeVoie(e.codeRivoli)
      }

      const handleCancel = () => {
          setListeAdresse([]);
          setOffresFttoAll([])
          setOffresFtteAll([])
          setOffresFtthAll([])
          setOffres([])
          setAdresseInputValue('')
          setCodeCommune('')
          setCodeVoie('')
          setNumero('')
          setSendAdress(false)
          setListeDetailAdress([])
          setMessageEligibilite('')
          setErreurNumero('')
          setVille('')
          setadresseCompleteAppliwave('')
          setLoadingSearchbar(false)
          const p = document.getElementById('id_adresse');
          p.value = '';
      }

    return (
        <>
        <div className="eligibilite" onClick={() => setListeAdresse([])}>
            <h1>TEST ELIGIBILITE A LA FIBRE INTEGRAPHONE !</h1>
            <div  className="form_outside_img">
                        <img src={logo} alt="logo"/>
            </div>
            <form type="submit" onSubmit={handleSubmit} onClick={() => setListeAdresse([])}>
                    <div className="form_inside" style={listeAdresse.length > 0 ? {height:"280px"} : {height:"150px"}}>
                        <div className="form_inside_input_adresse">
                            <label>Adresse</label>
                            <div className="form_inside_input_search" id="input_adresse">
                                <div className="form_inside_input_seach_loading">
                                <input type="text" 
                                id="id_adresse" 
                                placeholder="Entrez votre adresse" 
                                onChange={(e) => setAdresseInputValue(e.target.value)} 
                                required />
                                { loadingSearchBar && <img src={chargment_bar_recherche} alt="loading_spin"/>}
                                </div>

                                
                                <div className="search_icon">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div className="cancel">
                                    <img onClick={handleCancel} src={cross} alt="cross"/>
                                </div>

                                
                            </div>
                            <div className="erreur_numero">
                                    <p>{erreurNumero}</p>
                            </div>

        { listeAdresse.length > 0 && <div className="liste_deroulant_adresse">
            {
                listeAdresse.map((element, index) => {
                    return(
                        <div key={index} className="liste_deroulant_adresse_inside">
                        <p key={index} 
                            onClick={() => handleListeAdresse(element)}>
                            {element.properties.label}
                        </p>                           
                        </div>                                          
                        )  
                })
            }
                                
                                </div>
                                
                            }       
                        </div>
                        
                    <div className="form_button">
                        <button disabled={!(numero && codeCommune && codeVoie)} style={{background:numero && codeCommune && codeVoie ? "" : "rgb(136, 132, 136)"}}>Tester mon adresse</button>  
                    </div>
                    
                    </div>
                        {
                           listeDetailAdress.length > 0 && <div className="eligibilite_precision">
                               <h3>Nous avons besoin de precision</h3>
                                {
                                     listeDetailAdress.map((element, index) => {
                                            return(
                                                <div key={index} className="eligibilite_precision_inside">
                                                    <p key={index} onClick={() => handleListeAdressDetail(element)}>{element.libelleVoieComplet} ?</p>
                                                </div>
                                            
                                        )
                                    })
                                }
                            </div>
                        } 
            </form>
            {
                          sendAdress ? (
                            sendLoading ? (
                                <div className="chargement">
                                    <img src={chargement} alt="loading"/>
                                    <p>Veuillez patienter, cela ne prendra que quelques secondes<br/><br/>Nous testons votre Eligibilité</p>
                                </div>
                              ) : (
                                  <>
                                  <div className="message_eligiblite">
                                      <div className="message_eligiblite_img_p">
                                        {messageEligibilite.includes('Félicitations') ? <img src={tick_mark} alt="tick_mark"/> : <img src={cancel} alt="tick_mark"/>}
                                        <p>{messageEligibilite}<strong>{fullAdress}</strong></p>
                                      </div>


                                  </div>
                                  { ( offresFttoAll.length > 0 || offresFtteAll.length > 0 || offresFtthAll.length > 0 ) &&
                                  <div className="message_eligiblite_fas_outside">
                                        <div className="information_complementaire">
                                            <img src={info} alt=""/>
                                            <p>Information Complémentaire</p>
                                        </div>
                                        <div className="message_eligiblite_fas_inside">
                                            <p>* certains produits ou services peuvent être soumis à des FAS (Frais d’Accès au Service) , merci de consulter votre commercial pour en connaître les montants</p>
                                        </div>
                                        <div className="message_eligiblite_fas_inside">                            
                                            <p>* Les tarifs sont valables 1 semaine à compter de votre demande mais peuvent toutefois être soumis à variation à la hausse ou à la baisse sans aucun préavis. Seul le bon de commande signé fera foi pour valider le tarif définitif.</p>
                                        </div>
                                        <div className="message_eligiblite_fas_inside">                                   
                                            <p>* Les FTTO sont avec GTR 4h 5 jours sur 7 de 9h00 à 17h30. Pour des demandes d’astreintes 24h/24 et 7j/7 merci d’en faire la demande et une offre vous sera adressée.</p>
                                        </div>  
                                        <div className="message_eligiblite_fas_inside">                                   
                                            <p>* Si vous souhaitez une livraison rapide (problème de déménagement urgent ou autre souci…) vous pouvez faire appel à notre service Fast Track (sous réserve d’éligibilité au service) et une autre offre vous sera adressée. Pour cela indiquez la date souhaitée de livraison de votre lien dans les commentaires.</p>
                                        </div>  
                                    </div>
                                    }
                                  </>
                                
                              )
                          ) : ("")
                  }
                  
        </div>
        {
              !sendLoading && offres.length > 0 ? (   
                  offresFttoAll.length > 0 &&
                    <>
                    <div className="eligibilite_offres_texte"><span style={{fontSize:"24px", fontWeight:"bold"}}>Fibre FTTO</span></div>
                    <div className="cards_eligibilite_outside">
                    {
                    offresFttoAll.map((e, index) => {
                            return (
                                <CardsEligiblite element={e} key={index} fullAdress={fullAdress}/>
                            )
                        })
                    }
                    </div>
                    </>
              ) : (
                ""
            )
              

              
        }

{
              !sendLoading && offres.length > 0 ? (   
                  offresFtteAll.length > 0 &&
                    <>
                    <div className="eligibilite_offres_texte" style={{marginTop:"100px"}}><span style={{fontSize:"24px", fontWeight:"bold"}}>Fibre FTTE</span></div>
                    <div className="cards_eligibilite_outside">
                    {
                    offresFtteAll.map((e, index) => {
                            return (
                                <CardsEligiblite element={e} key={index} fullAdress={fullAdress}/>
                            )
                        })
                    }
                    </div>
                    </>
              ) : (
                ""
            )
              

              
}
{
              !sendLoading && offres.length > 0 ? (   
                  offresFtthAll.length > 0 &&
                    <>
                    <div className="eligibilite_offres_texte" style={{marginTop:"100px"}}><span style={{fontSize:"24px", fontWeight:"bold"}}>Fibre FTTH</span></div>
                    <div className="cards_eligibilite_outside">
                    {
                    offresFtthAll.map((e, index) => {
                            return (
                                <CardsEligiblite element={e} key={index} fullAdress={fullAdress}/>
                            )
                        })
                    }
                    </div>
                    </>
              ) : (
                ""
            )
              

              
}


       {/*} <div onClick={handleFibreTest}>test</div>*/}
        </>
    )
}