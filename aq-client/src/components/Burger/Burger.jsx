import React from 'react';

import './Burger.sass';

import {useSelector, useDispatch} from 'react-redux';
import {open} from '../../features/header/burgerSlice';

const Burger = () => {
    const burgerClasses = useSelector((state) => state.burger.classes).join(' ');
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