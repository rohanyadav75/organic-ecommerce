import React from 'react'
import agri from '../../assest/videos/Untitled design.mp4'

const Homevideo = () => {
    return (
        <div>
            <video data-aos="zoom-in"
                src={agri} // For public folder videos
                loop
                autoPlay
                control
                muted
                className="w-full h-[600px] object-cover  mt-25 "
            >
            </video>
        </div>
    )
}

export default Homevideo
