import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img className='w-[400px]' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-accent'>{ format(new Date(),'eeee , MMMM dd , yyyy') }</p>
        </div>
    );
};

export default Header;