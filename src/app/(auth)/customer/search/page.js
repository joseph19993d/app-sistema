'use client'
import { useCallback } from 'react'
import Link from 'next/link'
import InputText from '@/components/inputText/customer/search'
import { Form, useFormik } from 'formik'
import { customerSearch } from '@/utils/validations'
import Table3 from '../../../../components/Table3/page'
import { Table } from '@phosphor-icons/react'
import React, { useState } from 'react';

//rounded
const initialValues = {
  ids: '',
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
    validationSchema: customerSearch,
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

  return (
    <main className='flex justify-center min-h-screen bg-white md:bg-gradient-to-r md:from-red-500 md:to-blue-900  md:items-center '>
      <div className='container flex justify-center '>

        <div className=' flex justify-center max-w-6x1 w-full  md:rounded md:items-center md:mb-20 h-[700px] max-w-[800px] md:drop-shadow-3xl md:mt-4'>
          {/* img phase -> */}

          {/* <div className=' box-decoration-clone hover:box-decoration-slice relative h-full md:rounded-s-lg  bg-backgroudnDark  md:flex  md:flex-1 ' /> */}

          <div className='flex  bg-white  flex-1 mt-10   h-full justify-center  md:rounded-lg md:px-10 md:py-20 md:mt-0 flex flex-1 flex-col '>

            <form className='relative flex flex-1 flex-col ' onSubmit={formik.handleSubmit}>
              <div>
                <p className='text text-4xl font-bold  text-blue-800'>Buscar cliente</p>

              </div>
              <div className='flex flex-col mt-6 gap-2   '>

                <span className=' text-1xl font-bold '>Buscar Persona por ID</span>
                <div className=' box-border border-cyan-300 p-2 border-2 p-1 bg-blue-100 rounded-lg'>

                  <InputText
                    name='ids'
                    type='number'
                    placeholder='ID de Persona'
                    value={formik.values.ids}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.ids && formik.errors.ids ? formik.errors.ids : null}
                  />
                  <input className='text-center
                  btn 
                  border-blue-900 border-1
                  bg-gradient-to-r from-blue-500 to-blue-900 hover:from-pink-500 hover:to-yellow-500
                  mt-2  
                  max-w-[35%] ' value='Buscar' type='submit'  disabled={!searchIsDisable} />
                </div>
              </div>
            </form>
            <div className='box-border border-cyan-300 p-2 border-2 p-1 bg-blue-100 rounded-lg h-[500px]  my-4'>
              {/* Fake Data: -> */}
              <label className=' font-bold '>
                Datos de persona buscada por id:
              </label>
              <div id='table  inset-0'>
               <Table3 datos={datos} />
              </div>

            </div>
            <div className='m-4 mt-1  text-center '>
              <Link className='
              btn 
              bg-gradient-to-r from-blue-500 to-blue-900 hover:from-pink-500 hover:to-yellow-500
              ' href='/customer/register'
              >Regitrar un nuevo cliente</Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
