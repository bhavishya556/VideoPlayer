import React, { useState } from "react";
import ReactPlayer from "react-player";
import Ad from "./Ad"; 

function Video({info}) {
  const [showAd, setShowAd] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [adShown, setAdShown] = useState(false); 

  const handleProgress = (progress) => {
    const currentTime = progress.playedSeconds;
    const adStartTime = 5;

    if (currentTime >= adStartTime && !adShown) {
      setIsVideoPlaying(false); 
      setShowAd(true);
      setAdShown(true); 
    }
  };

  const handleAdSubmit = (userAnswer) => {
    
    console.log("User's ad submission:", userAnswer);

    setShowAd(false); 
    setIsVideoPlaying(true); 
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true); // Resume the video
    setShowAd(false); // Hide the ad
  };

  return (
    <div>
  
   

    
  

    

   

      <h1>My Custom Player</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=bzSn6AKLkMI"
        className="react-player"
        width="80%"
        height="80vh"
        playing={isVideoPlaying}
        onProgress={handleProgress}
        onPause={() => setIsVideoPlaying(false)}
        onPlay={handleVideoPlay}
        controls={true}
      />
      {showAd && <Ad onAdSubmit={handleAdSubmit} info={info} />}


      {/* {info.map((information) => (
        <Ad key={information.id} {...information} onAdSubmit={handleAdSubmit} />
      ))} */}

      
      
    </div>
    
  );
}

export default Video;


