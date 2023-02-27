import React from 'react'

export default function AffichageMenuDynamiqueLogo({element, folder_name, partenaire}) {
    return (
        <>
        
        <div className="affichageMenuDynamiqueLogo container">

            <div className="affichageMenuDynamiqueLogo_inside">
                <div className="affichageMenuDynamiqueImg">
                <img src={require(`../images/${folder_name}/${element.img}`)} alt="logo"/>
                </div>
                <p>{element.text}</p>
            </div>
        </div>
        </>
    )
}
