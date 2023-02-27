import React, { useState, useEffect } from 'react'

export default function AvantagesIntegraphone({element, folder_name}) {

    const [imageRenverse, setImageRenverse] = useState(true)

    
    const currentSizeWindow = () => {
        if(window.innerWidth < 768){
            setImageRenverse(false)
        }
        else if(window.innerWidth >= 768){
            setImageRenverse(true)
        }
    }
    
    
    window.addEventListener('resize', currentSizeWindow)
    useEffect(() => {
        currentSizeWindow();        
    }, [])

    return (
        <div className="avantages_integraphone_inside" style={(imageRenverse && element.reverse) ? {flexDirection:"row-reverse"} : {}}>
            <div className="avantages_integraphone_inside_outside_pic">
                <img src={require(`../../images/${folder_name}/${element.img}.jpg`)} alt="avantage"/>
            </div>
            <div className="avantages_title_text">
                {
                    window.innerWidth < 1024 ? 
                    <h3 style={element.reverse ? {marginRight:"0px"} : {marginLeft:"0px"}}>{element.titre}</h3> :
                    <h3 style={element.reverse ? {marginRight:"46px"} : {marginLeft:"46px"}}>{element.titre}</h3>
                }
                <p className="avantages_text" style={imageRenverse ? (element.reverse ? {marginRight:"46px"} : {marginLeft:"46px"}) : null}>{element.description}</p>
            </div>     
        </div>
    )
}
