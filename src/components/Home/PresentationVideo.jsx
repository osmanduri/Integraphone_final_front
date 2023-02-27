import React from 'react'
import ReactPlayer from 'react-player'
import video_presentation from '../../video/Integraphone_Telecom.mp4'
export default function PresentationVideo() {
    return (
        <div className="presentation_integraphone">
        <h3 className="home_big_title">Présentation d'Integraphone</h3>
        <div className="video_presentation">
            <ReactPlayer
            url={video_presentation}
            width="100%"
            height="100%"
            controls={true}
            />
        </div>
</div>
    )
}
