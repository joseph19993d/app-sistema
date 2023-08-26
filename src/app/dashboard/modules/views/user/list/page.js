'use client'
import { useCallback } from 'react'
import Link from 'next/link'
import InputText from '@/components/inputText/customer/search'
import { Form, useFormik } from 'formik'
import { userCreateValidation } from '@/utils/validations'
import Table3 from '@/components/Table3/page'
import React, { useState } from 'react';

//rounded
const initialValues = {
  name: ''
}

export default function Search () {

  const [datos, setDatos] = useState([
    { nombre: 'John Doe', edad: 30, correo: 'john@example.com' },
    { nombre: 'Jane Smith', edad: 25, correo: 'jane@example.com' },
    { nombre: 'Robert Johnson', edad: 40, correo: 'robert@example.com' },
    { nombre: 'Robert Johnson', edad: 40 , correo: 'robert@example.com' },
   
  ]);

  const onSubmit = useCallback((value, actions) => {
    console.log('value', value, formik)
    setTimeout(() => {
      actions.setSubmitting(false)
    }, 3000)
  }, [])

  const formik = useFormik({
    initialValues,
    validationSchema: userCreateValidation,
    onSubmit
  })

  const searchIsDisable = formik.isValid && formik.dirty

  const logs = (mensaje) => {
    console.log(mensaje)
  }

  console.log('errores', formik.errors)
  console.log('is dirty', formik.dirty)
  console.log('is valid', formik.isValid)
  console.log('searchIsDisable', searchIsDisable)

  const backgroundStyles = {
    
    backgroundImage: "url('/fondo.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    margin: 0,
    marginding: 0,
    
  };

  return (
    <main className='
      flex md:justify-end  
      justify-center ' 
      style={backgroundStyles}
      >

      <div className=''>

        <div className=' '>
       
          <div className='
            bg-white bg-opacity-[0.25]
            justify-center
            rounded-[40px]
            md:mt-[1vh] mt-[2vh]
            md:my-[2vh] my-[2vh]
            md:mr-[3vw] 
            md:px-[4vw] px-10
            md:py-[6vh] py-1
            flex flex-1 flex-col 
            '>

            <form className='flex flex-1 flex-col ' onSubmit={formik.handleSubmit}>
              <div>
                <p className='text text-4xl font-bold  text-white text-center'> Usuarios </p>

              </div>
              <div className='
                flex flex-col 
                mt-6  
                '>

                <span className=' text-1xl font-bold '> 
                  Busqueda 
                </span>

                <div className=' 
                  box-border border-purple-500 border-2 border-none
                  p-1
                  bg-balck bg-opacity-20
                  rounded-full
                  '>

                  <InputText
                    name='name'
                    type='text'
                    placeholder='Nombre'
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.nombre && formik.errors.nombre ? formik.errors.nombre : null}
                  />
                  <input className='text-center
                  btn 
                  border-blue-900 border-1
                  bg-gradient-to-r from-purple-500 to-purple-900 
                  hover:from-pink-500 hover:to-yellow-500
                  mt-2  
                  max-w-[35%] ' value='Buscar' type='submit'  disabled={!searchIsDisable} />
                </div>
              </div>
            </form>
            
            <div className=' 
               box-border border-purple-500 border-2 border-none
               p-2  
               bg-black bg-opacity-20 
               rounded-[10px]  
               mt-2  
               my-4
              '>

              
              <label className=' mt-5 font-bold  mb-0'>
                  Locales:
              </label>


              <div className='  
                box-border border-purple-500 border-none border-2 
                p-1
                bg-balck bg-opacity-20
                rounded-lg
                '>

                <div id='table  inset-0'>
                <Table3 datos={datos} />
                </div>

              </div>

            </div>
            
            <div className='
              mt-1
              text-center 
              '>
                <Link 
                className='
                btn 
                bg-gradient-to-r from-purple-500 to-purple-900 
                hover:from-pink-500 hover:to-yellow-500
                '
                href=''
                >Regitrar un nuevo usuario</Link>
              </div>
          </div>
        </div>

      </div>
    </main>
  )
}
