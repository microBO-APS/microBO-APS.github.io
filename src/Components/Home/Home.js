import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import SalaProve from "../Sale/SalaProve.js";
import Produzione from "../Sale/Produzione.js";
import SalaGrande from "../Sale/SalaGrande.js";
import Service from "../Others/Service.js";
import Rec from "../Others/Rec.js";
import Tessera from "../Others/Tessera.js";
import Contacts from "../Others/Contacts.js";

//image 
import logo from '../../Media/logo.png'
import aicsLogo from '../../Media/aicsLogo.png'
import salaProveBckg from '../../Media/salaProveIngresso1.jpg'
import salaProveMapImage from '../../Media/salaProveBack.jpg'
import produzioneMapImage from '../../Media/ProduzioneHigh.jpg'
import salaGrandeMapImage from '../../Media/salaGrande.jpg'

// style 
import './Home.css'
import './HomeTablet.css'
import './HomeMobile.css'
import './Carousel.css'

import '../Others/style.css'
import '../Others/styleMobile.css'
import '../Others/styleTablet.css'

const Home = () => {
    const [myEvents, setEvents] = useState([]);
    let view = {schedule:{ type: 'week' }}

    const headerStyle = {
        backgroundImage: `url(${salaProveBckg})`
    }
    let salaMapImageArray = [
        [salaProveMapImage,'SALA PROVE','salaProve','salaMapColumn'],
        [produzioneMapImage,'PRODUZIONE','produzione','salaMapColumn'],
        [salaGrandeMapImage,'SALA GRANDE','salaGrande','salaMapColumnMobile'],
    ]
    const handleScroll = () => {
        const logo = document.getElementById('logo')
        const position = window.pageYOffset;
        logo.style.transform = `rotate(${position/4}deg)`

    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
      const pStyle = {
          fontSize:'16px'
      }
      const arrowToCalendar = {
          position:'relative',
          width:'40%',
          marginLeft:'80%',
          bottom:'26%'
      }
      const salaTop = {
          top:'-10%'
      }
      const calendarStyle={
        border:"solid 1px #777", 
        width:"900",
        height:"700",
        frameborder:"0",
        scrolling:"auto"
    }
    return (
        <div className='HomeContainer'>
            <div className='Header' style={headerStyle}>
                {/*<img className='salaProveImage' src={salaProveImage}/>*/}
                <div className='logoContainer'>
                    <img src = {logo} className='logo' id='logo'/>
                </div>
            </div>
            <div className='Body'>
                <div className='headerDescriptionContainer'>
                    <h1>Scegli una sala</h1>
                    <p className='pStyle'>Micro-Bo è un circolo <span><img src={aicsLogo} className='aicsLogoSpan'/></span> destinato alla musica!</p>
                    <p className='pStyle'>Il nostro spazio prevede tre sale, ciascuna destinata ad uno specifico utilizzo.</p>
                </div>
                <div className='SalaMap'>
                    <div className='salaMapRow'>
                        {salaMapImageArray.map((sala,i) =>
                            <div className='salaMapColumn'>
                                <img src = {sala[0]} key={i} className='salaMapImage'/>
                                <span className='salaName'>{sala[1]}</span>
                                <a href={`#${sala[2]}`}>
                                <div className="salaButtonContainer">
                                    <button className='salaButton'>Scopri di più</button>
                                </div>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <SalaProve/>
                <Produzione/>
                <SalaGrande/>
                <Service/>
                <Rec/>
                <Tessera/>
                <Contacts/>
            </div>
            
        </div>
    )
}

export default Home
