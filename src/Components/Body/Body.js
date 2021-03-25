import React from 'react'
import './_Body.scss';
import Temple from '../Images/TempleBuilding.png';
import Hallway from '../Images/Hallway01.png';


const Body = () => {
    return (
        <>
        <div className='body_Container'>
            <figure  className='temple'>
                <img src={Temple}/>
                <figcaption>
                <h2>Prefecture in Focus: Tottori</h2>
                <p className='midTxt'>Tottori is the capital city of souther Japan. It is a beautiful city with cherry blossom trees and temples all around. </p>
                <p><a>View Prefecture</a><span>→</span></p>
                </figcaption>
            </figure>
           
            <figure  className='hall'>
                <figcaption >
                <h2>Featured Neighborhood: Kyoto's Arashiyama</h2>
                <p className='midTxt'>Arashiyama is a national historic site of Kyoto. It houses beautiful bamboo forests and walkways all over.</p>
                <p><a>View Neighborhood</a> <span>→</span></p>
                </figcaption>
                <img src={Hallway}/>
            </figure>
        </div>
        </>
    )
}

export default Body;