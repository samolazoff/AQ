import React from 'react';

import './MenuPersonal.sass';

const MenuPersonal = ({menuPersonal}) => {
    return (
        <ul className='menu-personal'>
            {
                menuPersonal.map(e => {
                    return (
                        <li className="menu-personal__item">
                            <a href={e.link}>{e.name}</a>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default MenuPersonal;