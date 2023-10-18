import React from 'react';

import './MenuPersonal.sass';

const MenuPersonal = ({menuPersonal}) => {
    return (
        <ul className='menu-personal'>
            {
                menuPersonal.map((e, index) => {
                    return (
                        <li className="menu-personal__item" key={index}>
                            <a href={e.link}>{e.name}</a>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default MenuPersonal;