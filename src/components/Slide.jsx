import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Navigation } from "swiper";
import slide from '../images/slide/5.png'
import slide1 from '../images/slide/1.png'
import slide2 from '../images/slide/2.png'
import slide3 from '../images/slide/3.png'
import slide4 from '../images/slide/4.png'
import logo_slide from '../images/LOGO_baseline_jr.png'
export default function Slide() {
    return (
        <div className="slide">
            <Swiper
                    direction={"vertical"}
                    slidesPerView={1}
                    spaceBetween={90}
                    pagination={{
                        clickable: true
                      }}
                    modules={[Pagination, Navigation, Autoplay]}
                    loop={true}
                    autoplay={{
                        delay:8500,
                        disableOnInteraction:true
                    }}
                    className="mySwiper"
            >
                <SwiperSlide>
                <div className="slide_img">
                        <img src={slide} alt="img"/>
                        <div className="slide_text_home">
                            <h2>Integraphone</h2>
                            <h3>La solution à votre entreprise</h3>
                            <div className="slide_text_home_inside">
                                <span><p>Opérateur agréé ARCEP depuis 2012, Integraphone accompagne les entreprises de Paris et d’Ile-de-France, de toute taille et de tout secteur, dans de nombreux domaines dont l’infogérance, la communication et la sécurisation des locaux. </p></span>
                            </div>
                            
                            <div className="slide_background_button">
                                <Link to="/operateur">Découvrir nos offres</Link>
                                <span style={{background:"#DCC28F"}}><Link to="/eligibilite">Tester votre éligibilité</Link></span>
                                
                            </div>
                            <div className="logo_slide_img">
                                <img src={logo_slide} alt="logo_slide"/>
                            </div>
                        </div>
                </div> 
                </SwiperSlide>
                <SwiperSlide>
                <div className="slide_img">
                        <img src={slide1} alt="img"/>
                        <div className="slide_text_home">
                            <h2>Integraphone</h2>
                            <h3>La solution à votre entreprise</h3>
                            <div className="slide_text_home_inside">
                                <h3>Opérateur</h3>
                                <p>Fibre optique, téléphonie IP ou mobile, Integraphone gère l’ensemble de vos abonnements et adapte vos forfaits selon vos critères et vos besoins.</p>
                            </div>
                            
                            <div className="slide_background_button">
                                <Link to="/formulaire_devis_operateur">Devis operateur</Link>
                                <span style={{background:"#DCC28F"}}><a href="/operateur">Découvrir nos offres</a></span>
                                
                            </div>
                            <div className="logo_slide_img">
                                <img src={logo_slide} alt="logo_slide"/>
                            </div>
                        </div>
                </div> 
                </SwiperSlide>
                <SwiperSlide>
                <div className="slide_img">
                        <img src={slide4} alt="img"/>
                        <div className="slide_text_home">
                            <h2>Integraphone</h2>
                            <h3>La solution à votre entreprise</h3>
                            <div className="slide_text_home_inside">
                                <h3>Infogérance</h3>
                                <p>La productivité d’une entreprise passe par une infrastructure informatique fiable et performante. Câbler, héberger, protéger et stocker, Integraphone vous apporte son expertise pour une infogérance externalisée !</p>
                            </div>
                            
                            <div className="slide_background_button">
                                <Link to="/formulaire_devis_infogerance">Devis infogérance</Link>
                                <span style={{background:"#037EAC"}}><a href="/infogerance">Découvrir nos offres</a></span>
                            </div>
                            <div className="logo_slide_img">
                                <img src={logo_slide} alt="logo_slide"/>
                            </div>
                        </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="slide_img">
                        <img src={slide3} alt="img"/>
                        <div className="slide_text_home">
                            <h2>Integraphone</h2>
                            <h3>La solution à votre entreprise</h3>                           
                            <div className="slide_text_home_inside">
                                <h3>Sécurité</h3>
                                <p>Parce que l’activité ne peut pas se développer sans sérénité, Integraphone sécurise vos locaux, à tous niveaux, grâce à des solutions de vidéosurveillance, alarme et contrôle d’accès !</p>
                            </div>
                            
                            <div className="slide_background_button">
                                <Link to="/formulaire_devis_securite">Devis securite</Link>
                                <span style={{background:"#85A1B1"}}><a href="/securite">Découvrir nos offres</a></span>
                            </div>
                            <div className="logo_slide_img">
                                <img src={logo_slide} alt="logo_slide"/>
                            </div>
                        </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="slide_img">
                        <img src={slide2} alt="img"/>
                        <div className="slide_text_home">
                            <h2>Integraphone</h2>
                            <h3>La solution à votre entreprise</h3>                        
                            <div className="slide_text_home_inside">
                                <h3>Communication</h3>
                                <p>Optimisez la communication interne et externe de votre entreprise grâce à nos systèmes de conférence (audio, vidéo, web), Web RTC et affichage dynamique !</p>
                            </div>
                            
                            <div className="slide_background_button">
                                <Link to="/formulaire_devis_communication">Devis communication</Link>
                                <span style={{background:"#BB8D33"}} ><a href="/communication">Découvrir nos offres</a></span>
                            </div>
                            <div className="logo_slide_img">
                                <img src={logo_slide} alt="logo_slide"/>
                            </div>
                        </div>
                        
                </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    )
}
