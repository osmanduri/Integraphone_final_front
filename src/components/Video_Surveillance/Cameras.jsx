import React from 'react'

export default function Cameras({element}) {
    return (
        <div className="cameras_component">
            <img src={require(`../../images/securite/${element.img}`)} alt="test"/>
            <p>{element.titre}</p>
        </div>
    )
}
