import React, { useState } from 'react';
import { Link } from "gatsby";
const Nav = () => {
  const [hidden, setHidden]=useState('hidden');
    const showMenu=()=>{
        console.log('mostrar menú');
        setHidden(null);
    }
    const closeMenu=()=>{
      setHidden('hidden');
    }
    return ( 
        <nav className='flex' >
          <div className='hidden  md:flex' >
            <Link activeClassName='border-b-2 border-red-500' className='mr-10' to="/"  >Home</Link>
            <Link activeClassName='border-b-2 border-red-500' className='mr-10' to="/contact">Contact</Link>
            <Link activeClassName='border-b-2 border-red-500' className='mr-10' to="/blogs">Blog</Link>
            <Link activeClassName='border-b-2 border-red-500' className='mr-20' to='/about'>About</Link>
          </div>
          <div className='md:hidden' >
            <button 
                onClick={showMenu}
                className='bg-red-400 text-white px-3 py-2 rounded-lg hover:bg-gray-900 transition font-bold text-xl mt-3'
            >&#9776;</button>
          </div>
          <div className={`fixed z-10 top-0 left-0 w-full ${hidden}`} >
            <div className='flex flex-col items-center justify-center bg-opacity-95 bg-red-200 py-20 rounded w-full shadow-2xl' >
                <Link activeClassName='border-b-2 border-red-500' className='text-xl font-bold mb-3' to="/"  >Home</Link>
                <Link activeClassName='border-b-2 border-red-500' className='text-xl font-bold mb-3' to="/contact">Contact</Link>
                <Link activeClassName='border-b-2 border-red-500' className='text-xl font-bold mb-3' to="/blogs">Blog</Link>
                <Link activeClassName='border-b-2 border-red-500' className='text-xl font-bold mb-3' to='/about'>About</Link>  
            </div>
            <button 
              className='absolute top-1 right-5 bg-red-400 text-white py-1 px-3 text-xl font-bold rounded shadow-xl hover:bg-gray-900 hover:text-white transition' 
              onClick={closeMenu}
            > &#10006;</button>
          </div>
        </nav>
     );
}
 
export default Nav;