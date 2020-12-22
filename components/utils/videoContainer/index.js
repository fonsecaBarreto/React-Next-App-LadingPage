import React, { createRef, useState, useEffect } from 'react'
import "./style.css"


export default function VideoContainer(props){
  const [showVideo, setShowVideo] = useState(false);
  const container = createRef();
  const {id}  = props

  if (typeof window !== 'undefined') {
    
    const videoObserver = new IntersectionObserver(onVideoIntersection, {
      rootMargin: '100px 0px',
      threshold: 0.25
    });

    useEffect(() => {
      if (window && 'IntersectionObserver' in window) {
          if (container && container.current) {
              videoObserver.observe(container.current);
          }
      } else {
          setShowVideo(true);
      }
    
    }, [container]); 

    function onVideoIntersection(entries) {
      if (!entries || entries.length <= 0) {
         return;
      }
 
      if (entries[0].isIntersecting) {
         setShowVideo(true);
         videoObserver.disconnect();
      } 
    }
  }

 


 
  


  return (

    <div className="video-container" ref={container}>
      {
        showVideo ? 
        <iframe id="ytplayer"
          width="560" height="315"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"

          allow="accelerometer;
                autoplay;
                encrypted-media;
                gyroscope;
                picture-in-picture"

          allowFullScreen
          title="MathewsLins.com Youtube Player">
        </iframe>: undefined
      }

    </div>

  )
}