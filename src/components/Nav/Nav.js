import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Nav.module.css';

const setActive = ({isAcitve}) => isAcitve ? 'color:gold' : ''


const Nav = () => {
    return  ( <nav className={classes.nav}>
    <div className={classes.item}>
    <NavLink  to="/profile" style={({isActive}) => ({color : isActive ? 'gold' : 'white'})} >Profile</NavLink>
    </div>
    <div className={classes.item}>
        <NavLink exact to="/dialogs" style={({isActive}) => ({color : isActive ? 'gold' : 'white'})}  >Messages</NavLink>
    </div>
    <div className={classes.item}>
        <NavLink to ="/news" style={({isActive}) => ({color : isActive ? 'gold' : 'white'})}  >News</NavLink>
    </div>
    <div className={classes.item}>
        <NavLink to = "/music" style={({isActive}) => ({color : isActive ? 'gold' : 'white'})}  >Music</NavLink>
    </div>
    <div className={classes.item}>
        <NavLink to = "/Settings" style={({isActive}) => ({color : isActive ? 'gold' : 'white'})}  >Settings</NavLink>
    </div>
  </nav> )
}

export default Nav;