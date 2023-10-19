import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './Burger.sass';

import {open} from '../../features/header/menuSlice';

const Burger = () => {
    const burgerClasses = useSelector((state) => state.menu.classesBurger).join(' ');
    const dispatch = useDispatch();

    return (
        <div className={burgerClasses} onClick={() => dispatch(open())}>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
        </div>
    );
};

export default Burger;