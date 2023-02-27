import React, {useRef, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import RetourRafraichir from '../RetourRafraichir';
import logo from '../../images/log/symbole.png'
import BoutonSubmit from './log_components/ButtonSubmit'

export default function ResetPassword() {
    const password = useRef()
    const confirmPassword = useRef()
    const [linkValid, setLinkValid] = useState(true) 
    let user  = useParams();

    const [eyesPassword, setEyesPassword] = useState('eyes_open')
    const [showPassword, setShowPassword] = useState('password')

    const [motDePasse, setMotDePasse] = useState('')
    const [confirmationMotDePasse, setConfirmationMotDePasse] = useState('')

    //const [errorLogin, setErrorLogin] = useState('')
    const [reponseServeur, setReponseServeur] = useState({
        text:"",
        color:""
    })

    useEffect( async () => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/api/users/verify/userResetPassword/${user.id}`,{
            headers: {
                'Content-Type': 'application/json',
                'token': `${user.token}`
            }
        })
        .then((res) => {
            if(res.data === "Token is not valid !" || res.data === "Vous devez vous connecter"){
                setLinkValid(false)
            } 
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const handleSubmit = async (e)  =>{
        e.preventDefault()

        if(motDePasse && confirmationMotDePasse && motDePasse === confirmationMotDePasse){
            const payload = {
                password:motDePasse
            } 
            await axios.put(`${process.env.REACT_APP_BASE_URL}/api/users/update/password/${user.id}`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${user.token}`
                }   
            })
            .then((res) => {
                setReponseServeur({
                    text: res.data === "Token is not valid !" ? "Vous ne pouvez modifier qu'une seule fois votre mot de passe" : res.data,
                    color:"green"
                })
            })
            .catch((err) => {
                console.log(err)
            })
        }else{
            setReponseServeur({
                text:"Les mots de passe ne correspondent pas !",
                color:"red"
            })
        } 
    } 

    const eyes_function_password = () => {
        
        if(eyesPassword === "eyes_open"){
            setEyesPassword("eyes_close")
            setShowPassword('text')
        }
        if(eyesPassword === "eyes_close"){
            setEyesPassword("eyes_open")
            setShowPassword('password')
        }
    }
  return (
    <>
    <RetourRafraichir path="/"/>
    <div className="connexion">
        <div className="connexion_logo">
            <img src={logo} alt="logo"/>
            {
                linkValid ? (
            <div className="connexion_formulaire">
            <h1>Modification de votre mot de passe</h1>
                <form onSubmit={handleSubmit} type="submit">
                    <div className="devis_password_eyes">
                        <input type={showPassword} placeholder="Mot de passe" onChange={e => setMotDePasse(e.target.value)}  value={motDePasse}/>
                        <img onClick={eyes_function_password} src={require(`../../images/oeil_password/${eyesPassword}.png`)} alt="eyes"/>
                    </div>
                    <div className="devis_password_eyes">
                        <input type={showPassword} placeholder="Confirmation du mot de passe" onChange={e => setConfirmationMotDePasse(e.target.value)}  value={confirmationMotDePasse}/>
                        <img onClick={eyes_function_password} src={require(`../../images/oeil_password/${eyesPassword}.png`)} alt="eyes"/>
                    </div>
                    <p style={{color:reponseServeur.color, textAlign:"center"}}>{reponseServeur.text}</p>
                    <BoutonSubmit var="Connnexion"/>
                </form>                  
            </div> ) :
            (
                <p className="lien_expire">Le lien pour reinitialiser votre mot de passe n'est plus valide<br/> veuillez refaire une nouvelle demande de modification de mot de passe !</p>
            )
            }

        </div>
        
    </div>
    </>
  )
}
