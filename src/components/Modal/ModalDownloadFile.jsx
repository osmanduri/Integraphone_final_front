import React, {useState, useEffect} from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download'

export default function ModalDownloadFile({setIsOpen, singleUserInfo, type}) {

    const [userData, setUserData] = useState({})
    const [validationCode, setValidationCode] = useState('')

    const [serverResponse, setServerResponse] = useState('')
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        if(data){
            setUserData(data)
        }
    }, [])

    const handleDownloadFile = async () => {
        setServerResponse('')
        const payload = {
            doubleAuth:validationCode
        }
        await axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/checkValidationCode/${userData._id}`, payload)
        .then(async (result) => {
            if(result.data === "valid"){
                await axios.get(`${process.env.REACT_APP_BASE_URL}/api/download/${type}`,{
                headers:{
                nom_client:singleUserInfo.nom_client,
                nom_fichier: singleUserInfo.fileName
            },
            responseType:"blob"
        })
        .then((res) => {
            console.log(res)
            fileDownload(res.data, `${singleUserInfo.fileName}`)
            setIsOpen(false)
        })
            }else{
                setServerResponse(result.data)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="modal_delete_user">
            <div className="modal_delete_user_inside">
            <strong onClick={() => setIsOpen(false)}>X</strong>
            <p>Veuillez taper le code de validation envoyé à {userData.email}</p>
            <input type="password" placeholder='Mot de passe' onChange={e => setValidationCode(e.target.value)}/>
            <div className="bouton_oui_non">
                <button onClick={handleDownloadFile}>Valider</button>
                <button onClick={() => setIsOpen(false)}>Annuler</button>
                
            </div>
            <div className='server_response' style={{color:"red"}}>{serverResponse}</div>
            </div>
        </div>
    )
}
