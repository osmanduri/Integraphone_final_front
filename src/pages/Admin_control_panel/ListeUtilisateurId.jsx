import React, {useState, useEffect, useContext, useRef} from 'react'
import { UserContext } from '../../userContext'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RetourRafraichir from '../../components/RetourRafraichir';
import image_user_black from '../../images/liste_utilisateurId/image-de-lutilisateur-avec-fond-noir.png'
import plus from '../../images/liste_utilisateurId/plus-symbole-noir.png'
import fileloading from '../../images/liste_utilisateurId/file_loading.gif'
import fileDownload from 'js-file-download';
import TrierDateFacture from '../../components/TrierDateFacture';
import TrierDateContrat from '../../components/TrierDateContrat';

export default function ListeUtilisateurId() {
    const {userData, setUserData} = useContext(UserContext);
    const [user, setUser] = useState({})
    const [fileFacture, setFileFacture] = useState()
    const [fileContrat, setFileContrat] = useState()
    const {id} = useParams()

    const inputFactureRef = useRef(null)
    const inputContratRef = useRef(null)

    const buttonFactureRef = useRef(null)
    const buttonContratRef = useRef(null)

    const [chargementFacture, setChargementFacture] = useState(false)
    const [chargementContrat, setChargementContrat] = useState(false)

    const [responseFactureUpload, setReponseFactureUpload] = useState('')
    const [responseContratUpload, setResponseContratUpload] = useState('')

    const [colorReponseFacture, setColorReponseFacture] = useState('')
    const [colorReponseContrat, setColorReponseContrat] = useState('')

    const [listeFacture, setListeFacture] = useState([]) 
    const [listeContrat, setListeContrat] = useState([])

    const [factureUseEffect, setFactureUseEffect] = useState('')
    const [contratUseEffect, setContratUseEffect] = useState('')

    const [messageIsAdmin, setMessageIsAdmin] = useState(false)

    const [choixTypeContrat, setChoixTypeContrat] = useState()


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        setUserData(data)
        if(data && (data.isAdmin || data.isSuperAdmin)){
            setMessageIsAdmin(true)
            async function fetchDataUser(){
                await axios.get(`${process.env.REACT_APP_BASE_URL}/api/users/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': `${data && data.token}`
                    }
                })
                .then((res) => {
                        setUser(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
            }

            fetchDataUser();

        }else{
            setMessageIsAdmin(false)
        }   
    }, [id, setUserData])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        async function fetchDataUserFacture(){
            await axios.get(`${process.env.REACT_APP_BASE_URL}/api/facture/users/${user && user._id}`, {
                headers:{
                    'Content-Type': 'application/json',
                    'token': `${data && data.token}`,
                    nom_client: user && (user.nom + ' ' + user.prenom)
                } 
            })
            .then((facture) => {
                setListeFacture(facture.data)
            })
            .catch((err) =>{
                console.log(err)
            })
        }

        async function fetchDataUserContrat(){
            await axios.get(`${process.env.REACT_APP_BASE_URL}/api/contrat/users/${user && user._id}`, {
                headers:{
                    'Content-Type': 'application/json',
                    'token': `${data && data.token}`,
                    nom_client: user && (user.nom + ' ' + user.prenom)
                } 
            })
            .then((contrat) => {
                setListeContrat(contrat.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
        fetchDataUserFacture(); 
        fetchDataUserContrat();
    },[user, factureUseEffect, contratUseEffect])

    const handleSubmitFacture = async (e) => {
        e.preventDefault()
        setChargementFacture(true)
        setReponseFactureUpload('')
        setFactureUseEffect('')
        const formData = new FormData(); 

        formData.append('facture', fileFacture)

        if(fileFacture.type === "application/pdf")
        {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/api/upload/facture/`, formData, {
                headers:{
                    nom_client:user.nom + ' ' + user.prenom,
                    user_id:`${user && user._id}`, 
                    token:`${userData && userData.token}`
                }
            })
            .then((res) => {
                
                if(res.data === "Ce fichier existe déjà !"){
                    setReponseFactureUpload('Ce fichier existe déjà !')
                    setChargementFacture(false)
                    setColorReponseFacture('red')
                    setFileContrat()
                    setFileFacture()
                }else if(res.data){
                    setFileContrat()
                    setFileFacture()
                    setChargementFacture(false)
                    setReponseFactureUpload('Fichier chargé avec succès !')
                    setColorReponseFacture('green')
                    setFactureUseEffect('facture chargé')
                }
            })
            .catch((err) => {
                console.log(err)
                setChargementFacture(false)
                setReponseFactureUpload('Erreur lors du chargement !')
                setColorReponseFacture('red')
            })
        }else{
            setReponseFactureUpload('Le format doit être de type pdf !')
            setColorReponseFacture('red')
            setChargementFacture(false)
        } 


    }

    const handleSubmitContrat = async (e) => {
        e.preventDefault()
        setChargementContrat(true)
        setContratUseEffect('')
        const formData = new FormData(); 

        formData.append('contrat', fileContrat)

        if(fileContrat.type === "application/pdf"){
            await axios.post(`${process.env.REACT_APP_BASE_URL}/api/upload/contrat/`, formData, {
                headers:{
                    nom_client:user.nom + ' ' + user.prenom,
                    token:`${userData && userData.token}`,
                    user_id:`${user && user._id}`,
                    type:choixTypeContrat
                }
            })
            .then((res) => {
                
                if(res.data === "Ce fichier existe déjà !"){
                    setResponseContratUpload('Ce fichier existe déjà !')
                    setChargementContrat(false)
                    setColorReponseContrat('red')
                }else if(res.data){
                    setFileContrat()
                    setFileFacture()
                    setChargementContrat(false)
                    setResponseContratUpload('Fichier chargé avec succès !')
                    setColorReponseContrat('green')
                    setContratUseEffect('contrat chargé')
                }
            })
            .catch((err) => {
                console.log(err)
                setChargementContrat(false)
                setResponseContratUpload('Erreur lors du chargement !')
                setColorReponseContrat('red')
            })
        }else{
            setResponseContratUpload('Le format doit être de type pdf !')
            setColorReponseContrat('red')
            setChargementContrat(false)
        } 



    }

    const handleChargerFacture = (event) => {
        event.preventDefault()
        inputFactureRef.current.click();
    }

    const handleChargerContrat = (event) => {
        event.preventDefault()
        inputContratRef.current.click();
    }

    const handleEnvoiFacture = (event) => {
        event.preventDefault();
        buttonFactureRef.current.click();
    } 

    const handleEnvoiContrat = (event) => {
        event.preventDefault();
        buttonContratRef.current.click();
    }

    const handleDeleteFacture = async (element) => {
        setFactureUseEffect('')
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/upload/facture/delete/`, {
            headers:{
                nom_client:element.nom_client,
                nom_fichier: element.fileName,
                token:`${userData && userData.token}`
            } 
        })
        .then((res) => {
            setFactureUseEffect(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    } 

    const handleDeleteContrat = async (element) => {
        setContratUseEffect('')
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/upload/contrat/delete/`, {
            headers:{
                nom_client:element.nom_client,
                nom_fichier: element.fileName,
                token:`${userData && userData.token}`
            }
        })
        .then((res) => {
            setContratUseEffect(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleDownloadFacture = async (element) => {
        
        await axios.get(`${process.env.REACT_APP_BASE_URL}/api/download/facture`  ,{
            headers:{
                nom_client:element.nom_client,
                nom_fichier: element.fileName
            },
            responseType:"blob"
        })
        .then((res) => {
            fileDownload(res.data, "facture.pdf")
        })
    }

    const handleDownloadContrat = async (element) => {
        
        await axios.get(`${process.env.REACT_APP_BASE_URL}/api/download/contrat`,{
            headers:{
                nom_client:element.nom_client,
                nom_fichier: element.fileName
            },
            responseType:"blob"
        })
        .then((res) => {
            fileDownload(res.data, "contrat.pdf")
        })
    }

    const handleChangeDateFacture = async (e) => {
        
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        await axios.get(`${process.env.REACT_APP_BASE_URL}/api/facture/filter/date/${e.target.value}`, {
            headers:{
                user_id:`${user._id}`,
                token: `${data.token}`
            }
        })
        .then((res) => {
            setListeFacture(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleChangeDateContrat = async (e) => {
        
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        await axios.get(`${process.env.REACT_APP_BASE_URL}/api/contrat/date/${e.target.value}`, {
            headers:{
                user_id:`${user._id}`,
                token: `${data.token}`
            }
        })
        .then((res) => {
            setListeContrat(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    function handleTypeContrat(e){
        setChoixTypeContrat(e.target.value)
    }

    if(!user){
        return null
    }
    return (
        <>
        { messageIsAdmin ?
        <div className="liste_utilisateurId">
            
            <RetourRafraichir/>

            <div className="liste_utilisateurId_main_cards">
                <div className="main_user">
                    <img src={image_user_black} alt="user"/>
                        <div className="main_user_nom_prenom">
                            <p><strong>Nom:</strong> {user.nom}</p>
                            <p><strong>Prenom:</strong>  {user.prenom}</p>
                            <p><strong>Email:</strong>  {user.email}</p>            
                            <p><strong>Date de creation:</strong> {user.date_creation_user}</p>
                        </div>
                </div>
                <div className="facture_contrat">
                        <div className="facture_contrat_inside">
                            <div className="ajout_facture" onClick={handleChargerFacture}>
                                    <p>Facture</p>
                                    <img src={plus} alt="plus"/>
                            </div>
                            <p>{fileFacture &&<strong>-</strong>}{fileFacture && fileFacture.name}</p>
                            
                            <div className="ajout_facture_button_chargement">
                                <button onClick={handleEnvoiFacture} disabled={fileFacture ? false:true} >Envoyer facture</button>
                                {chargementFacture && <img src={fileloading} alt="file_loading"/>}
                            </div>
                            <p style={{color:colorReponseFacture}}>{responseFactureUpload}</p>

                            
                        </div>
                        <div className="facture_contrat_inside">
                            <div className="ajout_facture" onClick={handleChargerContrat}>
                                    <p>Contrat</p>
                                    <img src={plus} alt="plus"/>
                            </div>
                            <div className='charger_type_contrat'>
                            <p className='charger_type_contrat_title'>type de contrat</p>
                                <select className="trier_type_contrat_select" name="type" id="type-select" onChange={e => handleTypeContrat(e)}>
                                    <option value="bdc_dss">BDC DSS</option>
                                    <option value="bdc_hebergement">BDC HEBERGEMENT</option>
                                    <option value="bdc_internet">BDC INTERNET</option>
                                    <option value="bdc_mobile">BDC MOBILE</option>
                                    <option value="bdc_telephonie">BDC TELEPHONIE</option>
                                    <option value="maint_distance">MAINT. A DISTANCE</option>
                                    <option value="maint_informatique">MAINT. INFORMATIQUE</option>
                                    <option value="maint_telephonie">MAINT. TELEPHONIE</option>
                                    <option value="maint_videoprotection">MAINT. VIDEOPROTECTION</option>
                                    <option value="loc_informatique">LOCATION INFORMATIQUE</option>
                                    <option value="loc_telephonie">LOCATION TELEPHONIE</option>
                                    <option value="abonnement_infogerance"  onClick={null}>ABONNEMENT INFOGERANCE</option>
                                </select>
                            </div>
                            <p>{fileContrat &&<strong>-</strong>}{fileContrat && fileContrat.name}</p>
                            
                            <div className="ajout_facture_button_chargement">
                                <button onClick={handleEnvoiContrat} disabled={choixTypeContrat && fileContrat ? false:true} >Envoyer contrat</button>
                                {chargementContrat && <img src={fileloading} alt="file_loading"/>}
                            </div>
                            <p style={{color:colorReponseContrat}}>{responseContratUpload}</p>

                            
                        </div>

                  
                </div>
            </div>



            <div className='liste_utilisateurId_main_cards'>
                
               <div className='facture_cards'>
                <h4>Factures</h4>
                <TrierDateFacture handleChangeDateFacture={handleChangeDateFacture}/>
                <div  className='facture_cards_inside_title'>
                                     <p className='textL'>client </p>
                                     <p>fichier </p>
                                     <p className='textR'>creation</p>
                </div>
                {
                    !listeFacture.length > 0 && <div className="pas_de_facture_contrat">Aucune facture</div>
                }
                {
                    listeFacture.length > 0 && listeFacture.map((element, index) => {
                        return (
                            
                            <div key={index} className='facture_outside'>
                                <div key={index} className='facture_cards_inside'>
                                    <p className='textL'>{element.nom_client}</p>
                                    <p className='textC'>{element.fileName}</p>
                                    <p className='textR'>{element.date_creation}</p>
                                </div>
                                <div key={element._id} className='facture_bouton_supprimer'>
                                    <button type="submit" onClick={() => handleDownloadFacture(element)}>Télécharger</button>
                                    <button disabled={userData.isSuperAdmin ? false : true} type="submit" onClick={() => handleDeleteFacture(element)}>Supprimer</button>
                                </div>
                            </div>
                        )
                    })
                } 
            </div>
            </div>

            { <div className='liste_utilisateurId_main_cards'>
                <div className='facture_cards'>
                 <h4>Contrats</h4>
                 <TrierDateContrat handleChangeDateContrat={handleChangeDateContrat}/>
                 <div  className='facture_cards_inside_title'>
                                     <p className='textL'>client </p>
                                     <p className='textC'>fichier</p>
                                     <p className='textR'>creation</p>
                </div>
                {
                    !listeContrat.length > 0 && <div className="pas_de_facture_contrat" >Aucun contrat</div>
                }
                
                 {
                    listeContrat.length > 0 && listeContrat.map((element, index) => {
                         return (
                             <>
                             <div key={index} className='facture_outside'>
                                 <div key={index} className='facture_cards_inside'>
                                     <p className='textL'>{element.nom_client}</p>
                                     <p className='textC'>{element.fileName}</p>
                                     <p className='textR'>{element.date_creation}</p>                         
                                 </div>
                                 <div key={element._id} className='facture_bouton_supprimer'>
                                     <button type="submit" onClick={() => handleDownloadContrat(element)}>Télécharger</button>
                                     <button disabled={userData.isSuperAdmin ? false : true} type="submit" onClick={() => handleDeleteContrat(element)}>Supprimer</button>
                                 </div> 
                             </div> 
                             
                             </>
                             
                             
                             
                         )
                     })
                    } 
             </div>
             </div>}

            

            <div style={{display:"none"}} className="upload_facture">

                <form  onSubmit={handleSubmitFacture}>
                    <p>FACTURES !</p>
                    <input accept=".pdf" type="file" placeholder="fichier" name="facture" onChange={e => setFileFacture(e.target.files[0])} ref={inputFactureRef}/>
                    <button type="submit" ref={buttonFactureRef}>Charger</button>
                </form>

                <form onSubmit={handleSubmitContrat}>
                    <p>CONTRAT !</p>
                    <input accept=".pdf" type="file" placeholder="contrat" name="contrat" onChange={e => setFileContrat(e.target.files[0])} ref={inputContratRef}/>
                    <button type="submit" ref={buttonContratRef}>Charger</button>
                </form>

                
            </div>
            
        </div> :
        <div className='add_user_forbidden container'>
            <p>Vous devez etre administrateur pour accèder à cette page</p>
        </div>
        }
        </>

                
    )
}
