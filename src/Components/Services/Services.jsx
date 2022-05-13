import React from 'react'
import './Services.css';
import  Humble from '../../img/humble.png';
import  Glasses from '../../img/glasses.png';
import  HeartEmoji from '../../img/heartemoji.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';
const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My Asesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet c nobis 
                <br />accusantium nemo temporibus ad quibusdam!</span>
                <a href={Resume} download>
                <button className='button s-button'>Download CV</button>
                </a>
        </div>
        {/* right side */}
        
            <div className="cards">
                <div style={{left:'14rem'}}>
                    <Card 
                    emoji={HeartEmoji}
                    heading= {'Design'}
                    detail={"Figma Photoshop Adobe Illustrator"}
                    />
                    
                </div>
                {/* second card */}

                <div style={{left:'-4rem',top:'12rem'}}>
                    <Card 
                    emoji={Glasses}
                    heading= {'Developer'}
                    detail={"HTML CSS JavaScript React ASP.net"}
                    />
                    
                </div>

                <div style={{left:'12rem',top:'19rem'}}>
                    <Card 
                    emoji={Humble}
                    heading= {'UI/UX'}
                    detail={"HTML CSS JavaScript React ASP.net"}
                    />
                    
                </div>
                <div className="blur s-blur2" ></div>
            <div className="blur s-blur3" ></div>

                
            </div>

           
       

    </div>
  )
}

export default Services