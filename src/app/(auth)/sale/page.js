'use client'

import { useCallback } from 'react'
import InputText from '@/components/inputText/customer'
import {InputFilter} from '@/components/inputText/customer'
import { useFormik } from 'formik'
import { supplierRegisterValidation } from '@/utils/validations'
import Image from 'next/image'
import { useState } from 'react'
import Selection,{SelectionAdd} from '@/components/select/page'
import Table3 from '@/components/Table3/page'


const initialValues = {
  idProducto: '',
  name: '',
  address: '',
  phone: '',
  email: ''
}

export default function Sale () {
    
  const [datos, setDatos] = useState([
    { nombre: 'Jabon rey', marca: 'rey', precio: 30000 , cantidad: 1  },
    { nombre: 'Vitmina C', marca: 'jgb', precio: 100000  , cantidad: 1 },
   
  ]);
  const onSubmit = useCallback((value, actions) => {
    console.log('value', value, formik)
    setTimeout(() => {
      actions.setSubmitting(false)
    }, 3000)
  }, [])

  const formik = useFormik({
    initialValues,
    validationSchema: supplierRegisterValidation,
    onSubmit
  })

  const [producto, setproducto] = useState([
    { id: 1, nombre: 'Nombre', cantidad: 1 },
    { id: 2, nombre: 'Codigo',  cantidad: 2 },
  ])

  const [cliente, setcliente] = useState([
    { id: 1, nombre: 'Juan Carlos Serrano' },
    { id: 2, nombre: 'Maria Marcela' },
  ])

  const isDisable = formik.isValid || formik.isSubmitting && formik.dirty

  console.log('Mensajes de error = ', formik.errors)
  console.log('Esta sucio =', formik.dirty)
  console.log('Es valido =', formik.isValid)

  const searchIsDisable = formik.isValid && formik.dirty
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <main className='flex justify-center min-h-screen bg-black md:bg-gradient-to-r md:from-black-500 md:to-blue-900  md:items-center overflow-auto'>
      <div className='container flex justify-center '>

        <div className=' flex justify-center max-w-6x1 w-full  md:rounded md:items-center md:mb-20 h-auto max-w-[800px] md:drop-shadow-3xl md:mt-4'>
          {/* img phase -> */}

          {/* <div className=' box-decoration-clone hover:box-decoration-slice relative h-full md:rounded-s-lg  bg-backgroudnDark  md:flex  md:flex-1 ' /> */}

          <div className='flex  bg-white  flex-1 mt-10   h-full justify-center  md:rounded-lg md:px-10 md:py-20 md:mt-0 flex flex-1 flex-col '>

            <form className='relative flex flex-1 flex-col ' onSubmit={formik.handleSubmit}>

              <div>
                <p className='text text-4xl font-bold text-blue-800'>Registro de venta</p>
              </div>

              <div className='relative flex flex-col mt-6 gap-2  '>

                <span className='text-1xl font-bold text-blue 600e '>Productos:</span>

                <div className='  box-border border-cyan-30 border-2 p-1 bg-blue-100 rounded-lg pt-0'>

                    <div className='border-cyan-30 border-2 p-2 bg-blue-300 rounded-lg mt-3 mb-3 ' >
                      
                      <InputFilter
                          name='name'
                          type='text'
                          placeholder='Nombre de producto'
                          value={formik.values.productName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          errorMessage={formik.touched.productName && formik.errors.productName ? formik.errors.productName : null}
                      />

                      <SelectionAdd 
                        label='Producto: ' 
                        name='idProducto' 
                        type='select' 
                        opcion="nombre" 
                        opcionName="id" 
                        datos={producto} 
                        />

                    </div>
                    <label>
                        Productos a comprar
                    </label>
                    <div className='flex justify-center border-cyan-30 border-2 p-2 bg-blue-300 rounded-lg mt-3 mb-3 '>   
                        <Table3 datos={datos} />
                    </div>
                    
                    <div className='border-cyan-30 border-2 p-2 bg-blue-300 rounded-lg mt-3 mb-3 '>
                    <InputFilter
                          name='name'
                          type='text'
                          placeholder='Nombre:'
                          value={formik.values.productName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          errorMessage={formik.touched.productName && formik.errors.productName ? formik.errors.productName : null}
                      />

                    <Selection 
                        label='Cliente: ' 
                        name='idcliente' 
                        type='select' 
                        opcion="nombre" 
                        opcionName="id" 
                        datos={cliente} 
                        />
                    </div>                       

                  <InputText
                    name='retailPrice'
                    type='number'
                    placeholder='Precio al detal'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}
                  />
                  
                </div>
              </div>

              <div className='m-4'>
                <input className='text-center
                    btn 
                    border-blue-900 border-1
                    bg-gradient-to-r from-blue-500 to-blue-900 hover:from-pink-500 hover:to-yellow-500
                    mt-2
                    ml-0
                    max-w-[40%] ' value='Registrar' type='submit'  disabled={!isDisable} 
                />
              </div>

            </form>
          </div>
        </div>

      </div>
    </main>
  )
}
