import React from 'react'

export default function TrierTypeContrat() {
    return (
        <div className="facture_date">
            <div className="facture_date_profile">
                    <img src={contrat} alt="facture"/>
                    <h3>Contrats</h3>
            </div>
            <div className="facture_date_details">
        <label>Trier par mois</label>
            <select name="date" id="date-select" onChange={handleChangeDateContrat}>
                <option value="tout">Tous</option>
                <option value="janvier">janvier</option>
                <option value="février">février</option>
                <option value="mars">mars</option>
                <option value="avril">avril</option>
                <option value="mai">mai</option>
                <option value="juin">juin</option>
                <option value="juillet">juillet</option>
                <option value="août">août</option>
                <option value="septembre">septembre</option>
                <option value="octobre">octobre</option>
                <option value="novembre">novembre</option>
                <option value="décembre">décembre</option>
            </select>
            </div>
     </div>
    )
}
