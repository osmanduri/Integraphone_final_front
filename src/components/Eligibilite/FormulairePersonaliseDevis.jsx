import React, {useState} from 'react'
import Modal from '../Eligibilite/ModalEligibilite'
export default function FormulairePersonaliseDevis() {
    const [isOpen, setIsOpen] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <div className="cards_eligibilite_inside">
            
            <div className="cards">
                <button type="submit" onClick={() => setIsOpen(true)}>Devis</button>
            </div>
           { 
                    <div className="eligibilite_modal_outside">
                        <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>         
                    </div>
                             
           } 
        </div>
    )
}
