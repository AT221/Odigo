import React from 'react';
import './_BottomGallery.scss';

import Heart from '../Images/heart1.png';
import Chat from '../Images/chat1.png';


import Crowd from '../Images/CrowdedSmall.png';
import Snow from '../Images/SnowMountain.png';
import Wire from '../Images/WireStreet.png';

import Hallway from '../Images/Hallway02.png';
import Flowers from '../Images/TreeFlowers.png';
import Night from '../Images/SmallNight.png';





const BottomGallery = () => {
    return (
        <div className='btmContain'>
            <div className='titleHeading'>
            <h3>Today top places to visit</h3>
            </div>
            <hr></hr>

            <div className='figContainer'>
               <figure>
                   <img className='btmImg' src={Crowd}/>
                    <figcaption className='socialConatiner'>
                        
                    <ul>
                        <li className='picTitle'>Nagoya</li> 
                        <li>221</li>
                        <li ><img src={Heart}/></li>
                        <li>50</li>
                        <li><img src={Chat}/></li>
                    </ul>
                   </figcaption>

                   <figcaption className='txtBody'>Nagoya is the third most populus urban area in all of Japan.</figcaption>
                   <button>See More</button> 
               </figure>

               <figure className='middleFig'>
                   <img className='btmImg' src={Snow}/>
                    <figcaption className='socialConatiner'>
                        
                    <ul>
                        <li className='picTitle'>Niigata</li>
                        <li>400</li>
                        <li><img src={Heart}/></li>
                        <li>150</li>
                        <li><img src={Chat}/></li>
                    </ul>
                   </figcaption>

                   <figcaption className='txtBody'>Niigata has various Festivals and markets throughout the year. All are worth a visit!</figcaption>
                   <button>See More</button>
               </figure>

               <figure >
                   <img className='btmImg' src={Wire}/>
                    <figcaption className='socialConatiner'>
                        
                    <ul>
                        <li className='smallerTitle'>Osaka</li> 
                        <li>221</li>
                        <li ><img src={Heart}/></li>
                        <li>50</li>
                        <li><img src={Chat}/></li>
                    </ul>
                   </figcaption>

                   <figcaption className='txtBody'>Osaka is known as Japan's financial capital. It houses companies such as Panasonic and Sharp.</figcaption>
                   <button>See More</button>
               </figure>
          </div>

{/* Bottom 3 Figs */}

               
            <div className='figContainer'>
               <figure>
                   <img className='btmImg' src={Hallway}/>
                <figcaption className='socialConatiner'>
                        
                    <ul>
                        <li className='picTitle'>Saitama</li> 
                        <li>221</li>
                        <li ><img src={Heart}/></li>
                        <li>50</li>
                        <li><img src={Chat}/></li>
                    </ul>
                   </figcaption>

                   <figcaption className='txtBody'>Come plan a visit to Saitama, a city north of Tokyo. This city has many arenas to watch different sport events.</figcaption>
                   <button>See More</button> 
               </figure>


               <figure className='middleFig'>
                   <img className='btmImg' src={Flowers}/>
                <figcaption className='socialConatiner'>
                        
                    <ul>
                        <li className='smallerTitle'>Ueno</li> 
                        <li>400</li>
                        <li ><img src={Heart}/></li>
                        <li>150</li>
                        <li><img src={Chat}/></li>
                    </ul>
                   </figcaption>

                   <figcaption className='txtBody'>Ueno's main attraction is Ueno park which has hundreds of cherry blossoms.There is also the Pagoda of Kan'eiji.</figcaption>
                   <button>See More</button>
               </figure>

               <figure >
                   <img className='btmImg' src={Night}/>
                <figcaption className='socialConatiner'>
                        
                    <ul>
                        <li className='picTitle'>Shibuya</li> 
                        <li>221</li>
                        <li ><img src={Heart}/></li>
                        <li>50</li>
                        <li><img src={Chat}/></li>
                    </ul>
                   </figcaption>

                   <figcaption className='txtBody'>Shibuya is Japan's commercial hub. There are hundreds of shopping malls and different stores all around.</figcaption>
                   <button>See More</button>
               </figure>
               </div> 
        </div>
    )
}

export default BottomGallery;