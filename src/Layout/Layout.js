import React from "react";
import Nav from '../Components/Nav';

const Layout = ({children}) => {
    return(
        <div>
            <Nav />
            {children}
        </div>
    );
}

export default Layout;