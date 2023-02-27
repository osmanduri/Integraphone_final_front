import React, {useState, useContext, useEffect} from 'react'
import RetourRafraichir from '../../components/RetourRafraichir'
import logo from '../../images/logo_base_blanche.png'
import axios from 'axios'
import isEmail from 'validator/lib/isEmail'
import { UserContext } from '../../userContext'
//import 'dotenv/config'
export default function AddUser() {
    const {userData, setUserData} = useContext(UserContext);
    const [isUser, setIsUser] = useState(false)
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [entreprise, setEntreprise] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('') 
    const [password, setpassword] = useState('')

    const[responseFormulaire, setResponseFormulaire] = useState('')

    const [styleError, setStyleError] = useState('green') 

    const [isAdmin, setIsAdmin] = useState(false)
    const [isSuperAdmin, setIsSuperAdmin] = useState(false)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        setUserData(data)
        if(data && (data.isAdmin || data.isSuperAdmin)){
            setIsUser(true)
        }else{
            //window.location.href = "/"

            setTimeout(() => {
                //window.location.href = "/"
            }, 3000)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        setResponseFormulaire('')

        if(isEmail(email)){
            const payload = {
                nom,
                prenom,
                entreprise,
                email,
                telephoneMobile:phoneNumber,
                password,
                isAdmin,
                isSuperAdmin
            }
    
            axios.post(` ${process.env.REACT_APP_BASE_URL}/api/users/add` , payload ,{
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${userData && userData.token}`
                }
            }, {
                withCredentials: true,
            })
            .then((res) => {
                if(res.data === 'Ce nom est déjà utilisé !' || res.data === 'Ce prenom est déjà utilisé !' || res.data === 'Cet email est déjà utilisé !'|| res.data === 'Token is not valid !'   ){
                    setResponseFormulaire(res.data)
                    setStyleError('red')
                }else{
                    setResponseFormulaire('Utilisateur ajouté avec succès !')
                    setStyleError('green')
                } 
            })
            .catch((err) => {
                setResponseFormulaire(err.message)
            })
        }else{
            setResponseFormulaire('format email incorrect !')
        }

    }

    const handleCheckboxAdmin = (e) => {
        const c1 = document.getElementById('admin')
        const c2 = document.getElementById('superAdmin')


        
        if(e.target.checked && e.target.name === "admin"){
            setIsAdmin(true)
            setIsSuperAdmin(false)
            c2.checked = ""
        }else if(e.target.checked && e.target.name === "superAdmin"){
            setIsAdmin(false)
            setIsSuperAdmin(true)
            c1.checked = ""
        }
    }


    return (
        <>
        {
                isUser ?
                <div className="add_user">
                    <RetourRafraichir path="/"/>
                    <form type="submit" onSubmit={handleSubmit}>
                        <img src={logo} alt="logo_add_user"/>
                        <h2>Ajouter un utilisateur</h2>
                        <input onChange={e => setNom(e.target.value)} type="text" placeholder="Nom" required value={nom}/>
                        <input onChange={e => setPrenom(e.target.value)} type="text" placeholder="Prénom" required value={prenom}/>
                        <input onChange={e => setEntreprise(e.target.value)} type="text" placeholder="Entreprise" required value={entreprise}/>
                        <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" required value={email}/>
                        <input onChange={e => setPhoneNumber(e.target.value)} type="text" placeholder="Telephone Mobile" required value={phoneNumber}/>
                        <input onChange={e => setpassword(e.target.value)} type="password" placeholder="Mot de passe" required value={password}/>
                        {
                        userData && userData.isSuperAdmin && <div className="isAdmin">
                            <div className='isAdmin_checkbox'>
                                <input type="checkbox" id="admin" name="admin" onChange={handleCheckboxAdmin}/>
                                <label>Admin (Lecture)</label>
                            </div>
                            <div className='isAdmin_checkbox'>
                                <input type="checkbox" id="superAdmin" name="superAdmin" onChange={handleCheckboxAdmin}/>
                                <label>Super Admin (Lecture/Ecriture)</label>
                            </div>

                        </div>
                        }
                        <button>Ajouter un utilisateur</button>
                        <p style={{color:styleError}}>{responseFormulaire} </p>
                    </form>
                </div> 
                : 
                <div className='add_user_forbidden container'>
                    <p>Vous devez etre administrateur pour accèder à cette page</p>
                </div>
        }

        </>
    )
}
