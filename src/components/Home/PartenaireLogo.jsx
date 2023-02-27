import React from 'react'
import data_cameras from '../../data/cameras'
import data_partenaire_logo from '../../data/partenaire_logo'
import Camera from '../../components/Video_Surveillance/Cameras'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay} from "swiper";
import certification_caroussel from '../../data/caroussel_certification'
import CertificationCaroussel from './CertificationCaroussel';

export default function PartenaireLogo() {
    return (
        <>
        <div className="partenaire_logo container">
            {
                data_partenaire_logo.map(element => {
                    return (
                        <div key={element.id} className="partenaire_logo_inside">
                        <img src={require(`../../images/partenaires/${element.img}.png`)} alt="logo_partenaire"/>
                        </div>
                    )
                })
            }
            
        </div>
        <div className="title_certification">
                <h1>Nos Partenaires</h1>
        </div>
        <div className="carousel_certification">

        <Swiper
                slidesPerView={4}
                spaceBetween={40}
                freeMode={true}
                pagination={false}
                loop={true}
                autoplay={{
                    delay:2500,
                    disableOnInteraction:false
                }}
                navigation={false}
                scrollbar={false}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
        >
        <div className="video_surveillance_nos_cameras">
        {
            certification_caroussel.map((element, index) => {
                return(
                    <SwiperSlide key={index}>
                        <CertificationCaroussel element={element} key={index}/>
                    </SwiperSlide>
                )               
            })
        }
        
        </div>
        </Swiper>
        </div>
        </>
    )
}
