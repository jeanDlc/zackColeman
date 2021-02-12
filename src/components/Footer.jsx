import { Link } from 'gatsby';
import React from 'react';
import Container from './Container';
const Footer = () => {
    //las clases de footer son para que este mismo quede pegado en la parte inferior del documento
    return ( 
        <footer className='bg-red-400 w-full absolute bottom-0 h-20' >
            <Container>
                <div className='md:flex justify-between pt-5 md:pt-7 md:pb-5' >
                    <a target='_blank' href='https://github.com/jeanDlc' className='inline-block text-white text-center font-bold m-0' >Jean Pierre de la Cruz</a>
                    <p className='text-white text-center m-0' >Todos los derechos reservados {new Date().getFullYear()} &copy; </p> 
                </div>
            </Container>
        </footer>
     );
}
 
export default Footer;