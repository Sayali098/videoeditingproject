


import React, { useState, useRef, useEffect } from 'react';
import './videoTimeLine.css';
import myvideo from '../assets/myvideo.mp4';
import { RiMicLine } from "react-icons/ri";
import { RiScissorsLine } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForwardSharp } from "react-icons/io5";
import { FiZoomIn } from "react-icons/fi";
import { FiZoomOut } from "react-icons/fi";

const VideoTimeline = () => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [trackingLogs, setTrackingLogs] = useState([]);
  const [splitSize, setSplitSize] = useState(10); // Default split size in seconds
  const [segmentedVideos, setSegmentedVideos] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(''); // Background image URL

  // Function to handle time update
  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
    const newTime = (videoRef.current.currentTime / duration) * 100;
    document.documentElement.style.setProperty('--scale-line-left', `${newTime}%`);
  };

  // Function to handle video loaded metadata
  const handleVideoLoaded = () => {
    setDuration(videoRef.current.duration);
  };

  // Function to handle video seeked event
  const handleVideoSeeked = () => {
    const logEntry = `Seeked to time: ${currentTime}`;
    setTrackingLogs([...trackingLogs, logEntry]);
  };

  // Function to split the video into segments
  const handleSplitVideo = () => {
    const segments = [];
    for (let i = 0; i < duration; i += splitSize) {
      segments.push({ start: i, end: Math.min(i + splitSize, duration) });
    }
    console.log('Segments:', segments);

    // Set segmented videos
    setSegmentedVideos(segments);
  };

  // Function to handle segment click
  const handleSegmentClick = (segment) => {
    videoRef.current.currentTime = segment.start;
    videoRef.current.play();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = (videoRef.current.currentTime / duration) * 100;
      document.documentElement.style.setProperty('--scale-line-left', `${newTime}%`);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [duration]);

  return (
    <div className="video-timeline-container">
      {/* Your timeline UI elements */}
     
      <video
        ref={videoRef}
        controls
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleVideoLoaded}
        onSeeked={handleVideoSeeked}
        className="video-player"
      >
        <source src={myvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='timeline'>
     <div className='song-info'>
      <div className='song-property'>
        < RiScissorsLine /><span>split</span><span>Add media</span>
      < RiMicLine></RiMicLine><span>Voiceover</span>
      </div>
      <div className='song-property'>
        <span>
       <IoPlayBack /> <FaPlay/><span>00:01:06</span> <IoPlayForwardSharp /></span>
       </div>
      <div className='song-property'>
        <HiOutlineSpeakerWave/><span><FiZoomIn/>

      <progress value="50" max="100"></progress><FiZoomOut/></span><span>fit</span>
      <FiActivity />
      </div>
     </div> 
      <div className="horizontal-track">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="track-line" style={{ left: 'var(--scale-line-left, 0)' }}></div>
        </div>
      </div>
      </div>
      <div className="split-video-controls">
        <label htmlFor="split-size">Split Size (seconds):</label>
        <input
          type="number"
          id="split-size"
          value={splitSize}
          onChange={(e) => setSplitSize(parseInt(e.target.value))}
          min="1"
        />
        <button onClick={handleSplitVideo}>Split Video</button>
      </div>
      <div className="segmented-videos">
        {segmentedVideos.map((segment, index) => (
          <button key={index} onClick={() => handleSegmentClick(segment)}>
            Segment {index + 1}
          </button>
        ))}
      </div>
      <div className="tracking-logs">
        <h3>Tracking Logs</h3>
        <ul>
          {trackingLogs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
    
  );
};

export default VideoTimeline;
