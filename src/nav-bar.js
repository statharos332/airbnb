import React from 'react'
import Logo from './Airbnb_Logo.png'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import { Avatar } from '@material-ui/core'
import  ExpandMore  from '@material-ui/icons/ExpandMore'


export default function Navbar () {
    return (
        
        <nav className="nav">
            <img className="header_icon"  src={Logo}/>

            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMore />
                <Avatar />
            </div>
        </nav>
   
    )
}