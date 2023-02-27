import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../../userContext'
import { Link } from 'react-router-dom'
import plus from '../../images/ticket/contrat1.png'
import billet from '../../images/ticket/facture1.png'
import RetourRafraichir from '../../components/RetourRafraichir'


export default function Historique() {
    const [isUser, setIsUser] = useState(false)
    const {userData, setUserData} = useContext(UserContext);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        setUserData(data)
       
        if(data){
            setIsUser(true)
        }else{
            //window.location.href = "/"
        }
    }, [])
    return (
        
        <>
        { 
            isUser ?
            <>
            <RetourRafraichir path="/"/>
            <h3 className="ticket_title">Contrats</h3>
            <div className="ticket container">
    
                <Link to={`/liste_contrats/utilisateur/${userData && userData._id}`}>
                    <div className="creation_ticket">
                        <img src={plus} alt="creation ticket"/>
                        <p>Contrats</p>
                    </div>
                </Link>
    
                <Link to={`/liste_factures/utilisateur/${userData && userData._id}`}>
                <div className="suivre_ticket">
                    <img src={billet} alt="suivre ticket"/>
                    <p>Factures</p>
                </div>
                </Link>
            </div>
            </> :
            <div className='add_user_forbidden container'>
                    <p>Vous devez etre connecté pour accèder à cette page</p>
            </div>
        
        }
        </>
    )
}
