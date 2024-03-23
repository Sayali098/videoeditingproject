import React from 'react';
import './dashboard.css';
import { GrTemplate } from "react-icons/gr";
import { HiOutlineFolder } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Myvideo from '../assets/myvideo.mp4';
import { TbVideo } from "react-icons/tb";
import { RiMicLine } from "react-icons/ri";
import { RiScissorsLine } from "react-icons/ri";
// import { TbSmartHome } from "react-icons/tb";
import { RiFlashlightFill } from "react-icons/ri";
import { TbAccessPoint } from "react-icons/tb";

import { RiLayout5Line } from "react-icons/ri";
import { RiHome6Line } from "react-icons/ri";
const Dashboard = () => {
  return (
    <section className='dash-wrapper'>
      <div className='Dashboard-container'>

        <div className='dash-left'>

          <div>
            <p>Logo</p>
            <div className='left-btn'>

              <button className='button new-btn'  > New Video <span>+</span> </button>
              <button className='button home-btn'>   <RiHome6Line className='home-icon' /> <span>Home</span></button>
            </div>
            <ul className='Item-list'>
              <li className='list-item'> <GrTemplate /><span>Templates</span></li>
              <li className='list-item'>< HiOutlineFolder /><span>All videos</span></li>
              <li className='list-item'>< TbAccessPoint /> <span>Podcasts and Shows</span></li>
              <li className='list-item'>< RiLayout5Line />Brand kit</li>
            </ul>
          </div>
        </div>






        <div className='dash-right'>
          <div>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '70%', display: 'flex', alignItems: 'center' }}>
                <div  style={{position:'relative', display:'flex', alignItems:'center'}}><span style={{position:'absolute' ,marginRight:'-13px', padding:'6px'}}> <CiSearch /></span>

                  <input style={{ borderRadius:'10px', padding:"8px 24px" }} type='search' placeholder='search'></input>
                  <span style={{paddingLeft:'-20px'}}><RxCross2 /></span>
                </div>
              
              </div>
              <div style={{ width: '30%', textAlign: 'end' }}>
                <p>Logo</p>
              </div>
            </div>
          </div>







          
          <div>
          <p style={{ fontSize: '22px' }}>Let`s create some <span style={{ fontWeight: '700' }}>Videos!</span></p>
          </div>

          <div className='Buttons'>
            <button className='button btn'>
              <RiScissorsLine className='icon icon-1' /><span> Create Project</span></button>
            <button className='button btn'>
              <TbVideo className='icon icon-2' /><span>Record Video</span></button>
            <button className='button btn'>
              <TbAccessPoint className='icon icon-3' /><span>Go live</span></button>
            <button className='button btn'>
              <RiMicLine className='icon icon-4' /><span>Record Podcast</span></button>
          </div>
          <div className='My-video'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

              <p> My Recent Videos</p>
              <p>All videos</p>
            </div>
          </div>
          <div>
            <div>
              <video controls className='video-section'>
                <source src={Myvideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>Project Name</p>
              <p style={{ color: 'gray' }}>10 minutes ago</p>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}

export default Dashboard;