import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function ModalDeleteUser({setIsOpen, singleUserInfo, confirmText, setDeleteUserUseEffect}) {
    useEffect(() => {
        
    }, [])

    const handleDelete = async () => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        setDeleteUserUseEffect(false)
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/users/delete/${singleUserInfo && singleUserInfo._id}` , {
            headers:{
                token:`${data && data.token}`,
                nom_client: singleUserInfo.nom + ' ' + singleUserInfo.prenom
            }
        })
        .then((res) => {
            setIsOpen(false)
            setDeleteUserUseEffect(true)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className="modal_delete_user">
            <div className="modal_delete_user_inside">
            <strong onClick={() => setIsOpen(false)}>X</strong>
            <p>Voulez-vous vraiment supprimer {singleUserInfo.prenom + " " + singleUserInfo.nom} ?</p>
            <div className="bouton_oui_non">
                <button onClick={handleDelete}>Oui</button>
                <button onClick={() => setIsOpen(false)}>Non</button>
            </div>
            </div>
        </div>
    )
}
