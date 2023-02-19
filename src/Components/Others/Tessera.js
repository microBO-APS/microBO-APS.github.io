import React,{useRef} from 'react'
import aicsLogo from '../../Media/aicsLogo.png'
import { Icon,Button } from 'semantic-ui-react'

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
        <div className='Tessera' id ='tesseramento'>
       
        <div className='rightContent' id='descriptionsalaProve'>
            <h1 style={{marginTop:'10%'}}>Siamo Un Circolo <span><img src={aicsLogo} className='aicsLogoSpanTessera'/></span> </h1>
            <p className='pTessera'>Per poter usufruire degli spazi di Micro-bo è necessario essere tesserati AICS.<br></br>Puoi fare la tessera direttamente da noi.</p>
            <Button className='buttonStatuto' color='orange'href='https://drive.google.com/file/d/1-WWp_tp69J8qOK-wscFAVf2nYRM03Ztp/view' target="_blank">Guarda il nostro statuto</Button>
        </div>

        <div className='leftImage' id='imagessalaProve'>
            <img className ='tesseraImg' src={aicsLogo} alt='service'></img>
        </div>
      
    </div>
    )
}

export default Tessera
