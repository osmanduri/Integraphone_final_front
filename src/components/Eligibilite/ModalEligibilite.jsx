import React, {useState, useEffect} from 'react'
import logo_modal from '../../images/log/symbole.png'
import axios from 'axios'
import validator from 'validator'
export default function ModalEligibilite({isOpen, setIsOpen, element, fullAdress}) {
    const [showDebit, setShowDebit] = useState(true)
    const [debit, setDebit] = useState('')

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [entreprise, setEntreprise] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [commentaire, setCommentaire] = useState('')

    const[errorEmail, setErrorEmail] = useState('')
    const[responseFormulaire, setResponseFormulaire] = useState('') 

    useEffect(() => {
        setDebit(element.debit)
    }, [element.debit])
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorEmail('')
        setResponseFormulaire('')



        const payload = {
            code: element.code,
            libelle: element.libelle,
            operateur:element.operateur,
            prix: element.prix,
            fibre: element.technologie,
            debit: debit,
            nom: nom,
            prenom: prenom,
            entreprise: entreprise,
            email: email,
            telephone: telephone,
            commentaire: commentaire,
            adresse: fullAdress
        }

        if(validator.isEmail(email)){
            axios.post(`${process.env.REACT_APP_BASE_URL}/api/fibre/new`, payload)
            .then((res) => {
                if(res.data){

                    setResponseFormulaire('Devis crée avec succès !')
                    setNom('')
                    setPrenom('')
                    setEntreprise('')
                    setEmail('')
                    setTelephone('')
                    setCommentaire('')
                    setEmail('')
                    alert('Votre devis à été envoyé par email')

                    axios.post(`${process.env.REACT_APP_BASE_URL}/api/fibre/new_admin`, payload)
                    .then((res) => {

                    })
                    .catch(err => {
                        console.log(err)
                    })
                } 
                
            })
            .catch((err) => {
                console.log(err)
                setResponseFormulaire("une erreur est survenue lors de l'envoie")
            })


        }else{
            console.log('this email is not valid')
            setErrorEmail("Cette email n'est pas valide")
        }

        

    }

    const handleDebit = () => {
        setShowDebit(!showDebit)
    }

    const handleClickChoixDebit = (choix) => {
        setDebit(choix);
        setShowDebit(!showDebit)
        const debit = document.getElementById('debit');
        debit.value = choix;
    }
    return (
        <div className="eligibilite_modal"
        style={{ transform: isOpen ? 'translateY(50vh)' : 'translateY(-1000vh)' }}
        
        >
            <div className="modal_cross">
                <i onClick={() => setIsOpen(false)} className="fa-solid fa-xmark"></i>
            </div>
            <div className="modal_logo">
                <img src={logo_modal} alt="modal_logo"/>
                <h3>Formulaire Fibre</h3>
            </div>
            <div className="modal_data">
            <p>Technologie: <strong>{element.technologie}</strong></p>
            {
                element.debit === "personnalise" ? 
                (
                
                <div className="liste_modal_devis">
                    <input type="text" placeholder="Debit" id="debit"/>
                    {
                        showDebit ? (
                            <i onClick={handleDebit} className="fas fa-sort-down"></i>
                        ) : 
                        
                        (
                            <>
                            <i onClick={handleDebit} className="fas fa-sort-up"></i>
                            <div className="liste_deroulant_debit">
                                <p onClick={() => handleClickChoixDebit("100 Mb/s")}>100 Mb/s</p>
                                <p onClick={() => handleClickChoixDebit("1 Gb/s")}>1 Gb/s</p>
                                <p onClick={() => handleClickChoixDebit("10 Gb/s")}>10 Gb/s</p>
                                <p onClick={() => handleClickChoixDebit("25 Gb/s")}>25 Gb/s</p>
                                <p onClick={() => handleClickChoixDebit("100 Gb/s")}>100 Gb/s</p>
                            </div>
                        </>
                        )
                    }
                    
                </div>
                
                ) 

                : 

                ( <p>Debit: <strong>{element.debit}</strong></p> )
            }
            
            </div>
            <form type="submit" onSubmit={handleSubmit}>
                <label>Nom</label>
                <input onChange={e => setNom(e.target.value)} type="text" placeholder="Ex : Doe" required value={nom}/>
                <label>Prenom</label>
                <input onChange={e => setPrenom(e.target.value)} type="text" placeholder="Ex : John" required value={prenom}/>
                <label>Entreprise</label>
                <input onChange={e => setEntreprise(e.target.value)} type="text" placeholder="Ex: Integraphone" required value={entreprise}/>
                <label>Email</label>
                <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Ex: john.doe@gmail.com" required value={email}/>
                <p>{errorEmail}</p>
                <label>Telephone</label>
                <input onChange={e => setTelephone(e.target.value)} type="text" placeholder="Ex: 062792...." required value={telephone}/>
                <label>Commentaire</label>
                <textarea onChange={e => setCommentaire(e.target.value)} type="text" placeholder="Minimun 5 caracteres" minLength="5" value={commentaire}/>
                <button>Envoyer</button>
                <p>{responseFormulaire} </p>
            </form>
            
        </div>
    )
}
