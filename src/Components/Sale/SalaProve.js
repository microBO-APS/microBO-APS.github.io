import React,{useState,useEffect} from 'react'
import { Icon,Button } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

import './style.css'
import './styleMobile.css'
import './styleTablet.css'
//images
import salaProve1 from '../../Media/salaProveIngresso1.jpg'
import salaProve2 from '../../Media/salaProveBack.jpg'
import pearlSalaProve from '../../Media/PearlT.png'
import sureSM from '../../Media/sureSM.jpg'


const SalaProve = () => {
    const handleCalendar = (id,target) => {
        console.log(target)
        const salaProve = document.getElementById(id)
        const calendarPanel = document.getElementById(`calendar${id}`)
        const descriptionPanel = document.getElementById(`description${id}`)
        const imagesSalaprove = document.getElementById(`images${id}`)
        if (target.textContent==="Controlla il calendario"){
            imagesSalaprove.style.display='none'
            descriptionPanel.style.display='none'
            salaProve.style.gridTemplateColumns="70% 30%"
            calendarPanel.style.display='block'
            target.textContent = 'Torna alla descrizione'
        }
        else if (target.textContent==="Torna alla descrizione"){
            salaProve.style.gridTemplateColumns="35% 35% 30%"
            imagesSalaprove.style.display='block'
            descriptionPanel.style.display='block'
            calendarPanel.style.display='none'
            target.textContent = 'Controlla il calendario'
        }
    }
    
  return (
    <div className='Sala' style = {{backgroundImage: `url(${pearlSalaProve})`}} id ='salaProve'>
        <div className='leftImage' id='imagessalaProve'>
            <span className='salaNameCarousel'>Sala prove</span>
            <Carousel className='salaProveCarousel' showStatus={false} showThumbs={false} autoPlay={false} >
                <div>
                    <img src={salaProve1} className='salaProveCarouselImage'/>
                </div>
                <div>
                    <img src={salaProve2} className='salaProveCarouselImage'/>
                </div>
                <div>
                    <img src={sureSM} className='salaProveCarouselImage'/>
                </div>
            </Carousel>
        </div>
        <div className='rightContent' id='descriptionsalaProve'>
            <div className='summaryBar'>
                <Icon name='users' className='iconSummary'/> 
                <span className='textSummary1'>6 persone </span> 
                <div className="dividerSummary"></div>
                <Icon name='snowflake outline'/> 
                <span className='textSummary2'> Aria condizionata </span>
            </div>
        
            <h1 style={{marginTop:'10%'}}>La nostra sala prove</h1>

            <p className='pDescription' >ha una capienza di 6 persone. Oltre alla batteria sono presenti amplificatori per basso e chitarra ed una tastiera Casio 88 tasti pesata. <br></br>Sono presenti 3 microfoni dinamici tipo sm 58, gestibili da mixer. È in oltre possibile entrare in impianto da minijack (attacco cellulare).<br></br> La sala è insorizzata ed è possibile inoltre utilizzarla per registrazioni in presa diretta.</p>
            {/* <p style={{fontSize:'18px',textAlign:'left',backgroundColor:'rgb(245, 245, 245,0)', padding:'0px'}}> <br></br>Controlla la disponibilità dal calendario!</p> */}
            {/* <img style={arrowToCalendar} src={arrowUp} className='arrowUpCalendar'/> */}
        </div>
        <div className='calendarPanel' id='calendarsalaProve'>
            <h1>Calendario sala prove</h1>
            <p className='pDescription'>Qui puoi vedere quando è libera la sala prove. <br></br> Dal lunedì al venerdi siamo aperti dalle 9:00 fino alle 22:00. Il sabato siamo aperti dalle 10:00 alle 20:00. <br></br>Domenica siamo al bar. 🍷</p>
            <ReactEmbeddedGoogleCalendar publicUrl ="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23f5f5f5&ctz=Europe%2FRome&showTitle=0&showNav=1&mode=WEEK&showPrint=0&showTabs=0&showTz=0&showCalendars=0&showDate=1&src=b2tkNWJodG4wdmU5OTJpdW1sb3UxaTljNWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%7D3020" 
            height= '400px' widht="800px"/>
        </div>
        <div className="buttonCalendarContainer">
            <Button className='buttonCalendar' id="salaProveCalendarButton"color='orange' onClick={(e)=>handleCalendar('salaProve',e.target)} style={{margin:"auto",marginTop:"0px"}}>Controlla il calendario</Button>
        </div>
    </div>
  )
}

export default SalaProve
