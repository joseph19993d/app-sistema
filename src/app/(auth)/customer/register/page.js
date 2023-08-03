'use client'
import { useCallback } from 'react'
import Link from 'next/link'
import InputText from '@/component/inputText/customer/register'
import { useFormik } from 'formik'
import { loginValidation } from '@/utils/validations'

const initialValues = {

  email: '',
  password: ''
}

export default function SingIn () {
  const onSubmit = useCallback((value, actions) => {
    console.log('value', value, formik)
    setTimeout(() => {
      actions.setSubmitting(false)
    }, 3000)
  }, [])

  const formik = useFormik({
    initialValues,
    validationSchema: loginValidation,
    onSubmit
  })

  const isDisable = !formik.isValid || formik.isSubmitting && formik.dirty


  const logs =(mensaje)=>{
    console.log(mensaje );
  }

  console.log('formik', formik.errors)
  console.log('isDisable', formik.dirty)
  console.log('searchIsDisable', formik.dirty )

  return (
    <main className='flex justify-center min-h-screen bg-white md:bg-with md:items-center'>
      <div className='container flex justify-center '>

        <div className=' flex justify-center max-w-6x1 w-full  md:rounded-3xl md:items-center md:mb-20 h-[800px] md:drop-shadow-3xl'>
          {/* image at the left */}
          <div className=' box-decoration-clone hover:box-decoration-slice relative h-full md:rounded-s-lg  bg-backgroudnDark  md:flex  md:flex-1 ' />
          <div className='flex bg-white  flex-1 mt-40  px- h-full justify-center  md:rounded-r-2xl md:px-10 md:py-20 md:mt-0'>
            <form className='relative flex flex-1 flex-col ' onSubmit={formik.handleSubmit}>
              <div >
                <p className='text text-4xl font-bold text-backgroudnDark'>Registro de cliente</p>

              </div>
              <div className='flex flex-col mt-6 gap-2   '>
                
                <span className='text-base'>Buscar Persona por ID</span>
                <div className=' box-border border-cyan-300 p-2 border-2 p-1 bg-blue-100 rounded-lg'>

                  <InputText
                    name='id-search'
                    type='number'
                    placeholder='ID de Persona'
                    value={formik.values.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.id && formik.errors.id ? formik.errors.id : null}
                  />
                  {/* Btn search */}
                  <input className='text-center btn bg-backgroudnDark  mt-2  max-w-[50%] ' value='Buscar' disabled={false} />
                  {logs("corriendo log")}
                </div>
                
                <span className='text-base'>Ingrese los dato del nuevo cliente</span>
                {logs(" value id comign")}
                <InputText
                  name='name'
                  type='number'
                  placeholder='ID de Persona'
                  value={formik.values.id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  errorMessage={formik.touched.id && formik.errors.id ? formik.errors.id : null}
                />

                <InputText
                  name='fname'
                  type='text'
                  placeholder='Primer Nombre'
                  value={formik.values.fname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  errorMessage={formik.touched.name && formik.errors.name ? formik.errors.name : null}
                />

                <InputText
                  name='Lname'
                  type='text'
                  placeholder='Apellido'
                  value={formik.values.Lname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  errorMessage={formik.touched.name && formik.errors.name ? formik.errors.name : null}
                />
                <InputText
                  name='email'
                  type='email'
                  placeholder='Email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  errorMessage={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                />

                <InputText
                  name='phone'
                  type='phone'
                  placeholder='Celular'
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  errorMessage={formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}
                />

                <div className='my-3'>
                  <label className='mr-2 ml-1'>Sexo:</label>
                  <select id='sex' name='sex'>
                    <option value='null'> ... </option>
                    <option value='m'>Masculino</option>
                    <option value='f'>Femenino</option>
                    <option value='other'>Otro</option>
                  </select>
                </div>

                <InputText
                  name='direccion'
                  type='text'
                  placeholder='Direccion'
                  value={formik.values.direccion}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  errorMessage={formik.touched.direccion && formik.errors.direccion ? formik.errors.direccion : null}
                />

              </div>

              <div className='m-4'>
                <input className='btn bg-backgroudnDark' type='submit' value='Regitrar cliente' disabled={isDisable} />

              </div>

            </form>
          </div>
        </div>

      </div>
    </main>
  )
}
