import React from 'react';

export default function Avatar() {
    return(
        <div className='container'>
            <div className='avatar-container'>
                <img 
                    className='avatar-image'
                    src='https://mdbcdn.b-cdn.net/img/new/avatars/8.webp'
                    alt='Jhon Doe'
                />
                <h5 className='avatar-name'>Jhon Doe</h5>
                <p className='avatar-title'>Web Designer</p>
            </div>
        </div>
    );
}