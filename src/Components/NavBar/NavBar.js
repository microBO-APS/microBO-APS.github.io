import {Link} from "react-router-dom";
import './NavBar.css'


const NavBar = () => {
    return (
        <div className='NavbarContainer'>
            <ul>
                <Link className='li' to="/">Home</Link>
                <div className='NavbaRight'>
                    <a className='li' href='https://drive.google.com/file/d/1-WWp_tp69J8qOK-wscFAVf2nYRM03Ztp/view' target="_blank"> Statuto</a>
                    {/* <a className='li' href='#service'> Service</a>
                    <a className='li' href='#contacts'>Contact</a> */}
                </div>
            </ul>
        </div>
    )
}

export default NavBar
