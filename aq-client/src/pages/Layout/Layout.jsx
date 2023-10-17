import React from 'react';
import { Outlet } from 'react-router-dom';

import './Layout.sass';

import Header from '../../components/Header/Header';

const Layout = () => {
    return (
    <>
        <Header></Header>
        <main className="app-main">
            <Outlet></Outlet>
        </main>
        <footer className="app-footer">
        </footer>   
     </>        
    );
};

export default Layout;