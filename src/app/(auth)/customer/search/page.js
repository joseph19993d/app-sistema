'use client'
import { useCallback } from 'react'
import Link from 'next/link'
import InputText from '@/components/inputText/customer/register'
import { Form, useFormik } from 'formik'
import Table from '@/components/Tables/Table'
import { customerRValidation } from '@/utils/validations'
const data = [
  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  { id: 3, name: 'Michael Johnson', age: 35, email: 'michael@example.com' }
]

const initialValues = {
  estado: 'En espera ....',
  ids: '',
  id: '',
  fname: 'En espera',
  lname: '',
  email: '',
  sex: '',
  phone: '',
  direcction: ''
}

export default function Search () {
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

  const logs = (mensaje) => {
    console.log(mensaje)
  }

  console.log('formik', formik.errors)
  console.log('isDisable', formik.dirty)
  console.log('searchIsDisable', formik.dirty)

  return (
    <main className='flex justify-center min-h-screen bg-white md:bg-backgroudnDark  md:items-center'>
      <div className='container flex justify-center '>

        <div className=' flex justify-center max-w-6x1 w-full  md:rounded-3xl md:items-center md:mb-20 h-[700px] md:drop-shadow-3xl md:mt-4'>
          {/* img phase -> */}

          {/* <div className=' box-decoration-clone hover:box-decoration-slice relative h-full md:rounded-s-lg  bg-backgroudnDark  md:flex  md:flex-1 ' /> */}

          <div className='flex bg-white  flex-1 mt-10   h-full justify-center  md:rounded-r-2xl md:px-10 md:py-20 md:mt-0 flex flex-1 flex-col '>

            <form className='relative flex flex-1 flex-col ' onSubmit={formik.handleSubmit}>
              <div>
                <p className='text text-4xl font-bold text-backgroudnDark'>Buscar cliente</p>

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
                  <input className='text-center btn bg-backgroudnDark  mt-2  max-w-[50%] ' value='Buscar' type='submit' disabled={false} />
                </div>
              </div>
            </form>
            <div className='box-border border-cyan-300 p-2 border-2 p-1 bg-blue-100 rounded-lg h-[500px]  my-4'>
              {/* Fake Data: -> */}
              <label className=' font-bold'>
                Datos de persona buscada por id:
              </label>
              <div id='table'>

                <Table data={data} />
              </div>

            </div>
            <div className='m-4 mt-1  text-center '>
              <Link className='btn bg-backgroudnLight truncate  border-red border-2' href='/customer/register'>Regitrar un nuevo cliente</Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
