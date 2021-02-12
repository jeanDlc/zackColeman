import { Link } from 'gatsby';
import React from 'react';
const InvitationSection = () => {
    return ( 
        <section style={{
            background:'rgb(241,112,112',
            background:'linear-gradient(45deg, rgba(241,112,112,1) 50%, rgba(255,255,255,0) 50%)',
            margin:'60px 0 0 0',
            
        }}>
            <div className='h-full md:flex justify-between items-center sm:py-20 md:py-32 lg:py-32' >
                <div 
                    className='md:w-1/2 py-16 md:p-3 text-center bg-red-400 opacity-90 md:bg-transparent' 
                    >
                    <h3 
                        className='text-white font-bold text-2xl lg:text-6xl text-center' 
                    > Explore my blog</h3>
                    <Link 
                        className='bg-white text-red-400 mt-8 pt-3 pb-4 px-12 rounded-tl-lg rounded-bl-lg rounded-br-lg text-2xl md:text-4xl font-sans hover:bg-red-300 hover:text-white transition inline-block'  
                        to='/blogs' 
                    >Blog</Link>
                </div>
                <div 
                    className='md:w-1/2 text-center py-24 md:p-3 bg-white md:bg-transparent  opacity-90' >
                    <blockquote className='px-4'>
                        <p 
                            className=' text-2xl lg:text-6xl'
                        >A professional writer is an amateur who didn’t quit</p>
                        <footer 
                            className='text-red-500 font-bold' 
                        >- Richard Bach</footer>
                    </blockquote>
                </div>
            </div>
        </section>
     );
}
 
export default InvitationSection;