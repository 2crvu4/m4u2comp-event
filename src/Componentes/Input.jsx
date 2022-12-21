import React from 'react'

const Input = ({nombre, setNombre, password, setPassword}) => {


  return (
    // formulario
    <div>
        {/* input nombre */}
        <label htmlFor='nombre'>NOMBRE</label>
        <input
            type='text'
            className='form-control mb-3'
            placeholder='Ingresa tu nombre'
            id='nombre'
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
        />

        {/* input contraseña */}
        <label htmlFor='password'>CONTRASEÑA</label>
        <input
            type='password'
            className='form-control mb-3'
            placeholder='Ingresa tu contraseña'
            id='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />

    </div>
  )
}

export default Input