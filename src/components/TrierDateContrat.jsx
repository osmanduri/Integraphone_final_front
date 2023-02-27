import React from 'react'
import contrat from '../images/ticket/contrat1.png'

export default function TrierDateContrat({handleChangeDateContrat}) {
    return (
        <div className="facture_date">
            <div className="facture_date_profile">
                    <img src={contrat} alt="facture"/>
                    <h3>Contrats</h3>
            </div>
            <div className="facture_date_details">
        <label>Trier par type de contrat</label>
            <select className="trier_type_contrat_select" name="type" id="type-select" onChange={handleChangeDateContrat}>
                <option value="tous">Tous</option>
                <option value="bdc_dss">BDC DSS</option>
                <option value="bdc_hebergement">BDC HEBERGEMENT</option>
                <option value="bdc_internet">BDC INTERNET</option>
                <option value="bdc_mobile">BDC MOBILE</option>
                <option value="bdc_telephonie">BDC TELEPHONIE</option>
                <option value="maint_distance">MAINT. A DISTANCE</option>
                <option value="maint_informatique">MAINT. INFORMATIQUE</option>
                <option value="maint_telephonie">MAINT. TELEPHONIE</option>
                <option value="maint_videoprotection">MAINT. VIDEOPROTECTION</option>
                <option value="loc_informatique">LOCATION INFORMATIQUE</option>
                <option value="loc_telephonie">LOCATION TELEPHONIE</option>
                <option value="abonnement_infogerance">ABONNEMENT INFOGERANCE</option>
            </select>
            </div>
     </div>
    )
}
