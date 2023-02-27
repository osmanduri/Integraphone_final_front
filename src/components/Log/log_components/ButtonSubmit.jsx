import React from 'react'

export default function ButtonSubmit(props) {
    return (
        <div className="connexion_bouton">
            <button type="submit">{props.var}</button>     
        </div>
    )
}
