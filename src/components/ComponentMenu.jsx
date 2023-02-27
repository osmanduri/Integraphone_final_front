import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
export default function ComponentMenu({titre_menu1, titre_menu2, titre_menu3, titre_menu4, root1, root2, root3, root4, border_color_menu, trait_color, myBackgroundColor, name}) {
    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(true)
    const [third, setThird] = useState(true)
    const [fourth, setFourth] = useState(true)
    const location = useLocation().pathname.split('/')[2];

    const handleHover = (choix) => {
        if(choix === "first"){
            setFirst(false)
        }
        else if(choix === "second"){
            setSecond(false)
        }
        else if(choix === "third"){
            setThird(false)
        }
        else if(choix === "fourth"){
            setFourth(false)
        }
    }

    const handleLeave = (choix) => {
        if(choix === "first"){
            setFirst(true)
        }
        else if(choix === "second"){
            setSecond(true)
        }
        else if(choix === "third"){
            setThird(true)
        }
        else if(choix === "fourth"){
            setFourth(true)
        }
    }

    return (
        <>
        <div className="component_menu">
            <div className={`component_menu_inside container ${border_color_menu}`} style={{borderRadius:"12px"}}>
                <NavLink style={!first ? {background:myBackgroundColor, color:"white"} : {}} to={root1} exact activeClassName={`nav-active_menu_${name}`} onMouseLeave={() => handleLeave("first")} onMouseEnter={() => handleHover("first")}><p>{titre_menu1}</p></NavLink>
                <div className={first && second && location !== "fibre_optique" && location !=="serveur_et_hebergement" && location !== "video_surveillance" && location !== "systemes_de_conference" && location !=="telephonie_ip" && location !== "saas_et_laas" && location !== "alarme" && location !== "web_rtc" ? `${trait_color}` : ""}></div>
                <NavLink style={!second ? {background:myBackgroundColor, color:"white"}: {}} to={root2} exact activeClassName={`nav-active_menu_${name}`}  onMouseLeave={() => handleLeave("second")} onMouseEnter={() => handleHover("second")}><p>{titre_menu2}</p></NavLink>
                <div className={second && third && location !== "telephonie_ip" && location !== "telephonie_mobile" && location !== "saas_et_laas" && location !== "cablage_reseaux" && location !== "alarme" && location !== "controle_acces" && location !=="web_rtc" && location !=="affichage_dynamique" ? `${trait_color}` : ""}></div>
                <NavLink style={!third ? {background:myBackgroundColor, color:"white"} : {}} to={root3} exact activeClassName={`nav-active_menu_${name}`} onMouseLeave={() => handleLeave("third")} onMouseEnter={() => handleHover("third")}><p>{titre_menu3}</p></NavLink>
                {
                    root4 && titre_menu4 && <><div className={third && fourth && location !=="cablage_reseaux" && location !=="protection_des_donnees" ? `${trait_color}` : ""}></div>
                    <NavLink style={!fourth ? {background:myBackgroundColor, color:"white"} : {}} to={root4} exact activeClassName={`nav-active_menu_${name}`} onMouseLeave={() => handleLeave("fourth")} onMouseEnter={() => handleHover("fourth")}><p>{titre_menu4}</p></NavLink></>
                }
            </div>
        </div>
        </>
    )
}
