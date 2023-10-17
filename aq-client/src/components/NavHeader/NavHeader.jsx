import React from 'react';

import Burger from '../Burger/Burger';
import MenuMain from '../MenuMain/MenuMain';
import MenuPersonal from '../MenuPersonal/MenuPersonal';
const arrLinksMenuMain = [
    {
        name: "Главная",
        link: "/",
    },
    {
        name: "Услуги",
        link: "/services",
    },
    {
        name: "Разрешения",
        link: "/permissions",
    },
    {
        name: "Отзывы",
        link: "/reviews",
    },
    {
        name: "Новости",
        link: "/news",
    },
    {
        name: "Контакты",
        link: "/contacts",
    },
];
const menuPersonal = [
    {
        name: 'Вход',
        link: '/login'
    },
    {
        name: 'Регистрация',
        link: '/auth'
    },

]

const NavHeader = () => {
    return (
        <nav className='app-header-nav container'>
            <Burger></Burger>
            <MenuMain arrLinksMenuMain = {arrLinksMenuMain}></MenuMain>
            <MenuPersonal menuPersonal = {menuPersonal}></MenuPersonal>
        </nav>
    );
};

export default NavHeader;