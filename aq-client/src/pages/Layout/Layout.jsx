import React from 'react';
import { Outlet } from 'react-router-dom';

import './Layout.sass';

const Layout = () => {
    return (
    <>
        <header> asdasd</header>
        <main className="app-main">
            <Outlet></Outlet>
        </main>
        <footer className="app-footer">
        </footer>   
     </>        
    );
};

export default Layout;