import React from 'react'
import { Icon,Button } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

import './style.css'
//images
import salaGrandeMapImage from '../../Media/salaGrande.jpg'
import pianoYamaha from '../../Media/pianoT.png'


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
    <div className='Sala' style = {{backgroundImage: `url(${pianoYamaha})`, backgroundPosition:'91% 58%'}} id='salaGrande'>
        <div className='leftImage' id='imagessalaGrande'>
            <span className='salaNameCarousel'>Sala grande</span>
            <Carousel className='salaProveCarousel' showStatus={false} showThumbs={false} autoPlay={false} >
                <div>
                    <img src={salaGrandeMapImage} className='salaProveCarouselImage'/>
                </div>
            </Carousel>
        </div>
        <div className='rightContent' id='descriptionsalaGrande'>
            <div className='summaryBar' style={{width:'35%'}}>
                <Icon name='users'/> 
                <span className='textSummary1'>30 persone </span> 
            </div>
        
            <h1 style={{marginTop:'10%'}}>Il nostro spazio per gli eventi</h1>

            <p className='pDescription' >La sala grande di Micro-bo può opsitare fino a 30 persone. Questo è il nostro spazio polivalente, è possibile prenotarlo per studio, sessioni di gruppo o per eventi. La sala é provvista di un pianoforte yamaha a muro, batteria elettrica, proiettore, impianto. <br></br>
           Non è possibile l'utilizzo della batteria se non di quella elettronica. </p>
            {/* <p style={{fontSize:'18px',textAlign:'left',backgroundColor:'rgb(245, 245, 245,0)', padding:'0px'}}> <br></br>Controlla la disponibilità dal calendario!</p> */}
            {/* <img style={arrowToCalendar} src={arrowUp} className='arrowUpCalendar'/> */}
        </div>
        <div className='calendarPanel' id='calendarsalaGrande'>
        <h1>Calendario sala grande</h1>
            <p className='pDescription'>Qui puoi vedere quando è libera la sala grande. <br></br> Dal lunedì al venerdi siamo aperti dalle 9:00 fino alle 22:00. Il sabato siamo aperti dalle 10:00 alle 20:00. <br></br>Domenica siamo al bar. 🍷</p>
            <ReactEmbeddedGoogleCalendar publicUrl ="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23f5f5f5&ctz=Europe%2FRome&showTitle=0&showNav=1&mode=WEEK&showPrint=0&showTabs=0&showTz=0&showCalendars=0&showDate=1&src=ajA5YXNjZzluZHAwYmJkanBtcHYzYjZmMjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%230B8043" 
            height= '400px' widht="800px"/>
        </div>
        <div className="buttonCalendarContainer">
            <Button className='buttonCalendar' id="salaProveCalendarButton"color='orange' onClick={(e)=>handleCalendar('salaGrande',e.target)} style={{margin:"auto",marginTop:"0px"}}>Controlla il calendario</Button>
        </div>
    </div>
  )
}

export default SalaProve