import React from 'react'
import { Link } from 'react-router-dom'

export default function TestEligibilite() {
    return (
        <>
        <div className="operateur_eligibilite_devis">
                <div className="operateur_eligibilite_devis_inside">
                    <div className="operateur_eligibilite">
                        <Link to="/eligibilite">Tester mon eligibilite</Link>
                    </div>
                    <div className="operateur_devis">
                        <Link to="/formulaire_devis_operateur">Devis operateur</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
