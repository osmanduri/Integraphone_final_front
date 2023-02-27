import React, {useState, useEffect} from 'react'
//import Modal from '../Eligibilite/ModalEligibilite'
import Modal from 'react-modal'
import logo_modal from '../../images/log/symbole.png'
import validator from 'validator'
import axios from 'axios'

let customStylesAfterAdd = {
    content: {
      top: '55%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor:"white",
      width:"650px",
      height:"800px",
      boxShadow: "0px 1px 3px rgb(187, 141, 51)",
      border:"3px solid rgb(187, 141, 51)",
      borderRadius: "10px",
      zIndex:"999",
      padding:"40px"
      
      
    },
    overlay:{
        backgroundColor:"rgb(0,0,0, 0.2)",
        
    }
  };

  Modal.setAppElement('#root');




export default function CardsEligiblite({element, fullAdress}) {
    const [isOpen, setIsOpen] = useState(false)

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [entreprise, setEntreprise] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [commentaire, setCommentaire] = useState('')

    const[errorEmail, setErrorEmail] = useState('')
    const[responseFormulaire, setResponseFormulaire] = useState('')

    const showBurgerMenu = () => {
        if(window.innerWidth <= 1024){
            customStylesAfterAdd = {
                content: {
                    top: '43%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor:"white",
                    width:"80%",
                    height:"auto",
                    boxShadow: "0px 1px 3px rgb(187, 141, 51)",
                    border:"3px solid rgb(187, 141, 51)",
                    borderRadius: "10px",
                    zIndex:"999",
                    padding:"40px"
                    
                    
                  },
                  overlay:{
                      backgroundColor:"rgb(0,0,0, 0.2)",
                      
                  }
            }
        }
        else if(window.innerWidth > 1024){
            customStylesAfterAdd = {
                content: {
                  top: '55%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor:"white",
                  width:"650px",
                  height:"800px",
                  boxShadow: "0px 1px 3px rgb(187, 141, 51)",
                  border:"3px solid rgb(187, 141, 51)",
                  borderRadius: "10px",
                  zIndex:"999",
                  padding:"40px"
                  
                  
                },
                overlay:{
                    backgroundColor:"rgb(0,0,0, 0.2)",
                    
                }
              }
        }
    }
    
        window.addEventListener('resize', showBurgerMenu);
    
        useEffect(() => {
            showBurgerMenu();
        }, [])    

    function closeModalProductAdded(){
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
         
      }

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
            debit: element.debit,
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
    return (
        <>
        
        <div className="cards_eligibilite_inside">
            
            <div className="cards">
                <p>Technologie: <strong>{element.technologie}</strong></p>              
                <p>Debit: <strong>{element.debit}</strong></p> 
                <p>Prix: <strong style={{fontSize:"20px"}}>{element.prix} €</strong></p> 
                <button type="submit" onClick={openModal}>Choisir</button>
            </div>
                        {/*<Modal isOpen={isOpen} setIsOpen={setIsOpen} element={element} fullAdress={fullAdress}/>*/}
        </div>
                        <Modal
                        isOpen={isOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModalProductAdded}
                        style={customStylesAfterAdd}
                        contentLabel="View product"
                        closeTimeoutMS={100}
                        openTimeoutMS={300}
                        >
                    <div className="modal_formulaire_fibre">
                    <div className="modal_cross">
                        <i onClick={() => setIsOpen(false)} className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="modal_logo">
                        <img src={logo_modal} alt="modal_logo"/>
                        <h3>Formulaire Fibre</h3>
                    </div>
                    <div className="modal_data">
                    <p>Technologie: <strong>{element.technologie}</strong></p>
                    <p>Debit: <strong>{element.debit}</strong></p> 
                    <p>Prix: <strong>{element.prix} €</strong></p>
                    
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
                        <p style={responseFormulaire === "Devis crée avec succès !" ? {color:"green"} : {color:"red"}}>{responseFormulaire} </p>
                    </form>
                    </div>
                        </Modal>
                        </>
    )
}
