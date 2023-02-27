import React, {useState, useRef} from 'react'
import logo from '../../images/log/symbole.png'
import RetourRafraichir from '../RetourRafraichir'
import BoutonSubmit from './log_components/ButtonSubmit'
import axios from 'axios'


export default function MotDePasseOublie() {
    const email = useRef()
    const confirmEmail = useRef()

    const [error, setError] = useState('')
    const [errorColor, setErrorColor] = useState('')  


    const mot_de_passe_oublie = async (e) => {
        e.preventDefault()
        setErrorColor('')
        
        if(email.current.value && confirmEmail.current.value && email.current.value === confirmEmail.current.value){
            const payload = {
                email: email.current.value
            } 
           
            await axios.post(`${process.env.REACT_APP_BASE_URL}/api/reset/forgot-password/` , payload) 
            .then((res) => {
                if(res.data === 'Utilisateur inconnu'){
                    setErrorColor('red')
                    setError('Utilisateur inconnu')
                }else{
                    setError(res.data)
                    setErrorColor('green')
                } 

            })
            .catch((err) => console.log(err))
        }else{
            console.log('les mots de passe ne sont pas identique');
            setError('Les emails ne sont pas identique')
            setErrorColor('red')
        } 


    }


    return (
        <>
        <RetourRafraichir path="/"/>
        <div className="connexion">
            <div className="connexion_logo">
                <img src={logo} alt="logo"/>
                <div className="connexion_formulaire">
                    <h1>Mot de passe oublié</h1>
                    <form onSubmit={mot_de_passe_oublie} type="submit">
                        <input type="text" placeholder="Adresse email" ref={email} required />
                        <input type="text" placeholder="Confirmation de l’adresse mail" ref={confirmEmail} required/>
                        <p style={{textAlign:"center", color:errorColor}}>{error}</p>
                        <BoutonSubmit var="Envoyer"/>
                    </form>              
                </div>

            </div>
            
        </div>
        </>
    )
}
