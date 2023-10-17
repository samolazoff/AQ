import React from 'react';
import { Outlet } from 'react-router-dom';

import './Layout.sass';

import Header from '../../components/Header/Header';
import Scripts from '../../components/Scripts/Scripts';

const Layout = () => {
    return (
    <>
        <Header></Header>
        <main className="app-main">
            <Outlet></Outlet>
        </main>
        <footer className="app-footer">
            <Scripts></Scripts>
        </footer>   
     </>        
    );
};

export default Layout;