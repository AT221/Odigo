import React from 'react'
import './_Footer.scss';
import Night from '../Images/NightStreet.png';


const Footer = () => {
    return (
        <div>
            <footer>
                <img src={Night}/>
                <div className='bottom_Container'>
            <div className='main_List'>
                        <h2>Odigo</h2>
                <ul className='first_List'>
                    <li><a>Company</a></li>
                    <li><a>About</a></li>
                    <li><a>Team</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Privacy Policy</a></li>
                </ul>
                <ul className='second_List'>
                    <li><a>Locations</a></li>
                    <li><a>Tokyo</a></li>
                    <li><a>Kyoto</a></li>
                    <li><a>Osaka</a></li>
                    <li><a>Hokkaido</a></li>
                </ul>
                <ul className='third_List'>
                    <li><a>Social Media</a></li>
                    <li><a>Facebook</a></li>
                    <li><a>Twitter</a></li>
                    <li><a>Instagram</a></li>
                    <li><a>Youtube</a></li>
                </ul>
            </div>
            </div>
            
            </footer>
           
        </div>
    )
}

export default Footer;