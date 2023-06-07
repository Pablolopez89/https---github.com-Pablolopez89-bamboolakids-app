import React from 'react'

function Testimonio () {
    return (
        <div className='contenedor-testimonio'>
            <img 
            className='imagen-testimonio'
            src={require('../imagenes/Ropa1.jpg')}
            alt='Foto de ropa'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
                <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
                <p className='texto-testimonio'>"Siempre he tenido problemas para aprender 
                Siempre he tenido problemas para aprender Siempre he tenido problemas para 
                aprender Siempre he tenido problemas para aprender"</p>
            </div>
        </div>
    )
}

export default Testimonio