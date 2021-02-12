import React from 'react';
const Alert = ({msg}) => {
    return ( 
        <div className='absolute top-10 left-5 bg-gray-900 py-3 px-4 rounded-lg'>
            <p className='text-xl text-white m-0 font-bold uppercase' >{msg} </p>
        </div>
     );
}
 
export default Alert;