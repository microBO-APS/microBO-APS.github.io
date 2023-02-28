import React,{useRef} from 'react'
import cassa from '../../Media/cassa.png'
import emailjs from '@emailjs/browser';
import { Icon } from 'semantic-ui-react'


const Contacts = () => {
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
        <div className='Contacts' id ='service'>
        <div className='leftImage' id='imagessalaProve'>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="80%" height="470" id="gmap_canvas" src="https://maps.google.com/maps?q=Associazione%20Microbo&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    <a href="https://fmovies-online.net"></a>
                </div>
            </div>
            <div class="mapouterMobile">
                <div class="gmap_canvas">
                    <iframe width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Associazione%20Microbo&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    <a href="https://fmovies-online.net"></a>
                </div>
            </div>
        </div>
        <div className='rightContent' id='descriptionsalaProve'>
            <h1 style={{marginTop:'10%'}}>Contatti</h1>
            <div className='contactsDetails'>
                    <p> <Icon name='map marker alternate'/> Via Remorsella 22/2, Bologna</p>
                    <p> <Icon name="time"/> 10:00 - 22:00 dal Lunedì al Venerdì</p>
                    <p> <Icon name="none"/> 10:00 - 20:00 il Sabato</p>
                    <p> <Icon name="none"/> Domenica siamo chiusi</p>
                    <p> <Icon name="phone"/> 051 095 1961</p>
                    <p> <Icon name="whatsapp"/> 375 65 53 490</p>
                    <p>Per qualsiasi informazione contattaci</p>
                </div>
        </div>
    
        <div className="formContainer">
            <form ref={form} onSubmit={sendEmail}>
                <label>Oggetto</label>
                <select id="country" name="subject">
                    <option value="info">Info</option>
                    <option value="Proposta evento">Proposta Evento</option>
                </select>
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

export default Contacts
