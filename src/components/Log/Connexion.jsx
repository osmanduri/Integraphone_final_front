import React, { useState, useContext } from 'react'
import logo from '../../images/log/symbole.png'
import BoutonSubmit from './log_components/ButtonSubmit'
import { Link } from 'react-router-dom'
import RetourRafraichir from '../RetourRafraichir'
import axios from 'axios'
import { UserContext } from '../../userContext'
import Cookies from 'universal-cookie/es6'

export default function Connexion() {

    const [eyesPassword, setEyesPassword] = useState('eyes_open')
    const [showPassword, setShowPassword] = useState('password')

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    //const [errorLogin, setErrorLogin] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const { setUserData } = useContext(UserContext)

    const handleLogin = async (e) => {
        e.preventDefault()
        setErrorPassword('')
        const payload = {
            email:loginEmail,
            password: loginPassword
        }

        axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/login` , payload)
        .then((res) => {
            if(res.data.message){
                setErrorPassword(res.data.message)
            }else{
                //console.log(res.data)
                //cookies.set('my_token', res.data.token, { path: '/'})
                setUserData(res.data)
                localStorage.setItem('storage-userData', JSON.stringify(res.data))
                window.location.href = "/"
            }
        })
        .catch((err) => {
            console.log(err)
            
        })
        /*const cookies = new Cookies()
        axios.post(`http://localhost:5002/api/users/login` , payload)
        .then((res) => {
            console.log(res.data)

            cookies.set('access_token', res.data)
        })
        .catch((err) => console.log(err))*/
        
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
                
                <div className="connexion_formulaire">
                <h1>Connexion</h1>
                    <form onSubmit={handleLogin} type="submit">
                        <input type="text" placeholder="Adresse email" onChange={e => setLoginEmail(e.target.value)}  value={loginEmail} required/>
                        <div className="devis_password_eyes">
                            <input type={showPassword} placeholder="Mot de passe" onChange={e => setLoginPassword(e.target.value)}  value={loginPassword} required/>
                            <img onClick={eyes_function_password} src={require(`../../images/oeil_password/${eyesPassword}.png`)} alt="eyes"/>
                            <p className="connexion_error">{errorPassword}</p>
                        </div>
                        <Link to="/mot_de_passe_oublie">Mot de passe oublié</Link>
                        <BoutonSubmit var="Connnexion"/>
                    </form>                  
                </div>

            </div>
            
        </div>
        </>
    )
}
