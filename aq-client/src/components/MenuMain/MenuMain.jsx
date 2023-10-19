import React from 'react';
import { NavLink} from "react-router-dom";

import { useSelector } from 'react-redux';

import './MenuMain.sass';

const MenuMain = ({arrLinksMenuMain}) => {
    const menuMainClasses = useSelector((state) => state.menu.classesMenuMain).join(' ');
    return (
        <ul className={menuMainClasses}>
            {
                arrLinksMenuMain.map((e, index)=>{
                    return(
                        <li className='menu-main__item' key={index}>
                            <NavLink to={e.link}>{e.name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default MenuMain;