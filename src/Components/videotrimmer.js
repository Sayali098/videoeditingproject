// import React, { useRef } from 'react';

// function VideoTrimmer() {
//   const videoRef = useRef(null);

//   const handleTrimVideo = () => {
//     const video = videoRef.current;
//     const canvas = document.createElement('canvas');
//     const context = canvas.getContext('2d');

//     // Set canvas dimensions to match video dimensions
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;

//     // Draw video frame onto canvas
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);

//     // Extract trimmed portion from canvas
//     const trimmedImageData = context.getImageData(startX, startY, width, height);

//     // Create a new video element with trimmed data
//     const trimmedVideo = document.createElement('video');
//     trimmedVideo.src = canvas.toDataURL();

//     // Append the trimmed video to the DOM or do further processing
//     document.body.appendChild(trimmedVideo);
//   };

//   return (
//     <div>
//       <h2>Video Trimmer</h2>
//       <video ref={videoRef} controls>
//         <source src="path_to_video_file.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <button onClick={handleTrimVideo}>Trim Video</button>
//     </div>
//   );
// }

// export default VideoTrimmer;
