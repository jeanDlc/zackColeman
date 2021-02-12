import React, { useEffect, useState } from 'react';
import Alert from '../components/Alert';
import Container from '../components/Container';
import Layout from '../components/layout';
import SEO from '../components/seo';
const Contact = () => {
    //STATES LOCALES
    const [showAlert, setShowAlert]=useState(false);
    const [stateForm, setStateForm]=useState({
        name:'',
        lastName:'',
        email:'',
        message:''
    });
    const [error, setError]=useState(false);

    //RESETEA EL FORMULARIO
    const resetForm=()=>{
        setStateForm({
            name:'',
            lastName:'',
            email:'',
            message:''
        })
    }

    const handleChange=e=>{
        setStateForm({
            ...stateForm,
            [e.target.name]:e.target.value
        });
    }
    
    const handleSubmit=e=>{
        e.preventDefault();
        //VERIFICA QUE LOS VALORES INGRESADOS NO ESTÉN VACÍOS
        if(stateForm.email.trim()==='' || stateForm.name.trim()==='' || stateForm.lastName.trim()==='' || stateForm.message.trim()===''){
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }

        //MUESTRA MENSAJE SATISFACTORIO
        resetForm();
        setShowAlert(true);

    }
    useEffect(()=>{
        //OCULTAR ALERTA DESPUÉS DE 3 SEGUNDOS
        if(showAlert){
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
    },[showAlert]);
    return ( 

        <Layout>
            {showAlert && <Alert msg='Message sent successfully'/>}
            <SEO title="Contact" />
            <Container>
                <div className='pt-10 pb-10 md:pb-20 rounded-lg bg-red-100 px-3 mb-5 md:flex flex-col justify-center items-center' >
                    <h1 className='text-center text-red-400 uppercase mb-5' >Contact</h1>
                    <form className='md:w-2/5 mb-3' onSubmit={handleSubmit} >
                        {error?(
                            <div 
                                className='bg-red-200 text-red-900 w-full p-3 text-center mb-3 uppercase font-bold transition' >
                                    Fill in all the fields
                            </div>
                        ) : null}
                        <div className='mb-3' >
                            <input type="text" 
                                
                                name='name'
                                className='placeholder-red-400 appearance-none border rounded focus:outline-none focus:border-red-400 border-red-200 p-3 w-full' 
                                placeholder='First name'
                                onChange={handleChange} 
                                value={stateForm.name}
                            />
                        </div>
                        <div className='mb-3' >
                            <input type="text" 
                                name='lastName'
                                className='placeholder-red-400 appearance-none border rounded focus:outline-none focus:border-red-400 border-red-200 p-3 w-full' 
                                placeholder='Last name'
                                onChange={handleChange} 
                                value={stateForm.lastName}
                            />
                        </div>
                        <div className='mb-3' >
                            <input type="email" 
                                name='email'
                                className='placeholder-red-400 appearance-none border rounded focus:outline-none focus:border-red-400 border-red-200 p-3 w-full' 
                                placeholder='Email address' 
                                onChange={handleChange} 
                                value={stateForm.email}
                            />
                        </div>
                        <div className='mb-3' >
                            <textarea 
                                name='message'
                                className='placeholder-red-400 appearance-none border rounded focus:outline-none focus:border-red-400 border-red-200 p-3 w-full h-60' name="message" id="message" 
                                placeholder='Enter your message '
                                onChange={handleChange} 
                                value={stateForm.message}
                            ></textarea>
                        </div>
                        <button className='mt-3 rounded-lg bg-red-500 text-white w-full p-3 text-base font-bold uppercase hover:bg-red-600 transition'  type='submit' >Send</button>
                    </form>
                </div>
            </Container>
        </Layout>
     );
}
 
export default Contact;