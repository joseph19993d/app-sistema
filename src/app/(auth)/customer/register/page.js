'use client'

import { useCallback } from 'react'
import InputText from '@/components/inputText/customer/register'
import { useFormik } from 'formik'
import { customerRValidation } from '@/utils/validations'

const initialValues = {
  id: '',
  fname: '',
  lname: '',
  email: '',
  phone: '',
  sex: '',
  direcction: ''
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
    validationSchema: customerRValidation,
    onSubmit
  })

  const isDisable = !formik.isValid || formik.isSubmitting && formik.dirty

  console.log('Mensajes de error = ', formik.errors)
  console.log('Esta sucio =', formik.dirty)
  console.log('Es valido =', formik.isValid)

  return (

    <main className='flex justify-center min-h-screen bg-white md:bg-backgroudnDark  md:items-center'>
      <div className='container flex justify-center '>

        <div className=' flex justify-center max-w-6x1 w-full  md:rounded-3xl md:items-center md:mb-20 h-[800px] md:drop-shadow-3xl mt-3'>
          {/* img phase -> */}

          <div className=' box-decoration-clone hover:box-decoration-slice relative h-full md:rounded-s-lg  bg-backgroudnDark  md:flex  md:flex-1 ' />

          <div className='flex bg-white  flex-1 mt-10  h-full justify-center  md:rounded-r-2xl md:px-10 md:py-10 md:mt-0'>

            <form className='relative flex flex-1 flex-col ' onSubmit={formik.handleSubmit}>
              <div>
                <p className='text text-4xl font-bold text-backgroudnDark'>Registro de cliente</p>

              </div>
              <div className='relative flex flex-col mt-6 gap-2  '>

                <span className='text-1xl font-bold text-blue 600e'>Ingresar datos del nuevo cliente</span>

                <InputText
                  name='id'
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
                  errorMessage={formik.touched.fname && formik.errors.fname ? formik.errors.fname : null}
                />

                <InputText
                  name='lname'
                  type='text'
                  placeholder='Apellido'
                  value={formik.values.lname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  errorMessage={formik.touched.lname && formik.errors.lname ? formik.errors.lname : null}
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
                  type='number'
                  placeholder='Celular'
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  errorMessage={formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}
                />
                <div className='inputs !pr-[40px]'>
                  <label className='text-1xl '> Sexo </label>

                  <select
                    className='text-1xl   '
                    name='sex' // Nombre del campo en formik.values
                    type='select'
                    as='select'
                    value={formik.values.sex = 'null'}
                    onChange={formik.handleChange} // Manejar cambios
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.phone && formik.errors.phone ? formik.errors.sex : null}
                  >

                    <option value='null' className='text-red'> Seleccionar </option>
                    <option value='m'> Masculino</option>
                    <option value='f'> Femenino </option>
                    <option value='Other'> Otro </option>

                  </select>
                </div>

                <InputText
                  name='direcction'
                  type='text'
                  placeholder='Direccion'
                  value={formik.values.direcction}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  errorMessage={formik.touched.direcction && formik.errors.direcction ? formik.errors.direcction : null}
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
