import React from "react";
import classes from './Nav.module.css'
const Nav = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <a href="/profile">Profile</a>
        </div>
        <div className={classes.item}>
            <a href="/messages">Messages</a>
        </div>
        <div className={classes.item}>
            <a href="/news">news</a>
        </div>
        <div className={classes.item}>
            <a href="/music">Music</a>
        </div>
        <div className={classes.item}>
            <a href="/settings">settings</a>
        </div>
    </nav>
}

export default Nav