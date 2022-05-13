import React from 'react'
import './intro.css';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import thumbup from '../../img/thumbup.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Sacalivin</span>
                <span>Full stack Developer with hight level of experience in web designing and development, producing the Quality Work</span>
                
            </div>
            <button className="button i-button">Hire Me</button>

            <div className="i-icons">
            <a href="https://github.com/sacalivin"><img src="https://img.icons8.com/bubbles/100/000000/github.png"/></a>
            <a href="https://www.linkedin.com/in/sacalivin-mocha-8200231b3/"><img src="https://img.icons8.com/bubbles/100/000000/linkedin.png"/></a>
            <a href="https://www.instagram.com/sacalivin/"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new--v2.png"/></a>
            
            </div>


        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top:'-4%', left:'68%'}}>
              <FloatingDiv image={crown} txt1="Web" txt2="developer"/>
            </div>
            <div style={{top:'68%', left:'-10%'}}>
              <FloatingDiv image={crown} txt1="Best Design" txt2="Award"/>
            </div>

            {/* blur div */}
            <div className="blur" ></div>
            <div className='blur' style={{background:'#c1f5ff',top:'17rem',left:'-9rem',width:'21rem', height:'11rem'}}>

            </div>
        </div>
        
    </div>
  )
}

export default Intro