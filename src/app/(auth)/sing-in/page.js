'use client'
import { useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import InputText from '@/components/inputText'
import { useFormik } from 'formik'
import { loginValidation } from '@/utils/validations'

const initialValues = {
  email: '',
  password: ''
}

export default function Sing () {
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

  console.log('formik', formik.errors)
  console.log('isDisable', formik.dirty)
  return (
    <main className="flex justify-center min-h-screen bg-white md:bg-slate-200 md:items-center">
      <div className="container flex justify-center  md:rounded-3xl md:items-center md:mb-20 h-fit md:drop-shadow-3xl">
          <div className="flex bg-white  mt-40  px- h-full justify-center  md:rounded-2xl md:px-9 md:py-20 md:mt-0">
            <form className="flex flex-1 flex-col w-80" onSubmit={formik.handleSubmit}>
              <div>
                <p className="text text-4xl font-bold text-PrimaryDark">Log in</p>
                <span className="text-base">Sign in to start your session</span>
              </div>
              <div className="flex flex-col mt-6 gap-2">

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
                  name='password'
                  type='password'
                  placeholder='Password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  errorMessage={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                />

              </div>
              <div className='mb-4'>
                <span>Trouble logging in?</span>

              </div>
              <div className="m-4">
                <input className="btn bg-PrimaryDark" type="submit" value='log in' disabled={isDisable}/>

              </div>
              <div className="m-4 mt-1  text-center ">
                <Link className="btn bg-SecondaryDark truncate " href='/sing-up'>register a new account</Link>
              </div>

            </form>
          </div>

      </div>
    </main>
  )
}
