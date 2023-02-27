import React, { useEffect, useContext}   from 'react'
import { NavLink, Link } from 'react-router-dom'
import { UserContext } from '../userContext'
import Cookies from 'universal-cookie'
import BoutonEligibilite from './Eligibilite/BoutonEligibilite';


export default function Header() {
    const {userData, setUserData} = useContext(UserContext);
    const cookies = new Cookies();
    useEffect(() =>{
        const data = localStorage.getItem('storage-userData');
        if(data){
            setUserData(JSON.parse(data))
        }
    },[])

    const handleDisconnect = async () =>{
        localStorage.removeItem('storage-userData');
        cookies.remove("jwt")
        setUserData(null)
        //window.location.reload()
        window.location.href = "/"
    } 
    return (

        <div className="header">
            <div className="header_inside container">
                <div className="header_info_left">
                    <a href="mailto:contact@integraphone.fr">contact@integraphone.fr</a>
                    <div className="trait_header"></div>
                    <p><span>09 70 75 52 52</span></p>
                </div>
                <Link to="/eligibilite"><BoutonEligibilite/></Link>
                {
                    !userData ? (
                        <div className="header_info_right">
                        <NavLink to="/connexion" exact activeClassName="header-active" className="hover"><span>Connexion</span></NavLink>
                        <div className="trait_header"></div>
                        <NavLink to="/inscription" exact activeClassName="header-active" className="hover"><span>Devenir partenaire</span></NavLink>
                        </div>
                    )
                    :
                    (
                        <div className="header_info_right">
                            <span className="bienvenur_header">Bienvenue <div className="pseudo_header">{userData.prenom}</div></span>
                            <div className="trait_header"></div>
                            <span className='disconnect' onClick={handleDisconnect}>Deconnexion</span>
                        </div>
                    )

                }    

            </div>
        </div>
    )
}
