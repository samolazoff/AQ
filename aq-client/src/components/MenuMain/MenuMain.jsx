import React from 'react';
import { NavLink} from "react-router-dom";

import './MenuMain.sass';

const MenuMain = ({arrLinksMenuMain}) => {
    return (
        <ul className='menu-main'>
            {
                arrLinksMenuMain.map(e=>{
                    return(
                        <li className='menu-main__item'>
                            <NavLink href={e.link}>{e.name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default MenuMain;