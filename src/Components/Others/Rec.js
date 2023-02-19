import React,{useRef} from 'react'
import rode from '../../Media/rode.png'
import emailjs from '@emailjs/browser';
import { Icon } from 'semantic-ui-react'

const Rec = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
          .then((result) => {
              alert('Grazie! Abbiamo ricevuto la tua mail.')
              e.target.reset()
          }, (error) => {
            alert('Ops! non è stato possibile inviare la richiesta.')
          });
      };
    return (
        <div className='Sala' id ='service'>
        <div className='leftImage' id='imagessalaProve'>
            <img className ='recImg' src={rode} alt='rec'></img>
        </div>
        <div className='rightContent' id='descriptionsalaProve'>
            {/* <div className='summaryBar'>
                <Icon name='users' className='iconSummary'/> 
                <span className='textSummary1'>6 persone </span> 
                <div className="dividerSummary"></div>
                <Icon name='snowflake outline'/> 
                <span className='textSummary2'> Aria condizionata </span>
            </div> */}
        
            <h1 style={{marginTop:'10%'}}>Recording</h1>

            <p className='pDescription' >È possibile svolgere attività di registrazione presso Micro-Bo.<br></br> Puoi compilare il form per contattarci ed indicarci di cosa avresti bisogno.</p>
            {/* <p style={{fontSize:'18px',textAlign:'left',backgroundColor:'rgb(245, 245, 245,0)', padding:'0px'}}> <br></br>Controlla la disponibilità dal calendario!</p> */}
            {/* <img style={arrowToCalendar} src={arrowUp} className='arrowUpCalendar'/> */}
        </div>
    
        <div className="formContainer">
        <form ref={form} onSubmit={sendEmail}>
                <label>Oggetto</label>
                <input type="text" disabled name="subject" value='Rec' />
                <input style={{display:'none'}} type="text" name="subject" value='Rec' />
                <label>Nome Cognome</label>
                <input required type="text" name="name"/>
                <label>Email</label>
                <input required type="email" name="email" />
                <label>Telefono</label>
                <input type="text" name="telephone" />
                <label>Message</label>
                <textarea required name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    </div>
    )
}

export default Rec
