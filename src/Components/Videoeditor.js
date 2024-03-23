import React from 'react';
import './videoeditor.css';
import { FiZoomIn } from "react-icons/fi";
import { FiZoomOut } from "react-icons/fi";
import { IoMdMusicalNote } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { RiText } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import Myvideo from '../assets/myvideo.mp4';
import { TiTick } from "react-icons/ti";
import { LuLayoutTemplate } from "react-icons/lu";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForwardSharp } from "react-icons/io5";
import { PiStarFourLight } from "react-icons/pi";
import { FiActivity } from "react-icons/fi";
import { TbNut } from "react-icons/tb";
import { LuUserPlus } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { GrFormSubtract } from "react-icons/gr";
import { GrFormDown } from "react-icons/gr";
import { GrAdd } from "react-icons/gr";
import { VscTriangleLeft } from "react-icons/vsc";
import { LuUploadCloud } from "react-icons/lu";
import { FiZap } from "react-icons/fi";
import { LuCornerUpRight } from "react-icons/lu";
import { LuCornerUpLeft } from "react-icons/lu";
import VideoTimeline from './VideoTimeline';
export const Videoeditor = () => {
  return (
    <div className='video-wrapper'>
      <div className='video-container'>
        <div className='images-col'>
          <div className='first-icon'>
            <IoMenu className='menu'></IoMenu>
            <div><TbNut className='setting-icon'></TbNut>Setting</div>
          </div>
          <div><GrAdd className='icon'></GrAdd><span>Media</span></div>
          <div><IoMdMusicalNote className='icon' /><span>Audio</span></div>
          <div><GrFormSubtract className='icon' /><span>Subtitles</span></div>
          <div><RiText className='icon' /><span>Text</span></div>
          <div><VscTriangleLeft className='icon' /><span>Elements</span></div>
          <div><LuLayoutTemplate className='icon' /><span>Templates</span></div>








        </div>
        <div className='property-col'>
          <h3>Project Settings</h3>

          <div>
            <p>Size</p>
      <button className='original-btn'>Original(16.9)</button>
          </div>




          <div>
            <p>Background</p>
            <div className='original-btn'>
              <input  type='radio' name='property'></input>
              <span>color</span>
              <span>#000000</span>
            </div>

            <div className='original-btn' >
              <input type='radio'name='property'></input>
              <span>image</span>
              <span>upload<LuUploadCloud /></span>
            </div>

            <div>
              <p>Audio</p>
              <div className='audio-container'>
              <div className='Audio-span'>
                <PiStarFourLight />
                <div style={{display:'flex' ,flexDirection:'column'}}>
                <span>Clean Audio</span>
                <span>Remove background noise</span>
                </div>
              </div>
              <div>
                <FiZap />
              </div>
              </div>


            </div>
            <div>
              <p>Duration</p>
            </div>
          </div>










          </div>
          <div className='video-col'>
            <div className='project-name'>
              <div><p>Project Name</p></div>
              <div className='btn-arrow'>
              <div className='arrow'>
                <LuCornerUpLeft style={{fontSize:'20px' }}></LuCornerUpLeft>
                <LuCornerUpRight style={{fontSize:'20px' }}></LuCornerUpRight>
              </div>
              <div><span></span></div>
              <div className='video-btns'>
                <button className='right-button'>Invite <LuUserPlus/></button>
                <button  className='right-button black-btn'>Done<TiTick style={{fontSize:'20px', color:'gray'}}/></button>
              </div>
              </div>
            </div>









            <div className='right-video-section'>
            <VideoTimeline></VideoTimeline>
            </div>
          </div>
      
      </div>
    
    </div>
  )
}
  ;