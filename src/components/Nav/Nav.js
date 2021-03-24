import React from "react";
import classes from './Nav.module.css'
const Nav = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            Profile
        </div>
        <div className={classes.item}>
            <a href="">Messages</a>
        </div>
        <div className={classes.item}>
            <a href="">news</a>
        </div>
        <div className={classes.item}>
            <a href="">Music</a>
        </div>
        <div className={classes.item}>
            <a href="">settings</a>
        </div>
    </nav>
}

export default Nav