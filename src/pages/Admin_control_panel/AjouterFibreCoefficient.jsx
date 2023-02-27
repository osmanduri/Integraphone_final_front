import axios from 'axios'
import React, { useState, useEffect } from 'react'
import RetourRafraichir from '../../components/RetourRafraichir'
import logo from '../../images/logo_base_blanche.png'

export default function AjouterFibreCoefficient() {

    const [fibreFTTO, setFibreFTTO] = useState(1)
    const [fibreFTTE, setFibreFTTE] = useState(1)
    const [fibreFTTH, setFibreFTTH] = useState(1)

    const [updateValueFibre, setUpdateValueFibre] = useState(false)

    const [messageAdmin, setMessageAdmin] = useState(false)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        if(data && (data.isSuperAdmin)){
            setMessageAdmin(true)
            axios.get(`${process.env.REACT_APP_BASE_URL}/api/coefficient/${process.env.REACT_APP_COEFFICIENT}`)
            .then((res) => {    
                if(res.data){
                    setFibreFTTO(res.data.fibreFTTO)
                    setFibreFTTE(res.data.fibreFTTE)
                    setFibreFTTH(res.data.fibreFTTH)
                }
            })
            .catch(err => {
                console.log(err)
            })
        }else{
            setMessageAdmin(false)
        }

    }, [updateValueFibre])

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    const handleChangeValueFibreFTTO = () => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        if(data && data.isSuperAdmin){
            const payload = {
                fibreFTTO: document.getElementById('ftto').value
            }
    
            axios.put(`${process.env.REACT_APP_BASE_URL}/api/coefficient/update/ftto/${process.env.REACT_APP_COEFFICIENT}`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${data && data.token}`
                }
            })
            .then((res) => {
    
                setUpdateValueFibre(!updateValueFibre)
            })
            .catch(err => {
                console.log(err)
            })
        }else{
            console.log("vous n'etes pas SuperAdmin")
        }

    }

    const handleChangeValueFibreFTTE = () => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        if(data && data.isSuperAdmin){
            const payload = {
                fibreFTTE: document.getElementById('ftte').value
            }
    
            axios.put(`${process.env.REACT_APP_BASE_URL}/api/coefficient/update/ftte/${process.env.REACT_APP_COEFFICIENT}`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${data && data.token}`
                }
            })
            .then((res) => {
    
                setUpdateValueFibre(!updateValueFibre)
            })
            .catch(err => {
                console.log(err)
            })
        }else{
            console.log("vous n'etes pas superAdmin")
        }

    }

    const handleChangeValueFibreFTTH = () => {
        const data = JSON.parse(localStorage.getItem('storage-userData'));
        if(data && data.isSuperAdmin){
            const payload = {
                fibreFTTH: document.getElementById('ftth').value
            }
    
            axios.put(`${process.env.REACT_APP_BASE_URL}/api/coefficient/update/ftth/${process.env.REACT_APP_COEFFICIENT}`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${data && data.token}`
                }
            })
            .then((res) => {
    
                setUpdateValueFibre(!updateValueFibre)
            })
            .catch(err => {
                console.log(err)
            })
        }else{
            console.log("vous n'etes pas superAdmin")
        }

    }
    return (
        <>
        { messageAdmin ?
        <div className="ajouter_fibre_coefficient">
            <RetourRafraichir path="/"/>

            <form type="submit" onSubmit={handleSubmit}>
            <img src={logo} alt="logo_add_user"/>
            <h2>Ajouter un coefficient</h2>

            <div className="fibre_techno_marge">
            <table>
            <tbody>
                <td colSpan="2" style={{background:"#484848", color:"white"}}>
                    <p>Coefficient actuelle</p>
                </td>
                
                <tr>
                    <th>Technologie</th>
                    <th>Coefficient</th>
                </tr>
                <tr>
                    <td>Fibre FTTO</td>
                    <td>{fibreFTTO}</td>

                </tr>
                <tr>
                    <td>Fibre FTTE</td>
                    <td>{fibreFTTE}</td>
                </tr>
                <tr>
                    <td>Fibre FTTH</td>
                    <td>{fibreFTTH}</td>
                </tr>
                </tbody>
            </table> 
            </div>

            <div className="fibre_techno_ajout_marge">
                <div className="fibre_techno_ajout_marge_ftto">
                    <p>Coefficient Fibre FTTO: </p>
                    <input type="number" id="ftto" min="0" max="100" step="any"/>
                    <button type="submit" onClick={handleChangeValueFibreFTTO}>Changer</button> 
                </div>
                <div className="fibre_techno_ajout_marge_ftto">
                    <p>Coefficient Fibre FTTE: </p>
                    <input type="number" id="ftte" min="0" max="100" step="any"/>
                    <button type="submit" onClick={handleChangeValueFibreFTTE}>Changer</button> 
                </div>
                <div className="fibre_techno_ajout_marge_ftto">
                    <p>Coefficient Fibre FTTH: </p>
                    <input type="number" id="ftth" min="0" max="100" step="any"/>
                    <button type="submit" onClick={handleChangeValueFibreFTTH}>Changer</button> 
                </div>
            </div>

            </form>
        </div>
        : 
        <div className='add_user_forbidden container'>
            <p>Vous devez etre Super Admin pour accèder à cette page</p>
        </div>
        }
        </>
    )
}
