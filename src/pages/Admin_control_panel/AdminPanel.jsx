import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import plus from '../../images/ticket/ajouter-un-utilisateur.png'
import billet from '../../images/ticket/liste_utilisateurs.png'
import coefficient from '../../images/ticket/marge.png'
import RetourRafraichir from '../../components/RetourRafraichir'

export default function AdminPanel() {
    const [isAdmin, setAdmin] = useState(false)
    const [isSuperAdmin, setIsSuperAdmin] = useState(false)


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        
        if(data && (data.isAdmin)){
            setAdmin(true)
        }else if(data && data.isSuperAdmin){
            setIsSuperAdmin(true)
        }else{
            setAdmin(false)
            setIsSuperAdmin(false)
        }
    }, [])
    return (
        <>
        { isAdmin || isSuperAdmin ?  
        <div className="admin">
            <RetourRafraichir />
            <h3 className="ticket_title">Panneau Administration</h3>
            <div className="ticket container">
    
                <Link to="/ajouter_utilisateur">
                    <div className="creation_ticket">
                        <img src={plus} alt="ajouter_user"/>
                        <p>Ajouter un utilisateur</p>
                    </div>
                </Link>
    
                <Link to="/liste_utilisateur">
                <div className="suivre_ticket">
                    <img src={billet} alt="liste_user"/>
                    <p>Listes des utilisateurs</p>
                </div>
                </Link>

                { isSuperAdmin && <Link to="/ajouter_fibre_coefficient">
                <div className="suivre_ticket">
                    <img src={coefficient} alt="liste_user"/>
                    <p>Ajouter une marge</p>
                </div>
                </Link> }
            </div>
        </div>
        :
        <div className='add_user_forbidden container'>
            <p>Vous devez etre administrateur pour accèder à cette page</p>
        </div>
        }
        </>
    )
}
