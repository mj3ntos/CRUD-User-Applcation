import React from "react";
import { NavLink } from "react-router-dom";
import {Typography, AppBar,  Toolbar, CssBaseline } from "@material-ui/core";



const Nav = () => {
    return(
        <div><CssBaseline />
            <AppBar position="relative">
            <Toolbar>
            <nav>
                <ul className="nav-ul">
                    <li className="nav-li"><NavLink className="nav_link" to="/"><Typography variant="h5">Home</Typography></NavLink></li>
                    <li className="nav-li"><NavLink className="nav_link" to="/create"><Typography variant="h5">Create User</Typography></NavLink></li>
                </ul>
            </nav>
            </Toolbar>
        </AppBar>
      </div>
    );
};

export default Nav;