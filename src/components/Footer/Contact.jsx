import React from 'react'

export default function Contact() {
    return (
        <div className="footer_contact_responsive">
            <h2>Contact</h2>
                <div className="footer_contact_localisation_responsive">
                    <i className="fas fa-map-marker-alt"></i>
                    <p className="footer_contact_localisation_adresse">Bureau parc
                    31 av. Jean Moulin
                    77200 Torcy</p>
                </div>
                <div className="footer_contact_localisation_responsive">
                    <i className="fas fa-phone-alt"></i>
                    <p>09 70 75 52 52</p>
                </div>
                <div className="footer_contact_localisation_responsive">
                    <i className="fas fa-envelope"></i>
                    <p>contact@integaphone.fr</p>
                </div>
        </div>
    )
}
