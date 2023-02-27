import React, {useState, useEffect, useContext} from 'react'
import RetourRafraichir from '../../components/RetourRafraichir'
import axios from 'axios'
import { UserContext } from '../../userContext'
import { Link } from 'react-router-dom'
import ModalDeleteUser from '../../components/Modal/ModalDeleteUser'

export default function ListeUtilisateurs() {
    const {userData, setUserData} = useContext(UserContext);
    const [listeUtilisateur, setListeUtilisateur] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [singleUserInfo, setSingleUserInfo] = useState({})
    const [responsive, setResponsive] = useState(true) 

    const [deleteUserUseEffect, setDeleteUserUseEffect] = useState(false)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        setUserData(data)
        async function fetchData(){
            await axios.get(`${process.env.REACT_APP_BASE_URL}/api/users/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${data && data.token}`
                }
            })
            .then((res) => {
                const result = res.data.filter((user) => { // On affiche tout les utilisateurs sauf celui qui est connecté
                    return user._id !== data._id
                  })
                setListeUtilisateur(res.data)
                
            })
            .catch((err) => {
                console.log(err)
            })
        }
        
        function calculResponsive(){
            if(window.innerWidth <= 1024){
                setResponsive(true)
            }else if(window.innerWidth > 1024){
                setResponsive(false)
            } 
        }


        if(data && (data.isAdmin || data.isSuperAdmin)){
            fetchData();
        }

        calculResponsive();

        

        
    }, [deleteUserUseEffect])

    window.addEventListener('resize', showResponsive);

    function showResponsive(){
        if(window.innerWidth <= 1024){
            setResponsive(true)
        }else if(window.innerWidth > 1024){
            setResponsive(false)
        } 
    } 

    const handleSearchUser = async (e) => {
        const payload = {
            nom:e.target.value
        }
        
        await axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/filtered` , payload)
        .then((res) => {
            setListeUtilisateur(res.data)
        })
        .catch((err) => {
            console.log(err)
        }) 
    }

    const handleDeleteUser = (user) => {

        setShowDeleteModal(true)
        setSingleUserInfo(user)
    }
    return (
        <>
        {
        userData && (userData.isAdmin || userData.isSuperAdmin) ?
        <div className="liste_utilisateur">
            
            <RetourRafraichir />
            <h1>Liste des utilisateurs</h1>
            <div className="liste_utilisateur_inside">
                <div className="liste_utilisateur_inside_search">
                    <input type="text" placeholder="Rechercher un nom d'utilisateur" onChange={handleSearchUser}/>
                </div>

                <div className="liste_utilisateur_inside_liste">
                    <div className="liste_utilisateur_inside_liste_key">
                        <h4>Nom</h4>
                        <h4>Prenom</h4>
                        <h4>Email</h4>
                        <h4>Entreprise</h4>
                        <h4>Admin</h4>
                    </div>
                    
                    {
                        listeUtilisateur && listeUtilisateur.map((e, index) => {
                    return (                        
                            <div key={index} className="liste_utilisateur_inside_liste_key_axios">
                            <Link key={e._id} to={`/liste_utilisateur/${e._id}`}>
                                <p className='client_uppercase'>{responsive && <p>Nom: </p>} {e.nom}</p>
                                <p className='client_uppercase'>{responsive && <p>Prenom: </p>} {e.prenom}</p>
                                <p>{responsive && <p>Email: </p>} <span>{e.email}</span></p>
                                <p>{responsive && <p>Entreprise: </p>} {e.entreprise}</p>
                                <p>{responsive && <p>Type: </p>} {(e.isAdmin || e.isSuperAdmin) ? "Admin" : "Utilisateur"}</p>
                            </Link>
                            { userData.isSuperAdmin && <i key={index} className="fa-solid fa-trash" onClick={() => handleDeleteUser(e)}></i>}
                                
                            </div>  
                    )
                    })
                    }

                    {
                        showDeleteModal && <ModalDeleteUser key={0} isOpen={showDeleteModal} setIsOpen={setShowDeleteModal} singleUserInfo={singleUserInfo} setDeleteUserUseEffect={setDeleteUserUseEffect}/>
                    }
                                             
                </div>
            </div>
        </div>:
            <div className='add_user_forbidden container'>
                <p>Vous devez etre administrateur pour accèder à cette page</p>
            </div>
        
    }
        </>
    )
}
