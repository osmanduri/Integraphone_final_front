import React from 'react'
export default function Avantages({element}) {
    return (
                <div className="avantages_losange_texte">
                    <img src={require(`../images/operateur/icone_fibre_optique/${element.icon}`)} alt="fibre_optique"/>
                    <div className="avantages_texte">
                        <h4>{element.title}</h4>
                        <p>{element.text}</p>
                    </div>
                </div>
    )
}
