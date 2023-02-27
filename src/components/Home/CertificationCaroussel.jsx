import React from 'react'

export default function CertificationCaroussel({element}) {
    return (
        <div className="carousel_component">
            <img src={require(`../../images/certification/${element}`)} alt="test"/>
        </div>
    )
}
