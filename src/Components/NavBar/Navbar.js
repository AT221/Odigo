import React from 'react'
import './_NavBar.scss';

const NavBar = () => {
    return (
        <div className='landing'>
            <nav className='nav'>
                <h2 className='logo'>Odigo</h2>
                <ul className='nav-links'>
                    <li><a>Locations</a></li>
                    <li><a>Articles</a></li>
                    <li><a>Videos</a></li>
                    <li><a>Sign in</a></li>
                </ul>
                
            </nav>
            <div className="Heading_Container">
            <div className='text'>
                <h1>Discover Amazing Places in Japan</h1>
                <p>Get a head start on your next trip to Japan and see what the country has to offer. Check out articles, watch videos, or see the location of national monuments, and tourist attractions all across Japan.</p>

            </div>
                <div className='inputs'>
        <ul>
                <li><input type='text' placeholder='What would you like to do?'/> </li>
                <li><input type='text' placeholder='Where would you like to go?'/></li>
                <li><button> Search</button> </li>

        </ul>
                </div>
            </div>
            </div>       
          
        
    )
}

export default NavBar;

