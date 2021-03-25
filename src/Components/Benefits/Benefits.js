import React from 'react'
import './_Benefits.scss';
import Tower from '../Images/TowerIcon.png';
import Store from '../Images/StoreIcon.png';
import Person from '../Images/PersonIcon.png';



const Benefits = () => {
    return (
        <>
            <div className="Benefits_Container">
            <div>
            <div className='title'>
               <h1>Benefits of Odigo</h1>
            </div>
            </div>
        <div className='lists'>
        
            <div className='tower'>
                <ul>
                    <li><img src={Tower}/></li>
                    <li>Welcome to Odigo!</li>
                    <li>Here you can check out travel destinations and monuments of Japan.</li>
                    <li><a>Learn More</a><span>→</span></li>
                </ul>
            </div>
            <div className='person'>
                <ul className='midList'>
                    <li><img src={Person}/></li>
                    <li>Your Personal Japan Guide</li>
                    <li>Our team of expert guides have curated the best attractions, restaurants, and hotels to go to during your visit.</li>
                    <li><a>Learn More</a><span>→</span></li>
                </ul>
            </div>
            <div className='store'>
                <ul>
                    <li><img src={Store}/></li>
                    <li>Promoting Local Businesses</li>
                    <li>We work with local businesses to help bring in more customers.</li>
                    <li><a>Learn More</a><span>→</span></li>
                </ul>
            </div>
        </div>
            </div>
        </>
    )
}

export default Benefits;