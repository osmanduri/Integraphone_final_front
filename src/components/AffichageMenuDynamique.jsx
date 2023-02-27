import React from 'react'
export default function AffichageMenuDynamique({element, folder_name, partenaire}) {
    return (
        <>
        
        <div className={partenaire ? "affichageMenuDynamique_partenaire container" : "affichageMenuDynamique container"}>
            { !partenaire && <h3>{element.titre}</h3>}
            <div className={partenaire ? "affichageMenuDynamique_inside_partenaire" : "affichageMenuDynamique_inside"}>
                <img src={require(`../images/${folder_name}/${element.img}`)} alt="img"/>
                <p>{element.text}</p>
            </div>
        </div>
        </>
    )
}
