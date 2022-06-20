import React from 'react'
import './cards.css'


function Cards ({src, title, button}){
    return (<div className="cards">
<img src={src} alt="" />
<div className="title">
<h2>{title}</h2>
<a>{button}</a>
</div>
    </div>)
}

export default Cards