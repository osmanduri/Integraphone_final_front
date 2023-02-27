import React, { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo_integrephone from '../images/LOGO_horizontal.png'
import logo from '../images/LOGO_baseline.png'
import { UserContext } from '../userContext'
import Cookies from 'universal-cookie'

export default function Navigation() {
    const [displayMenu, setDisplayMenu] = useState(true)
    const [click, setClick] = useState(false)
    const [user, setUser] = useState()
    const {userData, setUserData} = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)
    const cookies = new Cookies();

    const handleClick = () => {
        setClick(!click)
    }


    const showBurgerMenu = () => {
        if(window.innerWidth <= 1024){
            setDisplayMenu(false)
        }
        else if(window.innerWidth > 1024){
            setDisplayMenu(true)
        }
    }

    window.addEventListener('resize', showBurgerMenu);

    useEffect(() => {
        showBurgerMenu();
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        if(data){
            if(data.isAdmin || data.isSuperAdmin){
                setIsAdmin(true)
            }else{
                setIsAdmin(false)
            }
            setUser(true)
        }else{
            setUser(false)
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
        <>
        {
            displayMenu ? (
                <div className="navigation">
                <div className="navigation_inside container">
                    <div className="logo_navigation">
                        <NavLink to="/"><img src={logo_integrephone} alt="logo"/></NavLink>
                    </div>
                    <div className="navigation_menu">
                        <ul>
                        <NavLink to="/operateur"  className="border_color_navigation_operateur" exact activeClassName="nav-active_operateur">
                                <li><span>Opérateur</span></li>
                        </NavLink>
                        <NavLink to="/infogerance"  className="border_color_navigation_infogerance" exact activeClassName="nav-active_infogerance">
                                <li><span>Infogérance</span></li>
                        </NavLink>
                        <NavLink to="/securite"  className="border_color_navigation_securite" exact activeClassName="nav-active_securite">
                                <li><span>Sécurité</span></li>
                        </NavLink>
                        <NavLink to="/communication"  className="border_color_navigation_communication" exact activeClassName="nav-active_communication">
                                <li><span>Communication</span></li>
                        </NavLink>
                        <NavLink to="/a_propos"  className="border_color_navigation_a_propos" exact activeClassName="nav-active_a_propos">
                                <li><span>À propos</span></li>
                        </NavLink>
                        {
                                            /*<NavLink to="/ticket"  className="border_color_navigation_a_propos" exact activeClassName="nav-active_a_propos">
                                                    <li><span>Ticket</span></li>
                                            </NavLink>*/
                        }
                        {
                                            user &&
                                            <NavLink to="/documents"  className="border_color_navigation_a_propos" exact activeClassName="nav-active_a_propos">
                                                    <li><span>Documents</span></li>
                                            </NavLink>
                        }
                        {
                                            isAdmin &&
                                            <NavLink to="/admin"  className="border_color_navigation_a_propos" exact activeClassName="nav-active_a_propos">
                                            <li><span>Admin</span></li>
                                            </NavLink>
                        }

                        </ul>
                    </div>
                </div>
                </div>
            ) : (
                <div className="burger_menu">
                <div className="burger_menu_inside">
                    <img src={logo} alt="logo_burger_menu"/>
                    <div className="burger_menu_right">
                        <i onClick={handleClick} className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                        {user ? <a onClick={handleDisconnect}><i className="fa-solid fa-right-from-bracket"></i></a> : <a href="/connexion"><i className="fa-solid fa-user"></i></a> }  
                    </div>
                </div>

                
                {
                <div className={click ? 'navbar_mobile active' : 'navbar_mobile'}>
                    <ul>
                        <li style={{border:"2px solid #DCC28F"}} ><a href="/">Accueil</a></li>
                        <li style={{border:"2px solid #DCC28F"}} ><a href="/operateur">Opérateur</a></li>
                        <li style={{border:"2px solid #037EAC"}} ><a href="/infogerance">Infogérance</a></li>
                        <li style={{border:"2px solid #85A1B1"}} ><a href="/securite">Sécurité</a></li>
                        <li style={{border:"2px solid #BB8D33"}} ><a href="/communication">Communication</a></li> 
                        <li style={{border:"2px solid #E5E5E5"}} ><a href="/a_propos">A propos</a></li>
                        { user && <li style={{border:"2px solid #484848"}} ><a href="/documents">Documents</a></li> }  
                        { isAdmin && <li style={{border:"2px solid #484848"}} ><a href="/admin">Admin</a></li>}
                        { !user && <li style={{border:"2px solid #484848"}} ><a href="/inscription">Devenir partenaire</a></li> } 
                        { user ? <li style={{border:"2px solid #484848"}} className='disconnect' onClick={handleDisconnect}>Deconnexion</li>
                                :<li style={{border:"2px solid #484848"}} ><a href="/connexion">Connexion</a></li>
                        }
                                         
                    </ul>
                </div>

                }
                </div>
            )
        }
        </>
    )
}
