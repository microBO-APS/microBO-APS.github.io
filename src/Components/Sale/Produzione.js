import React from 'react'
import { Icon, Button } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

import './style.css'
//images
import produzioneMapImage from '../../Media/ProduzioneHigh.jpg'
import produzione from '../../Media/Produzione.jpg'
import mixerFake from '../../Media/mixerFakeT.png'
import booth from '../../Media/booth.jpeg'


const SalaProve = () => {
	const handleCalendar = (id, target) => {
		console.log(target)
		const salaProve = document.getElementById(id)
		const calendarPanel = document.getElementById(`calendar${id}`)
		const descriptionPanel = document.getElementById(`description${id}`)
		const imagesSalaprove = document.getElementById(`images${id}`)
		if (target.textContent === "Controlla il calendario") {
			imagesSalaprove.style.display = 'none'
			descriptionPanel.style.display = 'none'
			salaProve.style.gridTemplateColumns = "70% 30%"
			calendarPanel.style.display = 'block'
			target.textContent = 'Torna alla descrizione'
		}
		else if (target.textContent === "Torna alla descrizione") {
			salaProve.style.gridTemplateColumns = "35% 35% 30%"
			imagesSalaprove.style.display = 'block'
			descriptionPanel.style.display = 'block'
			calendarPanel.style.display = 'none'
			target.textContent = 'Controlla il calendario'
		}

	}
	return (
		<div className='Sala' style={{ backgroundImage: `url(${mixerFake})`, backgroundPosition: '91% 80%' }} id='produzione'>
			<div className='leftImage' id='imagesproduzione'>
				<span className='salaNameCarousel'>Produzione</span>
				<Carousel className='salaProveCarousel' showStatus={false} showThumbs={false} autoPlay={false}>
					<div>
						<img src={booth} className='salaProveCarouselImage' />
					</div>
					<div>
						<img src={produzioneMapImage} className='salaProveCarouselImage' />
					</div>
					<div>
						<img src={produzione} className='salaProveCarouselImage' />
					</div>
				</Carousel>
			</div>
			<div className='rightContent' id='descriptionproduzione'>
				<div className='summaryBar' style={{ width: '35%' }}>
					<Icon name='users' />
					<span className='textSummary1'>3 persone </span>
				</div>

				<h1 style={{ marginTop: '10%' }}>Produzione</h1>

				<p className='pDescription'>La produzione si compone di due ambienti.<br></br> <b>Booth</b><br></br> una
					sala destinata esclusivamente alla registrazione in solo di voci e strumenti. È fornita di
					amplificatore Fender valvolare, ampli basso, microfono a condensatore. È presente inoltre un
					Fender Rhodes originale.<br></br>
					<b>Regia</b><br></br>È possibile prendere il segnale di ampli/microfoni/rhodes tramite il
					cablaggio via mixer alla scheda audio. Basta collegare il proprio computer o il mac già
					presente. <br></br>Rockit per gli ascolti.
				</p>
			</div>
			<div className='calendarPanel' id='calendarproduzione'>
				<h1>Calendario produzione</h1>
				<p className='pDescription'>Qui puoi vedere quando è libera la produzione. <br></br> Dal lunedì al
					venerdi siamo aperti dalle 9:00 fino alle 22:00. Il sabato siamo aperti dalle 10:00 alle 20:00.
					<br></br>Domenica siamo al bar. 🍷
				</p>
				<ReactEmbeddedGoogleCalendar
					publicUrl="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23f5f5f5&ctz=Europe%2FRome&showTitle=0&showNav=1&mode=WEEK&showPrint=0&showTabs=0&showTz=0&showCalendars=0&showDate=1&src=aHFqdDZybnNxdmp0MzJwbmtuaXRzczA2Y2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23D50000"
					height='400px' widht="800px" />
			</div>
			<div className="buttonCalendarContainer">
				<Button className='buttonCalendar' id="salaProveCalendarButton" color='orange' onClick={(e) =>
					handleCalendar('produzione', e.target)}
					style={{ margin: "auto", marginTop: "100px" }}>Controlla il calendario</Button>
			</div>
		</div>
	)
}

export default SalaProve
