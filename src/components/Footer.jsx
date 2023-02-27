import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_main container">
                <div className="footer_main_menu_contact">
                    <div className="footer_main_menu">
                        <div className="footer_operateur">
                            <h2>Opérateur</h2>
                            <Link to="/operateur/fibre_optique">Fibre optique</Link><br/>
                            <Link to="/operateur/telephonie_ip">Téléphonie IP</Link><br/>
                            <Link to="/operateur/telephonie_mobile">Téléphonie Mobile</Link>
                        </div>
                        <div className="footer_trait"/>
                        <div className="footer_operateur">
                            <h2>Infogérance</h2>
                            <Link to="/infogerance/serveur_et_hebergement">Serveur</Link><br/>
                            <Link to="/infogerance/protection_des_donnees">Protection des données</Link><br/>
                            <Link to="/infogerance/cablage_reseaux">Câblage</Link><br/>
                            <Link to="/infogerance/saas_et_laas">Saas</Link>
                        </div>
                        <div className="footer_trait"/>
                        <div className="footer_operateur">
                            <h2>Sécurité</h2>
                            <Link to="/securite/video_surveillance">Video surveillance</Link><br/>
                            <Link to="/securite/alarme">Alarme</Link><br/>
                            <Link to="/securite/controle_acces">Contrôle d'accès</Link>
                        </div>
                        <div className="footer_trait"/>
                        <div className="footer_operateur">
                            <h2>Communication</h2>
                            <Link to="/communication/systemes_de_conference">Système de conférence</Link><br/>
                            <Link to="/communication/web_rtc">Web RTC</Link><br/>
                            <Link to="/communication/systemes_de_conference">Affichage dynamique</Link>
                        </div>
                    </div>
                    <div className="footer_contact">
                            <h2>Contact</h2>
                            <div className="footer_contact_localisation">
                            <i className="fas fa-map-marker-alt"></i>
                            <p className="footer_contact_localisation_adresse">Buroparc
                            31 av. Jean Moulin
                            77200 Torcy</p>
                            </div>
                            <div className="footer_contact_localisation">
                            <i className="fas fa-phone-alt"></i>
                            <p>09 70 75 52 52</p>
                            </div>
                            <div className="footer_contact_localisation">
                            <i className="fas fa-envelope"></i>
                            
                            
                            {<Link to="mailto:contact@integraphone.fr"><span>contact@integraphone.fr</span></Link>}
                            </div>
                    </div>
                </div>
                <div className="footer_coyright">
                    <div className="footer_mentions_legales">
                    <Link to="/mention">Mentions légales</Link>
                    <div className="footer_trait_copyright"/>
                    <Link to="/rgpd">Données personnelles et sécurité</Link>
                    <div className="footer_trait_copyright"/>
                    <Link to="/mention">Gestion des cookies</Link>
                    <div className="footer_trait_copyright"/>
                    <Link to="/rgpd">Charte RGPD</Link>                
                    </div>
                    <div className="footer_reseaux_sociaux">
                    <a href="https://www.facebook.com/Integraphone/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/Integraphone" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.youtube.com/user/Integraphone" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.linkedin.com/company/integraphone/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

            </div>          
        </div>
    )
}
