import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

import './MenuPersonal.sass';

const MenuPersonal = ({menuPersonal}) => {
    const menuPersonalClasses = useSelector((state) => state.menu.classesMenuPersonal).join(' ');

    return (
        <ul className={menuPersonalClasses}>
            {
                menuPersonal.map((e, index) => {
                    return (
                        <li className="menu-personal__item" key={index}>
                            <NavLink to={e.link}>{e.name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default MenuPersonal;