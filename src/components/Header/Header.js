import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>
{
    return  <header className={classes.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png" alt=""/>
        <span>
            {props.isAuth ? props.email :  <NavLink to = {"/login/"}>login</NavLink>}
        </span>
    </header>

}

export default Header