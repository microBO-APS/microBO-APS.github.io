import React,{useRef} from 'react'
import aicsLogo from '../../Media/aicsLogo.png'
import { Icon } from 'semantic-ui-react'


const Tessera = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
    
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
      };
    return (
        <div className='Sala' id ='tesseramento'>
        <div className='leftImage' id='imagessalaProve'>
            <img className ='tesseraImg' src={aicsLogo} alt='service'></img>
        </div>
        <div className='rightContent' id='descriptionsalaProve'>
            {/* <div className='summaryBar'>
                <Icon name='users' className='iconSummary'/> 
                <span className='textSummary1'>6 persone </span> 
                <div className="dividerSummary"></div>
                <Icon name='snowflake outline'/> 
                <span className='textSummary2'> Aria condizionata </span>
            </div> */}
        
            <h1 style={{marginTop:'10%'}}>Siamo Un Circolo AICS</h1>

            <p className='pDescription'>Per poter usufruire degli spazi di Micro-bo è necessario essere tesserati AICS. <a href='https://drive.google.com/file/d/1-WWp_tp69J8qOK-wscFAVf2nYRM03Ztp/view' target="_blank"> Qui</a> puoi trovare il nostro statuto  Puoi fare la tessera direttamente da noi</p>
            {/* <p style={{fontSize:'18px',textAlign:'left',backgroundColor:'rgb(245, 245, 245,0)', padding:'0px'}}> <br></br>Controlla la disponibilità dal calendario!</p> */}
            {/* <img style={arrowToCalendar} src={arrowUp} className='arrowUpCalendar'/> */}
        </div>
    
        <div className="formContainer">
            <form ref={form} onSubmit={sendEmail}>
                <label>Oggetto</label>
                <input type="text" disabled name="user_name" value='Pre-tesseramento' />
                <label>Nome Cognome</label>
                <input type="text" name="user_name" />
                <label>Indirizzo</label>
                <input type="text" name="address" />
                <label>Luogo di nascita</label>
                <input type="text" name="birth_place" />
                <label>Data di nascita</label>
                <input type="text" name="birth_date" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <input type="submit" value="Send" />
            </form>
        </div>
    </div>
    )
}

export default Tessera
