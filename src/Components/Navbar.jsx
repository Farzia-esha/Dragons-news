import React, { use } from 'react';
import { NavLink, Link } from 'react-router';
 import userImg from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    const {user,logOut} =use(AuthContext)
    
    const handleLogOut=()=>{
        console.log('user trying to logout');
        logOut()
        .then(()=>{
            alert('you signout successfully')
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    return (
        <div className='flex justify-between items-center py-5'>
            <div className=''>{user && user.email}</div>
            <div className='nav flex gap-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
                <img
                className='w-11 rounded-full'
                 src={`${user ? user.photoURL :userImg}`} alt="" />
                {user ?(
                    <button onClick={handleLogOut} className='btn btn-primary px-10'>
                        LogOut
                    </button>
                    ) : (
                    <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>)}
            </div>
        </div>
    );
};

export default Navbar;