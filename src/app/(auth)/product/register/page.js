'use client'

import { useCallback } from 'react'
import InputText from '@/components/inputText/customer/register'
import { useFormik } from 'formik'
import { productRegisterValidation } from '@/utils/validations'
import Image from 'next/image'
import { useState } from 'react'
import Selection from '@/components/select/page'


const initialValues = {
  idCategory: '',
  idBrand:'',
  name: '',
  description: '',

}

export default function Register () {
  const onSubmit = useCallback((value, actions) => {
    console.log('value', value, formik)
    setTimeout(() => {
      actions.setSubmitting(false)
    }, 3000)
  }, [])

  const formik = useFormik({
    initialValues,
    validationSchema: productRegisterValidation,
    onSubmit
  })

  const [persona, setPersona] = useState([
    { id: 1, nombre: 'Andres', descripcion: 'A@example.com' },
    { id: 2, nombre: 'Joseph', descripcion: 'O@example.com' },
  ])

  const isDisable = formik.isValid || formik.isSubmitting && formik.dirty

  console.log('Mensajes de error = ', formik.errors)
  console.log('Esta sucio =', formik.dirty)
  console.log('Es valido =', formik.isValid)

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <main className='flex justify-center min-h-screen bg-white md:bg-gradient-to-r md:from-red-500 md:to-blue-900  md:items-center '>
      <div className='container flex justify-center '>

        <div className=' flex justify-center max-w-6x1 w-full  md:rounded md:items-center md:mb-20 max-h-[700px] max-w-[800px] md:drop-shadow-3xl md:mt-4'>
          {/* img phase -> */}

          {/* <div className=' box-decoration-clone hover:box-decoration-slice relative h-full md:rounded-s-lg  bg-backgroudnDark  md:flex  md:flex-1 ' /> */}

          <div className='flex  bg-white  flex-1 mt-10   h-full justify-center  md:rounded-lg md:px-10 md:py-20 md:mt-0 flex flex-1 flex-col '>

            <form className='relative flex flex-1 flex-col ' onSubmit={formik.handleSubmit}>

              <div>
                <p className='text text-4xl font-bold text-blue-800'>Registro de producto</p>
              </div>

              <div className='relative flex flex-col mt-6 gap-2  '>

                <span className='text-1xl font-bold text-blue 600e '>Ingresar datos del nuevo producto</span>

                <div className='box-border border-cyan-30 border-2 p-1 bg-blue-100 rounded-lg pt-2'>
                  <Selection 
                    label='Categoria ' 
                    name='idCategory' 
                    type='select' 
                    opcion="nombre" 
                    opcionName="id" 
                    datos={persona} 
                    />
                  
                  <Selection 
                    label='Marca ' 
                    name='idBrand' 
                    type='select' 
                    opcion="nombre" 
                    opcionName="id" 
                    datos={persona} 
                    />

                  <InputText
                    name='name'
                    type='text'
                    placeholder='Nombre'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.name && formik.errors.name ? formik.errors.name : null}
                  />

                  <InputText
                    name='description'
                    type='text' 
                    placeholder='Descripcion '
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.description && formik.errors.description ? formik.errors.description : null}
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
