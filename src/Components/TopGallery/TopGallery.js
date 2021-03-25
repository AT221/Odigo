import React from 'react';
import './_TopGallery.scss';
import Fuji from '../Images/Mountain.png';
import Kyoto from '../Images/BackStreet.png';
import Tokyo from '../Images/BusyStreet.png';
import Niigata from '../Images/StoreFront.png';
import Sapporo from '../Images/CrossWalk.png';

const TopGallery = ()=>{
    return (
        <div className='topContainer'>
            <div className='topTitle'>
            <div className='title'>

            <h3>Get inspired for your next trip</h3>
            </div>
                <div className='viewAll'>
                <p><a>View All <span>→</span></a></p>

                </div>
            </div>
            <hr></hr>

            <div className='figContainer'>
               
                <div className='topFigs'>
                <figure>
                    <img className='fuji' src={Fuji}/>
                    <figcaption>Mount Fuji</figcaption>
                </figure>
                <figure>
                    <img  className='kyoto' src={Kyoto}/>
                    <figcaption>Kyoto</figcaption>
                </figure>
                </div>

                <div className='bottomFigs'>
                <figure>
                    <img src={Tokyo}/>
                    <figcaption>Tokyo</figcaption>
                </figure>
                <figure>
                    <img className='midImg' src={Niigata}/>
                    <figcaption>Niigata</figcaption>
                </figure>
                <figure>
                    <img src={Sapporo}/>
                    <figcaption>Sapporo</figcaption>
                </figure>
                </div>
            </div>
        </div>
    )
}

export default TopGallery;