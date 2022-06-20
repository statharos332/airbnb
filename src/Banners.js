import React from 'react'
import Athens from './images/athens.webp'
import AthensTwo from './images/athens2.webp'
import AthensThree from './images/2f5a15c7-2170-420a-9c48-9ac88a80a7fa.webp'
import AthensFour from './images/athens4.webp'
import './banners.css'


export default function Banners () {
    return (
        
        <div className="banners">
            <span className="headings">Inspiration for your next trip</span>
            <a href="#">
            <div className="banners-img" >
                <img src={Athens} />
                <div className="Down_banners">
                    <span className="banners_title">East Attica <br></br> Regional Unit</span>
                </div>
            </div>
            </a>
            <a>
            <div className="banners-img" >
                <img src={AthensTwo} />
                <div className="Down_banners2">
                    <span className="banners_title">Islands</span>
                </div>
            </div>
            </a>
            <a>
            <div className="banners-img">
                <img src={AthensThree} />
                <div className="Down_banners3">
                    <span className="banners_title">Euboea</span>
                </div>
            </div>
            </a>
            <a>
            <div className="banners-img">
                <img src={AthensFour} />
                <div className="Down_banners4">
                    <span className="banners_title">Athens</span>
                </div>
            </div>
            </a>
        </div>
    )
}