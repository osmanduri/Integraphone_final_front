import React, {useState, useEffect} from 'react'

import axios from 'axios'
import { useParams } from 'react-router'
import logo from '../../images/log/symbole.png'
import TrierDateFacture from '../../components/TrierDateFacture'
import RetourRafraichir from '../../components/RetourRafraichir'
import ModalDownloadFile from '../../components/Modal/ModalDownloadFile'

export default function FactureUser() {
    const {id} = useParams()
    const [user, setUser] = useState({})
    const [singleUserInfo, setSingleUserInfo] = useState({})

    const [listeFacture, setListeFacture] = useState([])

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        if(data){

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
            window.location.href = "/"
        }   
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        
        async function fetchDataUserFacture(){
            await axios.get(`${process.env.REACT_APP_BASE_URL}/api/facture/users/${data && data._id}`, {
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

        async function changeDateFacture(){
            const data = JSON.parse(localStorage.getItem('storage-userData'));
            await axios.get(`${process.env.REACT_APP_BASE_URL}/api/facture/filter/date/tous`, {
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
        fetchDataUserFacture();
        changeDateFacture();
    },[user])

    const handleDownloadFacture = async (element) => {
        setIsOpen(true)
        setSingleUserInfo(element)
        
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        await axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/doubleAuthentification/${data && data._id}`)
        .then((res) => {
            
        })
        .catch(err => {
            console.log(err)
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


    if(!user){
        return null
    }

    return (
        <div className="liste_utilisateurId">
            <RetourRafraichir path="/"/>
            <div className='liste_utilisateurId_main_cards'>
            <div className="liste_ticket_logo">
                <img src={logo} alt="logo"/>
            </div>
            
                <div className='facture_cards'>
                 <h4>Mes Factures</h4>
                <TrierDateFacture handleChangeDateFacture={handleChangeDateFacture}/>
                                <div  className='facture_cards_inside_title'>
                                     <p className='textL'>client </p>
                                     <p>fichier</p>
                                     <p className='textR'>creation</p>                         
                                 </div>
                {
                    !listeFacture.length > 0 && <div className="pas_de_facture_contrat">Aucune facture</div>
                }

                 {
                     listeFacture.map((element, index) => {
                         return (
                             
                             <div key={index} className='facture_outside'>
                                 <div key={index} className='facture_cards_inside'>
                                     <p className='textL'>{element.nom_client}</p>
                                     <p className='textC'>{element.fileName}</p>
                                     <p className='textR'>{element.date_creation}</p>                         
                                 </div>
                                 <div className='facture_bouton_supprimer'>
                                     <button type="submit" onClick={() => handleDownloadFacture(element)}>Télécharger</button>
                                     
                                 </div>
                                 
                             </div>
                             
                             
                             
                         )
                     })
                 }
                 { isOpen && <ModalDownloadFile setIsOpen={setIsOpen} singleUserInfo={singleUserInfo} type="facture"/> }
             </div>
             </div> 

        </div>
    )
}
