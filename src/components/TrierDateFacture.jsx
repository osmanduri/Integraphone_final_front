import React from 'react'
import facture from '../images/ticket/facture1.png'

export default function TrierDateFacture({handleChangeDateFacture}) {
    return (
        <div className="facture_date">
            <div className="facture_date_profile">
                <img src={facture} alt="facture"/>
                <h3>Factures</h3>
            </div>
            <div className="facture_date_details">
                <label>Trier par mois</label>
                    <select className="trier_facture_date_select" name="trie_facture" id="trie_facture" onChange={handleChangeDateFacture}>
                        <option value="tous">Tous</option>
                        <option value={1}>dernier mois</option>
                        <option value={2}>2 derniers mois</option>
                        <option value={3}>3 derniers mois</option>
                        <option value={4}>4 derniers mois</option>
                        <option value={5}>5 derniers mois</option>
                        <option value={6}>6 derniers mois</option>
                        <option value={7}>7 derniers mois</option>
                        <option value={8}>8 derniers mois</option>
                        <option value={9}>9 derniers mois</option>
                        <option value={10}>10 derniers mois</option>
                        <option value={11}>11 derniers mois</option>
                        <option value={12}>12 derniers mois</option>
                        <option value={13}>13 derniers mois</option>
                    </select>
            </div>

     </div>
    )
}
