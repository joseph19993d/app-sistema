'use client'

// buscara usuario por cada cambio y se agregara a los datos del formulario principal de usuario 
//  

import { useCallback } from 'react'
import InputText from '@/components/inputText/customer'
import { useFormik } from 'formik'
import { userCreateValidation } from '@/utils/validations'
import Image from 'next/image'
import { useState } from 'react'
import Selection from '@/components/select/page'
import Person from '../../person/index/page'
import classNames from 'classnames'
import { data } from 'autoprefixer'

const initialValues = {
  idRole: '',
  idPersona: '',
  idLocation: '',
  userName: '',
  password: ''
}


export default function User ({ local,dataPerson}) {

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


  const [rol, setRol] = useState([
      { id: 1, nombre: 'Admin' },
      { id: 2, nombre: 'Caja' },
      { id: 2, nombre: 'Cliente' }
  ])

  const [persona, setPersona] = useState([
      { id: 1, nombre: 'Andres', descripcion: 'A@example.com' },
      { id: 2, nombre: 'Joseph', descripcion: 'O@example.com' },
  ])

  const [location, setLocation] = useState([
      { id: 1, nombre: 'Andres', descripcion: 'A@example.com' },
      { id: 2, nombre: 'Joseph', descripcion: 'O@example.com' },
  ])

  const dataArray = Array.isArray(dataPerson) ? dataPerson : [dataPerson];
  if (dataPerson) {
    console.log("Se pasaron datos data");
    console.log(dataPerson);
    
  } else {
    console.log("NO se pasaron datos data");
    console.log(local);
    console.log(dataPerson);
  }
  const dataPersonValidation = dataPerson? true:false;

  const changeIdPersona =()=>{
    formik.values.idPersona = dataPerson.id
  }

  const isDisable = formik.isValid || formik.isSubmitting && formik.dirty

  console.log('usuario formik  Mensajes de error = ', formik.errors)
  console.log('usuario formik Esta sucio =', formik.dirty)
  console.log('usuario formik Es valido =', formik.isValid)
  console.log('usuario formik formik.isValid =', formik.isValid)


  const backgroundStyles = dataPerson||local? {
    
    
  }:{

    backgroundImage: "url('/fondo.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    margin: 0,
    marginding: 0,

  }

  const idPersonaChange=()=>{
    formik.setFieldValue('idPersona', '2')
  }

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    
    <main className=' flex md:justify-end 
    justify-center
    '
    style={backgroundStyles}
    >
      <div className=''>

        <div className=''>

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
                <p className='text text-4xl font-bold  text-white text-center'>
                  {/* Administracion Usuario  */}
                  Usuario
                </p>
              </div>

              <div className='
                flex flex-col 
                mt-6  
                '>
                {dataPersonValidation?(
                  <label className='mb-2' key={875}>
                    Nombre: {''+dataPerson.firstName +' '+ dataPerson.lastName +''}
                  </label>
                )
                :
                <div>
                  <span 
                    className='text-1xl font-bold' 
                    title='la persona c'
                    >

                    Buscar persona

                  </span>

                    <InputText
                      name='Username'
                      type='text'
                      placeholder='Nombre / id / apellido'
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      errorMessage={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                    />
                  </div>
                }

                <div className='box-border border-cyan-30 borner-none p-1 bg-black bg-opacity-20 rounded-lg pt-2'>

                    <label className="text-1xl font-bold"> Datos de sesion </label>

                    {dataPersonValidation?
                      changeIdPersona()
                    :
                      <Selection 
                      label='Persona :' 
                      name='idPersona' 
                      type='select' 
                      opcion="nombre" 
                      opcionName="idPersona" 
                      datos={persona}
                      />
                    }

                    <InputText
                    name='userName'
                    type='text'
                    placeholder='Nombre de usuario'
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.userName && formik.errors.userName ? formik.errors.userName : null}
                    />


                    <InputText
                    name='password'
                    type='password'
                    placeholder='Contraseña'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                    />
                    
                    {/*                     
                    <Selection 
                    label='Local ' 
                    name='idPersona' 
                    type='select' 
                    opcion="nombre" 
                    opcionName="id" 
                    datos={location} 
                    /> */}

                    <Selection 
                    label='Rol ' 
                    name='idRole' 
                    type='select' 
                    opcion="nombre" 
                    opcionName="id" 
                    datos={rol} 
                    />
           
                </div>
              </div>

              <div className='m-0'>
                <input className='text-center
                    btn 
                    border-blue-900 border-1
                    bg-gradient-to-r from-blue-500 to-blue-900 hover:from-pink-500 hover:to-yellow-500
                    mt-3
                    ml-0
                    max-w-[60%] ' value='Registrar Usuario' type='submit'  disabled={!isDisable} 
                />
              </div>

            </form>
          </div>
        </div>

      </div>
    </main>
  )
} 
